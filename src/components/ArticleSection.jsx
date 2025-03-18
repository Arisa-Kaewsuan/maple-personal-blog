import React from "react";
// import Content from './customs/Content'
import { RiSearch2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blogPosts";

const ArticleSection = () => {
  return (
    <>
      <div className="w-full md:px-[7.5rem]">
        <h3 className="px-4 md:px-0 pt-14 md:pt-20 md:pb-8 text-brown-600 font-semibold text-h3">
          Latest articles
        </h3>

        <div>
          {/* Latest Search&Filter Show On Mobile */}
          <form className="md:hidden w-full mt-4 p-4 h- bg-brown-200 flex flex-col">
            <div className="w-full relative bg-amber-100">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 bg-white h-12 rounded-[0.5rem]"
              />
              <RiSearch2Line className="text-brown-600 w-6 h-6 absolute right-5 top-3" />
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="" className="mt-4 text-brown-400">
                Category
              </label>
              <input
                type="text"
                placeholder="Highlight"
                className="mt-3 px-4  bg-white h-12 rounded-[0.5rem]"
              />
              <IoIosArrowDown className="absolute right-4 top-16 text-brown-600 w-6 h-6" />
            </div>
          </form>

          {/* Latest Search&Filter Show On Desktop */}
          <div className="hidden md:flex justify-between items-center bg-brown-200 rounded-2xl h-20 px-6">
            <div>
                <Button className="bg-brown-300 text-brown-500 text-b1 font-medium">Highlight</Button>
                <a href="#" className="px-5 py-3 font-medium text-b1 text-brown-400">Cat</a>
                <a href="#" className="px-5 py-3 font-medium text-b1 text-brown-400">Inspiration</a>
                <a href="#" className="px-5 py-3 font-medium text-b1 text-brown-400">General</a>
            </div>

            <div className="flex items-center relative">
                <Input type="search" placeholder="Search" className="w-[22.5rem] h-12 font-medium text-b1 text-brown-400 bg-white"/>
                <RiSearch2Line className="absolute right-4 text-brown-400"/>
            </div>
          </div>
        </div>

        <div className='px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} className="flex flex-1" image={post.image} category={post.category} title={post.title} description={post.description} author={post.author} date={post.date}/>
          ))}
        </div>

        <a href="#" className='mt-12 md:mt-20 underline text-brown-600 text-b1 font-medium flex justify-center'>View more</a>
      </div>
    </>
  );
};

export default ArticleSection;
