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



// ✅ Helper function to generate slugs
function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch("https://www.elitebcar.com/blog/airtable-get", {
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
        //className="prose"
        className="prose prose-h1:mt-8 prose-h1:mb-4 prose-p:mb-6 prose-h2:mt-6 prose-h2:mb-3"
        dangerouslySetInnerHTML={{ __html: post.fields.Content || "" }}
      />
    </div>
  );
}
