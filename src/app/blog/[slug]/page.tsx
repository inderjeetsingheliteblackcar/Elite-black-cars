import { Metadata } from "next";
import { notFound } from "next/navigation";

type Blog = {
  id: string;
  fields: {
    Name: string;
    Description?: string;
    Content?: string;
    Image?: { url: string }[];
  };
};

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const API_URL = "https://www.elitebcar.com/blog/airtable-get";

function shortDescription(text = "", max = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return undefined;
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/\s+\S*$/, "") + "...";
}

/**
 * Note: params may be a Promise in Next's dynamic APIs, so we await it.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params; // <-- await here fixes the error

  const res = await fetch(API_URL, { cache: "no-store" });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const blogs: Blog[] = data.data || [];

  const post = blogs.find((item) => toSlug(item.fields.Name) === slug);

  if (!post) {
    notFound();
  }

  const title = post.fields.Name;
  const description =
    shortDescription(post.fields.Description || post.fields.Content || "");
  const ogImage = post.fields.Image?.[0]?.url;

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: `https://www.elitebcar.com/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.elitebcar.com/blog/${slug}`,
      siteName: "Elite B Car",
      images: ogImage ? [{ url: ogImage, alt: title }] : undefined,
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };

  return metadata;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // <-- await here too

  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const blogs: Blog[] = data.data || [];

  const post = blogs.find((item) => toSlug(item.fields.Name) === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-40 blogs-spacing pb-10 md:pb-20 px-4 max-w-5xl mx-auto">
      <h1 className=" font-bold mb-6">{post.fields.Name}</h1>

      {post.fields.Image?.[0]?.url && (
        <img
          loading="lazy"
          src={post.fields.Image[0].url}
          alt={post.fields.Name}
          className="w-full h-[400px] object-cover mb-6 rounded"
        />
      )}

      <div
        className="prose prose-h1:mt-8 prose-h1:mb-4 prose-p:mb-6 prose-h2:mt-6 prose-h2:mb-3"
        dangerouslySetInnerHTML={{ __html: post.fields.Content || "" }}
      />
    </div>
  );
}
