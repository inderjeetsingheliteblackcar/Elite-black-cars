// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

// Blog type (simplify if you already have it elsewhere)
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
  params: Promise<{ slug: string }>; // 👈 make params async
}) {
  const { slug } = await params; // 👈 await params here

  // Fetch blogs from your API route
  const res = await fetch("https://www.elitebcar.com/blog/airtable-get", {
    cache: "no-store", // always fresh
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const blogs: Blog[] = data.data || [];

  // Match blog by slug
  const post = blogs.find((item) => toSlug(item.fields.Name) === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-40 pb-10 md:pb-20 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{post.fields.Name}</h1>

      {post.fields.Image?.[0]?.url && (
        <img
          src={post.fields.Image[0].url}
          alt={post.fields.Name}
          className="w-full h-[400px] object-cover mb-6 rounded"
        />
      )}

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.fields.Content || "" }}
      />
    </div>
  );
}
