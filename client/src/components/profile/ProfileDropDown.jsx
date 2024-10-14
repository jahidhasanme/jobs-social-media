// Icons
import { BsJournalBookmark } from "react-icons/bs";

export const ProfileDropDown = ({ isProfileOpen }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${
        isProfileOpen
          ? "top-[86px] visible opacity-100"
          : "top-20 invisible opacity-0"
      } ease-linear duration-200 fixed z-50 w-full max-w-sm rounded-md profile-drop p-4 bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]`}
    >
      <div className="flex items-center gap-3 pb-3 profile-info">
        <div className="flex-shrink-0 w-12 h-12 profile-img">
          <img
            className="object-cover w-full h-full rounded-full"
            src="https://mrwallpaper.com/images/hd/anime-naruto-holding-ninja-knife-dv3cqw2dgcbwupwx.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start texts">
          <h3 className="name font-semibold text-sm text-[#535353]">
            Uzumaki Naruto
          </h3>
          <p className="text-[#A2A2A2] text-xs">
            Graphics Designer and Marketing Specialist
          </p>
          <button className="py-1 px-4 text-[#1976D2] hover:text-white hover:bg-[#1976D2] ease-linear duration-200 font-medium my-3 border-[#1976D2] border rounded">
            See Profile
          </button>
        </div>
      </div>
      <div className="py-3 border-[#D9D9D9] border-t border-b package-billing">
        <button className="px-4 flex items-center gap-4 font-medium text-[#535353]">
          <BsJournalBookmark className="text-xl" />
          <h3>Package & Billing</h3>
        </button>
      </div>
      <div className="pt-4 text-center">
        <button className="bg-[#1976D2] rounded py-3 px-6 text-white mx-auto font-semibold switch-btn">
          Switch to Employer
        </button>
      </div>
    </div>
  );
};
