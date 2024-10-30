"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ActiveLink from "../common/ActiveLink";

// Icons
import { IoSearch } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { ProfileDropDown } from "@/app/ui/profile/ProfileDropDown";

export const HomeHeader = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => {
      setIsProfileOpen(false);
    });

    return () => {
      window.removeEventListener("click", () => {
        setIsProfileOpen(false);
      });
    };
  }, []);

  return (
    <>
      <header className="bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] header">
        <div className="flex items-center justify-between px-4 py-5 mx-auto xsm:px-10 max-w-screen-2xl content">
          <div className="flex gap-4 logo-search-input">
            <Link href="/">
              <h1 className="text-2xl font-bold cursor-pointer sm:text-3xl">
                J<span className="text-[#535353]">S</span>
              </h1>
            </Link>
            <div className="relative search-input">
              <input
                type="input"
                placeholder="Search"
                className="rounded-md outline-none py-1 lg:py-2 px-2 lg:px-3 font-medium max-w-56 lg:max-w-64 border-[#A2A2A2] border"
              />
              <IoSearch className="absolute text-xl -translate-y-1/2 text-[#A2A2A2] right-3 top-1/2" />
            </div>
          </div>
          <div className="flex gap-4 lg:gap-6 navigation">
            <ActiveLink
              href="/"
              className="text-[#535353] flex flex-col items-center justify-center gap-2 home-icon"
              activeClassName="!text-[#1976D2]"
            >
              <AiOutlineHome className="text-xl cursor-pointer lg:text-2xl" />
              <span className="text-sm font-semibold">Home</span>
            </ActiveLink>
            <ActiveLink
              href="/jobs"
              className="text-[#535353] flex flex-col items-center gap-2 jobs-icon"
              activeClassName="!text-[#1976D2]"
            >
              <MdOutlineWorkOutline className="text-xl cursor-pointer lg:text-2xl" />
              <span className="text-sm font-semibold">JOBS</span>
            </ActiveLink>
            <ActiveLink
              href="/message"
              className="text-[#535353] flex flex-col items-center gap-2 message-icon"
              activeClassName="!text-[#1976D2]"
            >
              <MdOutlineMessage className="text-xl cursor-pointer lg:text-2xl" />
              <span className="text-sm font-semibold ">MESSAGING</span>
            </ActiveLink>
            <ActiveLink
              href="/notifications"
              className="text-[#535353] flex flex-col items-center gap-2 notification-icon"
              activeClassName="!text-[#1976D2]"
            >
              <MdOutlineNotificationsActive className="text-xl cursor-pointer lg:text-2xl" />
              <span className="text-sm font-semibold ">NOTIFICATIONS</span>
            </ActiveLink>
            <div
              onClick={(e) => {
                setIsProfileOpen(!isProfileOpen);
                e.stopPropagation();
              }}
              className={`${
                isProfileOpen ? "!text-[#1976D2]" : "text-[#535353]"
              } relative flex flex-col items-center gap-2 outline-none cursor-pointer profile-icon`}
            >
              <FaRegUserCircle className="text-xl cursor-pointer lg:text-2xl" />
              <span className="flex items-center text-sm font-semibold">
                PROFILE <MdOutlineArrowDropDown />
              </span>
              <ProfileDropDown
                buttonName={"Employer"}
                isProfileOpen={isProfileOpen}
              />
            </div>
            <ActiveLink
              href="/packages"
              className="text-[#FFC107] mx-4 before:content-[''] before:h-1/2 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:absolute before:-left-4 relative before:bg-[#535353] flex flex-col items-center gap-2 home-icon"
              activeClassName="!text-[#1976D2]"
            >
              <IoDiamond className="text-xl cursor-pointer lg:text-2xl" />
              <span className="flex items-center text-sm font-semibold">
                GET PREMIUM
              </span>
            </ActiveLink>
          </div>
        </div>
      </header>
    </>
  );
};

// Todos:
// make header responsive
// make left profile section
