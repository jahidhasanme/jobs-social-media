// Icons
import { IoCheckmark } from "react-icons/io5";

export const AdminPackage = () => {
  return (
    <div className="relative p-4 border border-[#E4E4E4] text-[#535353] w-full max-w-xs rounded-md overflow-hidden">
      <h3 className="mb-3 font-semibold lg:text-lg">Premium</h3>
      <h3 className="font-medium text-lg lg:text-2xl text-[#1976D2]">
        $10.00/mo
      </h3>
      <div className="flex items-center gap-2 mt-2 price">
        <del className="lg:text-base text-sm text-[#A2A2A2]">$40.00</del>
        <p className="text-xs lg:text-sm text-[#D2192F] font-medium">10% off</p>
      </div>
      <div className="my-3 lg:my-5 details text-[#535353] font-medium">
        <div className="flex items-center gap-2">
          <IoCheckmark className="text-lg lg:text-xl" />
          <p className="text-sm lg:text-base">Unlimited Apply</p>
        </div>
        <div className="flex items-center gap-2">
          <IoCheckmark className="text-lg lg:text-xl" />
          <p className="text-sm lg:text-base">No Ads</p>
        </div>
      </div>
      <p className="absolute top-0 right-0 text-white duration text-sm font-medium py-1 px-2 lg:py-2 lg:px-3 bg-[#00B2FF]">
        6 months
      </p>
    </div>
  );
};
