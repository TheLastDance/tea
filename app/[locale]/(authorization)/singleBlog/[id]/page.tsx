"use server";

import blogImage from "../../../../../public/assets/image/blogImages/blog3.webp";
import Image from "next/image";
import { Blog } from "../../../interface";
// import { setStaticParamsLocale } from "next-international/server";

// function to generate static blog id
// export async function generateStaticParams() {
//   const response = await fetch("https://dummyjson.com/posts");
//   const blog: FetchedBlog = await response.json();

//   return blog.posts.map((item) => ({ id: `${item.id}` }));
// }

// function to fetch single blog id
async function getBlog(id: string) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const blog = await response.json();
  return blog;
}

export default async function SingleBlog({
  params: { id },
}: {
  params: { id: string };
}) {
  // setStaticParamsLocale(locale);

  const blog: Blog = await getBlog(id);

  return (
    <div className="w-4/5 flex items-center flex-col justify-center my-[20px] mx-auto mt-[130px]">
      <div className="my-[15px]">
        {" "}
        {blog.tags.map((tag, index) => (
          <span className="text-[16px] text-[#4f544f] uppercase" key={index}>
            {" "}
            # {tag}{" "}
          </span>
        ))}
      </div>

      <div className="mr-[20px] my-[10px]">
        <Image
          className="rounded-md"
          src={blogImage}
          alt="blog"
          width="300"
          height="300"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[20px] text-[#4c514c] font-bold mb-[15px]">
          {blog.title}....
        </p>
        <p className="text-[#4c514c] tracking-wide text-[16px]">{blog.body}</p>
      </div>
      <span className="text-lg text-gray-700 font-bold">
        {/* {" "}
        Reactions:{blog.reactions.likes} */}
      </span>
    </div>
  );
}
