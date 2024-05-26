"use server";
import Image from "next/image";
import blogImage from "../../../../public/assets/image/blogImages/blog3.webp";
import Link from "next/link";
import { FetchedBlog } from "../../interface";

// function to fetch blogs
async function getBlog() {
  const response = await fetch("https://dummyjson.com/posts");
  const blogs: FetchedBlog = await response.json();
  return blogs.posts;
}
export default async function Blog() {
  const blogs = await getBlog();

  return (
    <div className="flex items-center justify-center flex-col md:flex-row md:flex-wrap p-4 mt-[80px]">
      {blogs.map((item) => (
        <div
          key={item.id}
          className=" w-[400px]  mt-[60px] pb-[40px] border  border-red flex flex-col items-center justify-center mr-[15px] bg-[#e2e7e0] rounded-md overflow-hidden transition-all duration-200"
        >
          {" "}
          <Image
            className="w-full h-[300px] rounded-md mb-[25px] cursor-pointer hover:scale-110 transition-all duration-200"
            src={blogImage}
            alt={item.title}
          />
          <div className="flex flex-col items-center justify-center mt-[20px] py-[20px] px-[15px] h-[150px]">
            <h2 className="text-[18px] text-[#4f544f] cursor-pointer mb-[10px]">
              {item.title}
            </h2>
            <Link href={`/singleBlog/${item.id}`}>
              {" "}
              <button className="blog-btn">Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
// className="blog-content"
