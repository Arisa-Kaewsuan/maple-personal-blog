import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import BlogCard from "./BlogCard";
import MobileDropdown from "./MobileDropdown";
import { getPosts } from "../api/post";

const ArticleSection = () => {
  const [activeTab, setActiveTab] = useState("Highlight");
  const tabs = ["Highlight", "Cat", "Inspiration", "General"];
  const [totalPage, setTotalPage] = useState();


  const [serverData, setServerData] = useState([]);

  const getServerData = async() => {
    const response = await getPosts({
      category: activeTab === "Highlight" ? undefined : activeTab,
      // page: page 
    });
    console.log(response);
    // console.log(response);
    // console.log(response.data.posts);
    // console.log(activeTab);
    setServerData(response.data.posts);
    setTotalPage(response.data.totalPages);
  }

  const handleChangePage = async (page) => {
    await getServerData(page);
  }

  // console.log(serverData);
  useEffect(() => {
    getServerData();
  },[activeTab])

  return (
    <>
      <div className="w-full md:px-[7.5rem]">
        <h3 className="px-4 md:px-0 pt-14 md:pt-20 md:pb-8 text-brown-600 font-semibold text-h3">
          Latest articles
        </h3>

        <div>
          {/* Latest Search&Filter Show On Mobile */}
          <MobileDropdown
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            options={tabs}
          />

          {/* Latest Search&Filter Show On Desktop */}
          <div className="hidden md:flex justify-between items-center bg-brown-200 rounded-2xl h-20 ">
            <div>
              <div className=" hidden md:flex justify-between items-center bg-brown-200 rounded-2xl h-20 px-6">
                <div className="flex items-center">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`${
                        tab === "Highlight" ? "" : "ml-2"
                      } px-5 py-3 font-medium text-b1 rounded-lg transition-colors duration-200 mr-1 ${
                        activeTab === tab
                          ? "bg-brown-300 text-brown-500"
                          : "text-brown-400 hover:bg-brown-100"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mr-5 flex items-center relative">
              <input
                type="search"
                placeholder="Search"
                className="w-[22.5rem] h-12 font-medium text-b1 text-brown-400 bg-white rounded-lg pl-5"
                disabled
              />
              <RiSearch2Line className="absolute right-4 text-brown-400" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {serverData.map((post) => (
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

        <div className="flex justify-center cursor-pointer">
        {
          Array.from({length: totalPage},(_,k) => k+1).map((page) => (
              <button onClick={() => handleChangePage(page)} className="ml-5 py-2 px-5 text-white bg-brown-600 rounded-sm">{page}</button>
          ))
        }
        </div>
      </div>
    </>
  );
};

export default ArticleSection;
