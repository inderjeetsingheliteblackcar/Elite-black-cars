import blogs from '../../../Blogsdata.json';
// import Bormblog from '../../../components/blogform/Bormblog'

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params: _params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await _params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="p-10 text-red-600">
        Blog post not found.
      </div>
    );
  }
  return (
    <div className="pt-40 pb-10 md:pb-20 px-4 max-w-5xl mx-auto">
      <h2 className="mb-6">{post.title}</h2>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[400px] object-cover mb-6 rounded"
      />
      <p className="mb-2" dangerouslySetInnerHTML={{ __html: post.introduction }}></p>
      <p className="mb-2" dangerouslySetInnerHTML={{ __html: post.overview }}></p>
      <p className="mb-2" dangerouslySetInnerHTML={{ __html: post.expanded_service }}></p>
      <h4 className="my-6">{post.heading}</h4>
      <p className="mb-2" dangerouslySetInnerHTML={{ __html: post.content }}></p>
      <p className='font-bold'>{post.heading2}</p>
      <div className='grid py-10 gap-10 md:grid-cols-2'>
        {post.features.map((feature) => (
          <div>
            <h4 className='mb-2'>{feature.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: feature.description }}></p>
          </div>
        ))}
      </div>
      <div className='grid md:py-10 md:grid-cols-2  gap-10'>
        {
          post.section.map((secdata) => (

            <div className='text' >
              <h3 className='mb-4'>{secdata.heading3}</h3>
              <ol className='ps-3 '>
                {secdata.services.map((list, index) => (
                  <div key={index}>
                    <li dangerouslySetInnerHTML={{ __html: list }} className='list-disc mb-2'></li>
                  </div>
                ))}
                <p className='mt-4'><i>{secdata.note}</i></p>
              </ol>
            </div>

          ))
        }  </div>
      <div className='grid py-10 md:grid-cols-2  gap-10'>
        <img src="/images/services1-min.png" className='h-[250px] w-full object-cover' alt="" />
        <div className='text'>
          <h2 className='mb-4'>{post.heading5}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.content2 }} ></p>
        </div>
      </div>
      {/* <Bormblog /> */}
    </div>
  );
}
