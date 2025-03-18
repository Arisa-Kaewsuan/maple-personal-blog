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

        <div className='px-4 md:px-0'>
          <div className="md:flex md:gap-5">
            <BlogCard className="flex flex-1" image={blogPosts[0].image} category={blogPosts[0].category} title={blogPosts[0].title} description={blogPosts[0].description} author={blogPosts[0].author} date={blogPosts[0].date}/>
            <BlogCard className="flex flex-1" image={blogPosts[1].image} category={blogPosts[1].category} title={blogPosts[1].title} description={blogPosts[1].description} author={blogPosts[1].author} date={blogPosts[1].date}/>
          </div>

          <div className="md:flex md:gap-5">
            <BlogCard className="flex flex-1" image={blogPosts[2].image} category={blogPosts[2].category} title={blogPosts[2].title} description={blogPosts[2].description} author={blogPosts[2].author} date={blogPosts[2].date}/>
            <BlogCard className="flex flex-1" image={blogPosts[3].image} category={blogPosts[3].category} title={blogPosts[3].title} description={blogPosts[3].description} author={blogPosts[3].author} date={blogPosts[3].date}/>
          </div>

          <div className="md:flex md:gap-5">
            <BlogCard className="flex flex-1" image={blogPosts[4].image} category={blogPosts[4].category} title={blogPosts[4].title} description={blogPosts[4].description} author={blogPosts[4].author} date={blogPosts[4].date}/>
            <BlogCard className="flex flex-1" image={blogPosts[5].image} category={blogPosts[5].category} title={blogPosts[5].title} description={blogPosts[5].description} author={blogPosts[5].author} date={blogPosts[5].date}/>
          </div>
        </div>

        <a href="#" className='mt-12 md:mt-20 underline text-brown-600 text-b1 font-medium flex justify-center'>View more</a>
      </div>
    </>
  );
};

export default ArticleSection;
