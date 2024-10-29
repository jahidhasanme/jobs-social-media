import { useState } from "react";

// Icons
import { TbMessage2 } from "react-icons/tb";
import { UserMessage } from "@/app/ui/message/UserMessage";
import { IoSearch } from "react-icons/io5";
import { RiSoundModuleFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export const FloatingMessage = () => {
  // open & close state of floating message
  const [isFloatingMessageOpen, setIsFloatingMessageOpen] = useState(false);

  return (
    // Floating message container
    <div className="pointer-events-none h-[90vh] fixed flex flex-col items-end gap-6 bottom-6 right-6 floating-message">
      <div
        className={`${
          isFloatingMessageOpen
            ? "top-0 opacity-100 visible"
            : "invisible opacity-0 top-5"
        } relative pointer-events-all ease-linear duration-200 w-full max-w-sm messages bg-[#F5F5F5] rounded shadow-[5px_10px_21px_0px_rgba(0,0,0,0.25)] h-full scroll-bar-none overflow-y-scroll`}
      >
        {/* Top Area */}
        <div className="flex justify-between items-center top-search bg-[#00B2FF] p-4 rounded-t-md rounded-tl-md">
          <p className="font-semibold text-white">Messages</p>
          <div className="flex items-center gap-3 text-2xl text-white icons">
            <button className="search-btn">
              <IoSearch />
            </button>
            <button className="filter-btn">
              <RiSoundModuleFill />
            </button>
          </div>
        </div>
        {/* User Messages */}
        <div className="messages p-2 space-y-2 bg-[#F5F5F5] rounded">
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
        </div>
      </div>
      {/* message button */}
      <button
        onClick={() => setIsFloatingMessageOpen(!isFloatingMessageOpen)}
        className={`${
          isFloatingMessageOpen
            ? "!bg-[#F5F5F5] text-[#535353]"
            : "text-white bg-[#1976D2]"
        } relative pointer-events-all shrink-0 outline-none message-btn shadow-[5px_10px_21px_0px_rgba(0,0,0,0.25)] flex justify-center items-center w-14 h-14 rounded-full`}
      >
        {isFloatingMessageOpen ? (
          <IoMdClose className="text-3xl" />
        ) : (
          <TbMessage2 className="text-4xl" />
        )}
        <div
          className={`absolute -top-2 right-0 notification-count w-6 h-6 bg-[#FF3D00] rounded-full ${
            isFloatingMessageOpen ? "hidden" : ""
          }`}
        >
          <span className="">2</span>
        </div>
      </button>
    </div>
  );
};

// Todos:
// Make the floating message fixed (if asked)
