import blogs from '../../../Blogsdata.json';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return  blogs.map((post) =>({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await Promise.resolve(params); 
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="p-10 text-red-600">
        Blog post not found.
      </div>
    );
  }
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[400px] object-cover mb-6 rounded"
      />
      <p className="text-lg leading-7 text-gray-800">{post.content}</p>
    </div>
  );
}
