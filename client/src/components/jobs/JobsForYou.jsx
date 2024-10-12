// Icons
import { MdArrowDropDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export const JobsForYou = () => {
  return (
    <div className="w-full max-w-2xl JobsForYou">
      <div className="flex flex-wrap items-center gap-2 text-xs selection">
        <button className="p-2 gap-2 text-[#535353] duration-200 ease-linear hover:bg-[#1976D2] hover:text-white rounded-md border border-[#A2A2A2] flex items-center">
          <p className="font-medium">Posting Date</p>
          <MdArrowDropDown />
        </button>
        <button className="p-2 gap-2 text-[#535353] duration-200 ease-linear hover:bg-[#1976D2] hover:text-white rounded-md border border-[#A2A2A2] flex items-center">
          <p className="font-medium">Remote</p>
          <MdArrowDropDown />
        </button>
        <button className="p-2 gap-2 text-[#535353] duration-200 ease-linear hover:bg-[#1976D2] hover:text-white rounded-md border border-[#A2A2A2] flex items-center">
          <p className="font-medium">Experience</p>
          <MdArrowDropDown />
        </button>
        <button className="p-2 gap-2 text-[#535353] duration-200 ease-linear hover:bg-[#1976D2] hover:text-white rounded-md border border-[#A2A2A2] flex items-center">
          <p className="font-medium">Location</p>
          <MdArrowDropDown />
        </button>
        <button className="p-2 gap-2 text-[#535353] duration-200 ease-linear hover:bg-[#1976D2] hover:text-white rounded-md border border-[#A2A2A2] flex items-center">
          <p className="font-medium">Job Type</p>
          <MdArrowDropDown />
        </button>
        <button className="p-2 gap-2 text-[#535353] duration-200 ease-linear hover:bg-[#1976D2] hover:text-white rounded-md border border-[#A2A2A2] flex items-center">
          <p className="font-medium">Education</p>
          <MdArrowDropDown />
        </button>
      </div>
      <div className="text-[#535353] mt-6 p-4 bg-white jobs-detail">
        <p className="mb-2 text-sm font-medium">Jobs for You</p>
        <p className="text-[#A2A2A2] text-xs">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        {/* Job post make a loop based on backend response and add only one of these div */}
        <div className="relative flex gap-3 pb-4 border-b border-[#f5f5f5] mt-4 job">
          <div className="job-logo w-14 h-14">
            <img
              className="object-cover w-full h-full rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
              alt=""
            />
          </div>
          <div className="job-info text-[#535353]">
            <h3 className="font-medium">Senior UI/UX Designer</h3>
            <p className="mt-1 text-sm">Vivasoft Limited</p>
            <p className="mt-1 job-type text-xs text-[#A2A2A2]">Remote</p>
            <p className="mt-1 time text-xs text-[#CDCDCD]">Posted 1d ago</p>
          </div>
          <button className="apply-btn py-2 self-end ml-auto px-6 rounded bg-[#1976D2] text-white justify-end">
            Apply
          </button>
          <button className="absolute right-0 close-btn">
            <IoMdClose className="text-[#535353] text-xl top-0" />
          </button>
        </div>
        <div className="relative flex gap-3 pb-4 border-b border-[#f5f5f5] mt-4 job">
          <div className="job-logo w-14 h-14">
            <img
              className="object-cover w-full h-full rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
              alt=""
            />
          </div>
          <div className="job-info text-[#535353]">
            <h3 className="font-medium">Senior UI/UX Designer</h3>
            <p className="mt-1 text-sm">Vivasoft Limited</p>
            <p className="mt-1 job-type text-xs text-[#A2A2A2]">Remote</p>
            <p className="mt-1 time text-xs text-[#CDCDCD]">Posted 1d ago</p>
          </div>
          <button className="apply-btn py-2 self-end ml-auto px-6 rounded bg-[#1976D2] text-white justify-end">
            Apply
          </button>
          <button className="absolute right-0 close-btn">
            <IoMdClose className="text-[#535353] text-xl top-0" />
          </button>
        </div>
        <div className="relative flex gap-3 pb-4 mt-4 job">
          <div className="job-logo w-14 h-14">
            <img
              className="object-cover w-full h-full rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
              alt=""
            />
          </div>
          <div className="job-info text-[#535353]">
            <h3 className="font-medium">Senior UI/UX Designer</h3>
            <p className="mt-1 text-sm">Vivasoft Limited</p>
            <p className="mt-1 job-type text-xs text-[#A2A2A2]">Remote</p>
            <p className="mt-1 time text-xs text-[#CDCDCD]">Posted 1d ago</p>
          </div>
          <button className="apply-btn py-2 self-end ml-auto px-6 rounded bg-[#1976D2] text-white justify-end">
            Apply
          </button>
          <button className="absolute right-0 close-btn">
            <IoMdClose className="text-[#535353] text-xl top-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Todos:
// make responsive for tablets and phones
// make re-useable and dynamic
// Make functional
