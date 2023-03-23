import React from "react";
import { useRouter } from "next/router";
import { AiFillHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
const Consider = ({ post,data }) => {
  const router = useRouter();
  console.log("post", post)
  console.log("dat", data)


  const userData = (post) => {
    return (
      <Link href={`/blogs/${post.id}`} key={post} className="mx-auto w-[400px]  md:w-[340px] lg:w-[300px] xl:w-[380px] md:h-[396px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer mx-auto ">
        <div className="bg-red-300">
          <Image
            src="/IMG-20230315-WA0003.jpg"
            alt=""
            srcSet=""
            className="object-cover"
            width={400}
            height={200}
            priority
          />
        </div>

        <div className="px-5">
          <h1 className="text-lg font-bold">{post?.title}</h1>
          <p className="text-lg text-gray-400">by {post?.userId}</p>
        </div>

        <div className="flex justify-between items-center px-5">
          <div className="flex gap-4">
            <div className="flex gap-2">
              <p className="py-1">
                <AiFillHeart />
              </p>
              <p>32</p>
            </div>

            <div className="flex gap-2">
              <p className="py-1">
                <IoMdShareAlt />
              </p>
              <p>Share</p>
            </div>
          </div>

          <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
            Read more
          </div>
        </div>
      </Link>
    )
  }
  return (
    <>
     {post?userData(post):
     data.map((user)=>{
      return(
        userData(user)
      )
     })
     }
    </>
  );
};

export default Consider;
