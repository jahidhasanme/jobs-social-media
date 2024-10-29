// Icons
import { MdAddToPhotos } from "react-icons/md";
import { LuCheckSquare } from "react-icons/lu";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineArchive } from "react-icons/md";

export const JobManagement = () => {
  return (
    <div className="w-full h-max max-w-[255px] px-4  bg-white rounded-md job-management">
      <div className="option py-3 border-b border-[#f5f5f5] text-[#535353] flex items-center gap-2">
        <MdAddToPhotos className="text-2xl" />
        <p className="text-sm font-semibold">Saved Jobs</p>
        <span className="text-sm">(15)</span>
      </div>
      <div className="option py-4 border-b border-[#f5f5f5] text-[#535353] flex items-center gap-2">
        <LuCheckSquare className="text-2xl" />
        <p className="text-sm font-semibold">Applied Jobs</p>
        <span className="text-sm">(15)</span>
      </div>
      <div className="option py-4 border-b border-[#f5f5f5] text-[#535353] flex items-center gap-2">
        <RiCalendarScheduleLine className="text-2xl" />
        <p className="text-sm font-semibold">Interview Schedule</p>
        <span className="text-sm">(1)</span>
      </div>
      <div className="option py-4 text-[#535353] flex items-center gap-2">
        <MdOutlineArchive className="text-2xl" />
        <p className="text-sm font-semibold">Archived</p>
        <span className="text-sm"></span>
      </div>
    </div>
  );
};
