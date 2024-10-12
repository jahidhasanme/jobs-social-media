// Icons
import { IoDiamond } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { LiaFacebookSquare } from "react-icons/lia";

export const UserProfile = () => {
  return (
    // home page user details left-sec
    <div className="w-full max-w-sm overflow-hidden rounded-md about-section">
      {/* Profile */}
      <div className="bg-white profile">
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
      {/* Subscription */}
      <div className="text-[#FFC107] font-medium flex items-center gap-2 p-4 my-5 bg-white rounded-md">
        <IoDiamond className="text-xl" />
        <span>Get Premium at BDT 90</span>
      </div>
      {/* Education & Contact */}
      <div className="bg-white education-contact">
        <div className="p-4 education border-b border-[#F5F5F5]">
          <div className="my-3">
            <p className="text-sm text-[#535353] font-medium">
              University Name
            </p>
            <p className="text-[#A2A2A2] text-sm">Major</p>
          </div>
          <div className="my-3">
            <p className="text-sm text-[#535353] font-medium">College Name</p>
            <p className="text-[#A2A2A2] text-sm">Science</p>
          </div>
          <div className="my-3">
            <p className="text-sm text-[#535353] font-medium">School Name</p>
            <p className="text-[#A2A2A2] text-sm">XYZ</p>
          </div>
        </div>
        <div className="p-4 contact border-b border-[#F5F5F5]">
          <div className="text-[#535353] flex items-center gap-2 my-3">
            <MdOutlineEmail className="text-lg" />
            <span className="text-sm">duishddid@gmail.com</span>
          </div>
          <div className="text-[#535353] flex items-center gap-2 my-3">
            <FiPhoneCall className="text-lg" />
            <span className="text-sm">+88888888888</span>
          </div>
        </div>
        <div className="p-4 social">
          <div className="text-[#535353] flex items-center gap-2 my-3">
            <LiaLinkedin className="text-xl" />
            <span className="text-sm">your-linkedin.com</span>
          </div>
          <div className="text-[#535353] flex items-center gap-2 my-3">
            <LiaFacebookSquare className="text-xl" />
            <span className="text-sm">your-facebook.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Todos:
// make responsive
// make this reusable
// changes contact able messages with link
