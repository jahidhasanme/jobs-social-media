import React from "react";

export const UserProfile = () => {
  return (
    <main className="min-h-screen px-4 xsm:px-10 py-7 bg-[#F5F5F5]">
      <div className="flex mx-auto home-page-contents max-w-screen-2xl"></div>
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-md about-section">
        <div className="profile">
          {/* Profile img */}
          <div className="h-16 mb-16 banner-logo">
            <img
              src="https://img.goodfon.com/original/1920x1080/3/22/naruto-naruto-barion-mode-rezhim-bariona-sila-moshch.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
            <img
              className="relative z-10 object-cover w-20 h-20 mx-auto -my-8 border-4 border-white rounded-full"
              src="https://mrwallpaper.com/images/hd/anime-naruto-holding-ninja-knife-dv3cqw2dgcbwupwx.jpg"
              alt=""
            />
          </div>
          {/* Bio sec */}
          <div className="flex flex-col items-center pb-4 text-center border-b border-[#F5F5F5] texts">
            <h3 className="mb-4 text-xl font-semibold ">Uzumaki Naruto</h3>
            <p className="text-[#535353] text-sm">
              Graphics Designer and Marketing Specialist
            </p>
            <p className="mt-4 text-[#A2A2A2] text-sm">Company Name</p>
          </div>
        </div>
        {/* Followers  */}
        <div className="border-b border-[#F5F5F5] flex px-3 py-5 justify-evenly followers">
          <div className="text-[#1976D2] text-center text-sm font-semibold followers">
            <p className="">Followers</p>
            <p>152</p>
          </div>
          <div className="text-[#1976D2] text-center text-sm font-semibold following">
            <p className="">Following</p>
            <p>152</p>
          </div>
        </div>
        {/* About me  */}
        <div className="border-b border-[#F5F5F5] w-full px-3 py-5 about">
          <p className="text-[#535353] mb-2 font-medium text-sm">About Me</p>
          <p className="text-sm font-medium text-[#A2A2A2]">
            Lorem ipsum dolor sit amet consectetur. Volutpat diam egestas felis
            urna aliquet hendrerit egestas. Pharetra amet non congue natoque in
            risus sit id. Iaculis est scelerisque bibendum tellus nibh semper.
            Sit quis risus dolor tortor.
          </p>
        </div>
        {/* Job Title  */}
        <div className="border-b border-[#F5F5F5] px-3 py-5 job-exp">
          <div className="mb-4">
            <p className="text-sm text-[#535353] mb-1 font-medium">
              Present Job Title
            </p>
            <p className="text-[#A2A2A2] font-medium text-sm">Company</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-[#535353] mb-1 font-medium">
              Former Job Title
            </p>
            <p className="text-[#A2A2A2] font-medium text-sm">Company</p>
          </div>
        </div>
        {/* Skills  */}
        <div className="border-b border-[#F5F5F5] px-3 py-5 skills">
          <p className="text-sm font-medium text-[#535353] mb-1">Skills</p>
          <ul className="text-[#1976D2] text-sm font-medium">
            <li>Research & Development</li>
            <li>Marketing</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

// Todos:
// make responsive
// make this reusable
