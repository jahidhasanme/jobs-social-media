export const PackagesDuration = () => {
  return (
    // Package duration (top sec)
    <div className="space-y-4 text-center ">
      <h3 className="text-[#535353] text-2xl font-semibold">Packages</h3>
      {/* Packages */}
      <div className="packages-durations font-semibold text-[#868686] flex items-center border-[#868686] border rounded-full overflow-hidden">
        <button className="1month border-r px-4 py-2 hover:bg-[#1976D2] hover:text-white ease-linear duration-200 border-[#868686]">
          1 month
        </button>
        <button className="bg-[#1976D2] px-4 py-2 text-white ease-linear duration-200 border-r border-[#868686] 6month">
          6 months
        </button>
        <button className="px-4 py-2 hover:bg-[#1976D2] hover:text-white ease-linear duration-200 12month">
          12 months
        </button>
      </div>
    </div>
  );
};

// Todos:
// Make responsive
// Make dynamic & re-useable
// Make functional
