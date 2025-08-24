"use client";
import { useContext } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import ApiDataContext from "@/context/ApiDataContext";

export default function Blogs() {
  const { data, loading, error } = useContext(ApiDataContext);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Blogs</h2>
        {data.map((post) => (
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
             <Link
  href={`/blog/${post.slug}`} // ✅ now TypeScript won’t complain
  className="text-orange flex items-center gap-2"
>
  Read More <HiArrowRight />
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
