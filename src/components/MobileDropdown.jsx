import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const MobileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Highlight");

  const options = ["Highlight", "Cat", "Inspiration", "General"];

  return (
    <form className="md:hidden w-full mt-4 p-4 bg-brown-200 flex flex-col">
      {/* Search */}
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 bg-white h-12 rounded-[0.5rem]"
        />
        <RiSearch2Line className="text-brown-600 w-6 h-6 absolute right-5 top-3" />
      </div>

      {/* Dropdown */}
      <div className="flex flex-col relative mt-4">
        <label className="text-brown-400 mb-2">Category</label>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 bg-white h-12 rounded-[0.5rem] flex justify-between items-center"
        >
          <span>{selected}</span>
          <IoIosArrowDown className="text-brown-600 w-6 h-6" />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-[100%] mt-2 left-0 w-full bg-white rounded-xl shadow-lg z-10">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-brown-100 rounded-xl ${
                  selected === option ? "font-medium text-brown-600" : "text-brown-500"
                }`}
              >
                {selected === option && "✓ "} {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </form>
  );
};

export default MobileDropdown;
