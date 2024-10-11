import { Link } from "react-router-dom";

// Icons
import { IoSearch } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";

export const HomeHeader = () => {
  return (
    <>
      <header className="bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] header">
        <div className="flex items-center justify-between px-4 mx-auto xsm:px-10 max-w-screen-2xl py-7 content">
          <div className="flex gap-4 logo-search-input">
            <Link to="/home">
              <h1 className="text-2xl font-bold cursor-pointer sm:text-3xl">
                J<span className="text-[#535353]">S</span>
              </h1>
            </Link>
            <div className="relative search-input">
              <input
                type="input"
                placeholder="Search"
                className="rounded-md py-1 lg:py-2 px-2 lg:px-3 font-medium max-w-56 lg:max-w-64 border-[#A2A2A2] border"
              />
              <IoSearch className="absolute text-xl -translate-y-1/2 text-[#A2A2A2] right-3 top-1/2" />
            </div>
          </div>
          <div className="flex gap-4 lg:gap-6 navigation">
            <div className="flex flex-col items-center justify-center gap-2 home-icon">
              <AiOutlineHome className="text-xl lg:text-2xl cursor-pointer text-[#1976D2]" />
              <span className="text-[#1976D2] text-sm font-semibold">Home</span>
            </div>
            <div className="flex flex-col items-center gap-2 jobs-icon">
              <MdOutlineWorkOutline className="text-xl lg:text-2xl cursor-pointer text-[#535353]" />
              <span className="text-[#535353] text-sm font-semibold">JOBS</span>
            </div>
            <div className="flex flex-col items-center gap-2 message-icon">
              <MdOutlineMessage className="text-xl lg:text-2xl cursor-pointer text-[#535353]" />
              <span className="text-[#535353] text-sm font-semibold">
                MESSAGING
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 notification-icon">
              <MdOutlineNotificationsActive className="text-xl lg:text-2xl cursor-pointer text-[#535353]" />
              <span className="text-[#535353] text-sm font-semibold">
                NOTIFICATIONS
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 profile-icon">
              <FaRegUserCircle className="text-xl lg:text-2xl cursor-pointer text-[#535353]" />
              <span className="text-[#535353] flex items-center text-sm font-semibold">
                PROFILE <MdOutlineArrowDropDown />
              </span>
            </div>
            <div className="mx-4 before:content-[''] before:h-1/2 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:absolute before:-left-4 relative before:bg-[#535353] flex flex-col items-center gap-2 home-icon">
              <IoDiamond className="text-xl lg:text-2xl cursor-pointer text-[#FFC107]" />
              <span className="text-[#FFC107] flex items-center text-sm font-semibold">
                GET PREMIUM
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// Todos:
// make header responsive
// make left profile section
