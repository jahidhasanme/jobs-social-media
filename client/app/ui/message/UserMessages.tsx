// Icons
import { IoMdSearch } from "react-icons/io";
import { RiSoundModuleFill } from "react-icons/ri";
import { UserMessage } from "./UserMessage";

export const UserMessages = () => {
  return (
    <div className="w-full max-w-sm overflow-y-scroll userMessages">
      {/* search container */}
      <div className="flex justify-between w-full gap-2 search-container">
        <div className="relative w-full search-message">
          <input
            className="w-full px-4 py-3 text-sm rounded-md outline-none"
            type="text"
            name="search-message"
            id="search-message"
            placeholder="Search messages"
          />
          <IoMdSearch className="absolute text-2xl text-[#CDCDCD] -translate-y-1/2 cursor-pointer right-3 top-1/2" />
        </div>
        <div className="p-2 bg-white mixer-icon w-max">
          <RiSoundModuleFill className="text-2xl text-[#CDCDCD]" />
        </div>
      </div>
      <div className="my-4 space-y-2 messages-container">
        {/* Message from others */}
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
      </div>
    </div>
  );
};

// Todos:
// Make responsive
// Make dynamic & re-useable
