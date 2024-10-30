import Image from "next/image";

// Icons
import { MdDelete } from "react-icons/md";

export const Notification = () => {
  return (
    <div className="text-[#535353] mb-2 justify-between flex items-center gap-3 p-4 bg-white rounded notification">
      <div className="flex items-center gap-3 user-and-notification">
        <div className="w-12 h-12 user-img">
          <Image
            src="/assets/images/naruto-profile.jpg"
            alt="naruto-profile"
            width={438}
            height={780}
          />
        </div>
        <p className="font-medium">
          <span className="font-bold">Username</span> liked your post.
        </p>
      </div>
      <div className="date-button text-[#CDCDCD]">
        <p className="text-sm">26 Jul</p>
        <button className="block mt-1 ml-auto delete-btn">
          <MdDelete className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

// Todos:
// Make it re-useable
// Make responsive
// Make functional
