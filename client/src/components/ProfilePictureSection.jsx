import React from "react";
import { RiUserLine } from "react-icons/ri";
import { useState, useRef } from "react";

const ProfilePictureSection = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("/api/placeholder/128/128");

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const [profileData, setProfileData] = useState({
    name: "Moodeng ja",
    username: "moodeng.cute",
    email: "moodeng.cute@gmail.com",
  });

  return (
    <>
      <div className="px-4 pt-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-brown-400">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-3 text-lg text-gray-600">{profileData.name}</span>
          <span className="ml-6 text-lg font-medium">Profile</span>
        </div>
      </div>

      <div className="border rounded-lg mx-4 mt-8 p-6 flex flex-col items-center justify-center">
        <div className="w-[7.5rem] h-[7.5rem] rounded-full bg-brown-400 mb-8 flex items-center justify-center">
          <RiUserLine className="text-white text-5xl" />
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
        <button
          className="border border-gray-300 rounded-full py-2 px-6 text-base hover:bg-gray-100"
          onClick={handleImageClick}
        >
          Upload profile picture
        </button>
      </div>

      <div className="mt-8 px-4">
          <div className="border rounded-lg p-4 mb-4">
            <label className="block text-gray-500 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-200 focus:outline-none"
            />
          </div>

          <div className="border rounded-lg p-4 mb-4">
            <label className="block text-gray-500 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-200 focus:outline-none"
            />
          </div>

          <div className="border rounded-lg p-4 mb-4">
            <label className="block text-gray-500 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-200 focus:outline-none text-gray-400"
            />
          </div>

          <div className="p-2 inline-block mt-2 mb-16">
            <button className="bg-gray-800 text-white rounded-full py-2 px-12">
              Save
            </button>
          </div>
        </div>
    </>
  );
};

export default ProfilePictureSection;
