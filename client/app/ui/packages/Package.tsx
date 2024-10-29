// Icons
import { IoCheckmark } from "react-icons/io5";

export const Package = () => {
  return (
    // Single Package
    <div className="relative w-full max-w-xs px-6 py-12 bg-white package rounded shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]">
      {/* Pricing */}
      <div className="pricing">
        <p className="text text-2xl font-bold mb-4 text-[#FFC107]">Premium</p>
        <p className="mb-3 text-[#1976D2] text-4xl font-medium">$10.00/mo</p>
        <del className="text-[#A2A2A2] text-2xl">$40.00</del>
      </div>
      {/* Package details */}
      <div className="my-5 details text-[#535353] font-medium">
        <div className="flex items-center gap-3">
          <IoCheckmark className="text-xl" />
          <p>Unlimited Apply</p>
        </div>
        <div className="flex items-center gap-3">
          <IoCheckmark className="text-xl" />
          <p>No Ads</p>
        </div>
      </div>
      {/* buy button */}
      <button className="py-4 px-3 bg-[#1976D2] text-white w-full rounded-md font-semibold">
        Buy
      </button>

      {/* sales tag */}
      <div className="flex items-center top-0 right-0 absolute rounded-r text-white sale p-3 bg-[#D2192F]">
        <div className="text-3xl font-semibold">
          <p className="">10</p>
          <p className="text-xl">Off</p>
        </div>
        <span className="text-5xl font-semibold">%</span>
      </div>
    </div>
  );
};

// Todos:
// Make responsive
// Make dynamic & re-useable
// Make functional
