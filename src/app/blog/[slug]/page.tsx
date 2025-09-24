import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Blog = {
  id: string;
  fields: {
    Name: string;
    Description?: string;
    Content?: string;
    Image?: { url: string }[];
    Author?: string;
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

// generateMetadata must await params if it might be a thenable.
export async function generateMetadata({
  params,
}: {
  // allow params to be a plain object OR a Promise that resolves to it
  params: { slug: string } | Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const res = await fetch("https://www.elitebcar.com/blog/airtable-get", {
    cache: "no-store",
  });

  if (!res.ok) notFound();

  const data = await res.json();
  const blogs: Blog[] = data.data || [];

  const post = blogs.find((item) => toSlug(item.fields.Name) === slug);
  if (!post) notFound();

  const title = `${post.fields.Name} | Elite B Car`;
  const description =
    post.fields.Description ||
    "Get in touch with Elite B Car for bookings, airport transfers, tours, or corporate travel inquiries.";

  const author = post.fields.Author || "Elite B Car";

  return {
    title,
    description,
    authors: [{ name: author }],
    alternates: {
      canonical: `https://www.elitebcar.com/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      authors: [author],
      images: post.fields.Image?.[0]?.url ? [post.fields.Image[0].url] : undefined,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch("https://www.elitebcar.com/blog/airtable-get", {
    cache: "no-store",
  });

  if (!res.ok) notFound();

  const data = await res.json();
  const blogs: Blog[] = data.data || [];

  const post = blogs.find((item) => toSlug(item.fields.Name) === slug);
  if (!post) notFound();

  return (
    <div className="pt-40 blogs-spacing pb-10 md:pb-20 px-4 max-w-5xl mx-auto">
      <h1 className="font-bold mb-6">{post.fields.Name}</h1>

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
