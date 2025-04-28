import React from "react";
import { User, KeyRound, Mail } from "lucide-react";
import { useState } from "react";

const ProfilePictureDesktop = () => {
  const [profileData, setProfileData] = useState({
    name: "Moodeng ja",
    username: "moodeng.cute",
    email: "moodeng.cute@gmail.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving profile data:", profileData);
    // You could add API call here
  };

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <header className="border-b border-gray-200 p-4 flex items-center justify-between w-full">
          <h1 className="text-xl font-medium">hh.</h1>
          <div className="flex items-center">
            <button className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/api/placeholder/40/40"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="ml-2">Moodeng ja</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </header>

        <div className="flex flex-1">
          <aside className="w-64 border-r border-gray-200 p-4 min-h-screen">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/api/placeholder/60/60"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h2 className="font-medium">Moodeng ja</h2>
                <h3 className="text-gray-500">Profile</h3>
              </div>
            </div>

            <nav>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center text-gray-700">
                    <User className="h-5 w-5 mr-3" />
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-700">
                    <KeyRound className="h-5 w-5 mr-3" />
                    <span>Reset password</span>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="flex-1 p-8">
            <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded">
              <div className="flex flex-col items-center mb-8">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img
                    src="/api/placeholder/120/120"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
                  Upload profile picture
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={profileData.username}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                    readOnly
                  />
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProfilePictureDesktop;
