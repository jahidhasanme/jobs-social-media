"use client";

import { useEffect, useState } from "react";
import ActiveLink from "@/app/ui/common/ActiveLink";

// Icons
import { IoSearch } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { ProfileDropDown } from "@/app/ui/profile/ProfileDropDown";

export const AdminHeader = () => {
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
    <header className="bg-[#F5F5F5] header">
      <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-screen-2xl content">
        <div className="relative search-input">
          <input
            type="input"
            placeholder="Search"
            className="max-w-md px-3 py-2 rounded-md outline-none"
          />
          <IoSearch className="absolute text-xl -translate-y-1/2 text-[#A2A2A2] right-3 top-1/2" />
        </div>

        <div className="flex gap-4 lg:gap-6 navigation">
          <ActiveLink
            href="/admin/message"
            className={`text-[#535353] flex flex-col items-center gap-2 message-icon`}
            activeClassName="text-[#1976D2]"
          >
            <MdOutlineMessage className="text-xl cursor-pointer lg:text-2xl" />
            <span className="text-sm font-semibold ">MESSAGING</span>
          </ActiveLink>
          <ActiveLink
            href="/admin/notifications"
            className={`text-[#535353] flex flex-col items-center gap-2 notification-icon`}
            activeClassName="text-[#1976D2]"
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
              isProfileOpen ? "text-[#1976D2]" : "text-[#535353]"
            } relative flex flex-col items-center gap-2 outline-none cursor-pointer profile-icon`}
          >
            <FaRegUserCircle className="text-xl cursor-pointer lg:text-2xl" />
            <span className="flex items-center text-sm font-semibold">
              PROFILE <MdOutlineArrowDropDown />
            </span>
            <ProfileDropDown
              additionalClass={"right-3"}
              isProfileOpen={isProfileOpen}
              buttonName={"Employee"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
