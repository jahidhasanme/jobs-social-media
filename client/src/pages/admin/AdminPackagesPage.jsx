import { AdminPackage } from "../../components/admin/AdminPackage";

// Icons
import { FaPlus } from "react-icons/fa6";

export const AdminPackagesPage = () => {
  return (
    <div className="text-[#535353] w-full h-full p-4 bg-white">
      <h3 className="mb-3 font-medium">Packages</h3>
      <div className="flex justify-start gap-5 packages-details">
        <AdminPackage />
        <AdminPackage />
        <AdminPackage />
      </div>
      <div className="mt-6 add-packages">
        <button className="flex items-center gap-3 font-medium add-btn">
          <FaPlus />
          Add new package
        </button>
        <form>
          <div className="flex items-center gap-5 mt-3 radio-buttons">
            <div className="flex items-center">
              <input
                id="employer"
                type="radio"
                name="radioBtn"
                className="w-5 h-5 outline-none"
              />
              <label htmlFor="employer" className="ms-2">
                Employer
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="employee"
                type="radio"
                name="radioBtn"
                className="w-5 h-5 outline-none"
              />
              <label htmlFor="employee" className="ms-2">
                User/Employee
              </label>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5 packages-inputs">
            <div className="w-full max-w-xs package-name">
              <label
                htmlFor="package_name"
                className="block mb-2 text-sm font-medium"
              >
                Package Name
              </label>
              <input
                type="text"
                id="package_name"
                className="outline-none border border-[#A2A2A2] text-sm rounded-lg block w-full p-2.5"
                placeholder="Premium"
              />
            </div>
            <div className="w-full duration max-w-40">
              <label
                htmlFor="duration"
                className="block mb-2 text-sm font-medium"
              >
                Duration
              </label>
              <input
                type="text"
                id="duration"
                className="outline-none border border-[#A2A2A2] text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="w-full previous-rate max-w-44">
              <label
                htmlFor="previousRate"
                className="block mb-2 text-xs font-medium"
              >
                Previous Rate(per month)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl text-[#535353]">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  id="previousRate"
                  className="outline-none pl-7 border border-[#A2A2A2] text-sm rounded-lg block w-full p-2.5"
                />
              </div>
            </div>
            <div className="w-full present-rate max-w-44">
              <label
                htmlFor="presentRate"
                className="block mb-2 text-xs font-medium"
              >
                Present Rate(per month)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl text-[#535353]">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  id="presentRate"
                  className="outline-none pl-7 border border-[#A2A2A2] text-sm rounded-lg block w-full p-2.5"
                />
              </div>
            </div>
            <div className="w-full discount max-w-20">
              <label
                htmlFor="discount"
                className="block mb-2 text-xs font-medium"
              >
                Discount
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-xl text-[#535353]">
                  %
                </span>
                <input
                  type="number"
                  min="0"
                  id="discount"
                  className="outline-none pr-7 border border-[#A2A2A2] text-sm rounded-lg block w-full p-2.5"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 advantage">
            <h3 className="text-sm font-medium">Advantage</h3>
            {/* Have to complete this section */}
            <input
              type="text"
              name="advantage"
              id="advantage"
              className="w-full mt-3 border border-[#A2A2A2] text-sm rounded-lg block p-3.5 outline-none"
            />
          </div>
          <div className="flex justify-end w-full mt-8 add-btn">
            <button className="text-lg font-semibold rounded text-white bg-[#1976D2] py-3 px-10">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
