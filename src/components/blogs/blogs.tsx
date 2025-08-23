import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default async function Blogs() {
  const res = await fetch("https://www.elitebcar.com/blog/airtable-get", {
    cache: "no-store", // always fetch fresh data
  });
  const response = await res.json();
  const blog = response.data
  return (
    <div className="pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Blogs</h2>
        {blog.map((post: any) => (
          <div
            key={post.id}
            className="grid md:grid-cols-2 gap-6 mb-16 bg-orange/20 rounded overflow-hidden"
          >
            <div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold">{post.title}</h3>
              <p
                className="my-4 text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.introduction }}
              />
              <Link
                href={`/blog/${post.slug}`}
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
