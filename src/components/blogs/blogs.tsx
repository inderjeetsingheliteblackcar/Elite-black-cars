"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

export type BlogResponse = {
  success: boolean;
  data: Blog[];
};

export type Blog = {
  id: string;
  createdTime: string; // ISO date string
  fields: {
    Name: string;
    Description: string;
    Content: string;
    Image: BlogImage[];
  };
};

export type BlogImage = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: Thumbnail;
    large: Thumbnail;
    full: Thumbnail;
  };
};

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") 
    .replace(/\s+/g, "-")         
    .replace(/-+/g, "-");         
}

type BlogsProps = {
  limit?: number; 
};

export default function Blogs({ limit }: BlogsProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/blog/airtable-get")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const visibleBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <div className="pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex mb-10 items-center justify-between">
          <h2 className=" ">Blogs</h2>
          <Link href="/blog" className="text-orange hide-onblog flex items-center gap-2">
            View All <HiArrowRight />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {visibleBlogs.map((post) => (
            <div
              key={post.id}
              className="gap-6  bg-orange/20 rounded overflow-hidden"
            >
              <div>
                <img loading="lazy"
                  src={post.fields.Image?.[0]?.url}
                  alt={post.fields.Name}
                  className="w-full h-[360px] object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold">{post.fields.Name}</h3>
                <p
                  className="my-4 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.fields.Description }}
                />
                <Link
                  href={`/blog/${toSlug(post.fields.Name)}`}
                  className="text-orange flex items-center gap-2"
                >
                  Read More <HiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
