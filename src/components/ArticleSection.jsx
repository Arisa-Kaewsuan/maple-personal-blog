import React from "react";
import { useState } from "react";
// import Content from './customs/Content'
import { RiSearch2Line } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blogPosts";
import MobileDropdown from "./MobileDropdown";

const ArticleSection = () => {
  const [activeTab, setActiveTab] = useState("Highlight");
  const tabs = ["Highlight", "Cat", "Inspiration", "General"];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Highlight");
  const options = ["Highlight", "Cat", "Inspiration", "General"];

  return (
    <>
      <div className="w-full md:px-[7.5rem]">
        <h3 className="px-4 md:px-0 pt-14 md:pt-20 md:pb-8 text-brown-600 font-semibold text-h3">
          Latest articles
        </h3>

        <div>
          {/* Latest Search&Filter Show On Mobile */}
          <MobileDropdown/>

          {/* Latest Search&Filter Show On Desktop */}
          <div className="hidden md:flex justify-between items-center bg-brown-200 rounded-2xl h-20 ">
            <div>
              <div className=" hidden md:flex justify-between items-center bg-brown-200 rounded-2xl h-20 px-6">
                <div className="flex items-center">
                  {tabs.map((tab) =>
                    tab === "Highlight" ? (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-3 rounded-lg font-medium text-b1 ${
                          activeTab === tab
                            ? "bg-brown-300 text-brown-500"
                            : "text-brown-400"
                        }`}
                      >
                        {tab}
                      </button>
                    ) : (
                      <a
                        key={tab}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab);
                        }}
                        className={` ml-2 px-5 py-3 font-medium text-b1 rounded-lg transition-colors duration-200 mr-1 ${
                          activeTab === tab
                            ? "bg-brown-300 text-brown-500"
                            : "text-brown-400 hover:bg-brown-100"
                        }`}
                      >
                        {tab}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mr-5 flex items-center relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-[22.5rem] h-12 font-medium text-b1 text-brown-400 bg-white"
              />
              <RiSearch2Line className="absolute right-4 text-brown-400" />
            </div>
          </div>
        </div>

        <div className="px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              className="flex flex-1"
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
            />
          ))}
        </div>

        <a
          href="#"
          className="mt-12 md:mt-20 underline text-brown-600 text-b1 font-medium flex justify-center"
        >
          View more
        </a>
      </div>
    </>
  );
};

export default ArticleSection;
