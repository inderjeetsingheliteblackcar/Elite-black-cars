import Link from "next/link";
import { BlogResponse } from "./BlogResponse";
import { HiArrowRight } from "react-icons/hi2";

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-") // spaces → hyphens
    .replace(/[^\w-]+/g, ""); // remove special chars
}

export default async function Blogs() {
  const res = await fetch("https://www.elitebcar.com/blog/airtable-get", {
    cache: "no-store",
  });
  const json: BlogResponse = await res.json();

  const blogs = json.data;

  return (
    <div className="pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Blogs</h2>
        {blogs.map((post) => {
          const slug = slugify(post.fields.Name);

          return (
            <div
              key={post.id}
              className="grid md:grid-cols-2 gap-6 mb-16 bg-orange/20 rounded overflow-hidden"
            >
              <div>
                <img
                  src={post.fields.Image[0]?.url}
                  alt={post.fields.Name}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold">{post.fields.Name}</h3>
                <p
                  className="my-4 text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: post.fields.Description,
                  }}
                />
                <Link
                  href={`/blog/${slug}`}
                  className="text-orange flex items-center gap-2"
                >
                  Read More <HiArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
