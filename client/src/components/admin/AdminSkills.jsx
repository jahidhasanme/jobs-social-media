// Icons
import { FaPlus } from "react-icons/fa6";

export const AdminSkills = () => {
  return (
    <div className="max-w-screen-lg mx-auto text-[#535353]">
      <h3 className="text-sm font-medium lg:text-base">Skills</h3>
      <ul className="categories mt-5 text-sm lg:text-base flex gap-3 items-center flex-wrap text-[#535353] font-medium">
        <li className="py-1 lg:py-2 px-3 lg:px-5 rounded-md bg-[#E4E4E4] ">
          Sales
        </li>
        <li className="py-1 lg:py-2 px-3 lg:px-5 rounded-md bg-[#E4E4E4] ">
          Marketing
        </li>
        <li className="py-1 lg:py-2 px-3 lg:px-5 rounded-md bg-[#E4E4E4] ">
          Finance
        </li>
        <li className="py-1 lg:py-2 px-3 lg:px-5 rounded-md bg-[#E4E4E4] ">
          Engineering
        </li>
        <li className="py-1 lg:py-2 px-3 lg:px-5 rounded-md bg-[#E4E4E4] ">
          Sales
        </li>
        <li className="py-1 lg:py-2 px-3 lg:px-5 rounded-md bg-[#E4E4E4] ">
          Marketing
        </li>
        <li className="py-1 lg:py-2 px-3 lg:px-5 rounded-md bg-[#E4E4E4] ">
          Finance
        </li>
        <li className="py-1 lg:py-2 px-3 lg:px-5 rounded-md bg-[#E4E4E4] ">
          Retail Assistance
        </li>
        <li className="py-1 lg:py-2 px-3 lg:px-5 rounded-md bg-[#E4E4E4] ">
          Finance
        </li>
        <li className="py-1 lg:py-2 px-3 lg:px-5 rounded-md bg-[#E4E4E4] ">
          Engineering
        </li>

        <button className="flex items-center gap-2 ease-linear duration-200 hover:bg-[#1976D2] hover:text-white text-[#1976D2] border border-[#1976D2] py-1 px-3 lg:py-2 lg:px-4 rounded-md add-new">
          <FaPlus className="lg:text-lg" />
          Add new
        </button>
      </ul>
    </div>
  );
};
