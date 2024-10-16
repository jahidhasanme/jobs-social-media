export const AdminStats = () => {
  return (
    <div className="flex items-center justify-center gap-6 text-white stats">
      <div className="stat w-full font-medium max-w-60 bg-[#00B2FF] p-4 rounded">
        <h3 className="mb-4 text-[10px] lg:text-xs">Total Earning</h3>
        <h4 className="text-xl lg:text-3xl">$ 150.50</h4>
      </div>
      <div className="stat w-full font-medium max-w-60 bg-[rgba(0,178,255,0.5)] p-4 rounded">
        <h3 className="mb-4 text-[10px] lg:text-xs">Total Users</h3>
        <h4 className="text-xl lg:text-3xl">1000</h4>
      </div>
      <div className="stat text-[#535353] w-full font-medium max-w-60 bg-[rgba(0,178,255,0.25)] p-4 rounded">
        <h3 className="mb-4 text-[10px] lg:text-xs">Total Employers</h3>
        <h4 className="text-xl lg:text-3xl">150</h4>
      </div>
      <div className="stat text-[#535353] w-full font-medium max-w-60 bg-[rgba(0,178,255,0.1)] p-4 rounded">
        <h3 className="mb-4 text-[10px] lg:text-xs">Total Posted Jobs</h3>
        <h4 className="text-xl lg:text-3xl">1500</h4>
      </div>
    </div>
  );
};
