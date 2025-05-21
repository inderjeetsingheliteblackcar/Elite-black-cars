import Link from 'next/link';
import { HiArrowRight } from "react-icons/hi";
import blogs from '../../Blogsdata.json';

const Blogs = () => {
  return (
    <div className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className="text-3xl font-bold mb-10">Blogs</h2>
        {blogs.map((post) => (
          <div key={post.id} className="grid md:grid-cols-2 gap-6 mb-16 bg-orange/20 rounded overflow-hidden">
            <div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold">{post.title}</h3>
              <p className="my-4 text-gray-700">{post.introduction}</p>
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
};

export default Blogs;
