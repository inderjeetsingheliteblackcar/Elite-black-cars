import { notFound } from "next/navigation";
import type { Blog } from "@/context/blogdata";
import { toSlug } from "@/context/slug";

async function getBlogs(): Promise<(Blog & { slug: string })[]> {
  const res = await fetch("http://localhost:3000/blog/airtable-get", {
    cache: "no-store", // fetch fresh data
  });
  const json = await res.json();

  return (json.data || []).map((item: Blog) => ({
    ...item,
    slug: toSlug(item.fields.Name),
  }));
}

// ✅ Generate static paths
export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((post) => ({ slug: post.slug }));
}

// ✅ Single Blog Page
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blogs = await getBlogs();
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-40 pb-10 md:pb-20 px-4 max-w-5xl mx-auto">
      <h2 className="mb-6">{post.fields.Name}</h2>
      <img
        src={post.fields.Image?.[0]?.url}
        alt={post.fields.Name}
        className="w-full h-[400px] object-cover mb-6 rounded"
      />
      <p
        className="mb-2"
        dangerouslySetInnerHTML={{ __html: post.fields.Description }}
      />
      <p
        className="mb-2"
        dangerouslySetInnerHTML={{ __html: post.fields.Content }}
      />
    </div>
  );
}
