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


export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("https://www.elitebcar.com/blog/airtable-get")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Blogs</h2>
        {blogs.map((post) => (
          <div
            key={post.id}
            className="grid md:grid-cols-2 gap-6 mb-16 bg-orange/20 rounded overflow-hidden"
          >
            <div>
              <img
                src={post.fields.Image?.[0]?.url}
                alt={post.fields.Name}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold">{post.fields.Name}</h3>
              <p
                className="my-4 text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.fields.Description }}
              />
              <a
                // href={`/blog/${slugify(post.fields.Name, { lower: true })}`}
                className="text-orange flex items-center gap-2"
              >
                Read More <HiArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
