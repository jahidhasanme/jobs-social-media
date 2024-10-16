import { AdminPackage } from "./AdminPackage";

export const AdminPackages = () => {
  return (
    <div className="max-w-screen-lg mx-auto w-full mt-6 text-[#535353]">
      <div className="flex justify-between header">
        <h3 className="text-sm font-medium lg:text-base">Packages</h3>
        <a href="" className="text-[#00B2FF]">
          View all packages
        </a>
      </div>
      <div className="mb-4 employer-packages">
        <h4 className="text-[#A2A2A2] text-xs lg:text-sm my-2">Employer</h4>
        <div className="flex justify-between gap-2 packages">
          <AdminPackage />
          <AdminPackage />
          <AdminPackage />
        </div>
      </div>
      <div className="mb-4 employee-packages">
        <h4 className="text-[#A2A2A2] text-xs lg:text-sm my-2">
          Employee/User
        </h4>
        <div className="flex justify-between gap-2 packages">
          <AdminPackage />
          <AdminPackage />
          <AdminPackage />
        </div>
      </div>
    </div>
  );
};
