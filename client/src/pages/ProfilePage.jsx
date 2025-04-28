import React from "react";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import ProfilePictureSection from "@/components/ProfilePictureSection";
import ProfilePictureDesktop from "@/components/ProfilePictureDesktop";

const ProfilePage = () => {
  return (
    <>
      <div className="md:hidden">
        <NavBar />
      </div>

      <div className="md:hidden max-w-md mx-auto bg-gray-50 min-h-screen">
        <Header />
        <ProfilePictureSection />
      </div>

      <div className="hidden md:block max-w-6xl mx-auto bg-gray-50 min-h-screen">
        <ProfilePictureDesktop />
      </div>
    </>
  );
};

export default ProfilePage;
