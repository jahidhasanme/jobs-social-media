export const AdminEmployers = () => {
  return (
    <div className="employers-list w-full h-full text-[#535353] bg-[#fff] p-4">
      <div className="flex justify-between top-sec">
        <h3 className="font-medium">Employers List</h3>
        <form className="w-full max-w-52">
          <select
            id="countries"
            className="border border-[#E4E4E4] outline-none text-sm rounded-lg w-full block p-1"
            defaultValue="Country"
          >
            <option value="Country" disabled>
              Country
            </option>
            <option value="BD">Bangladesh</option>
            <option value="IN">India</option>
            <option value="PK">Pakistan</option>
            <option value="CA">Canada</option>
          </select>
        </form>
      </div>
      <div className="employers mt-3">
        <div className="relative rounded-md overflow-x-auto">
          <table className="w-full text-sm text-center text-[#535353] border border-[#E4E4E4]">
            <thead className="text-xs bg-[#E4E4E4]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Package
                </th>
                <th scope="col" className="px-6 py-3">
                  Buying Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Expiry Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Jobs Posted
                </th>
                <th scope="col" className="px-6 py-3">
                  Followers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 flex font-normal items-center gap-3 py-3 whitespace-nowrap"
                >
                  <div className="country-img w-8 h-8 rounded-full overflow-hidden">
                    <img
                      className="object-cover object-center h-full w-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"
                      alt=""
                    />
                  </div>
                  Md. Abdul Hakim
                </th>
                <td className="px-6 py-3">$10.00/mo - 6mo</td>
                <td className="px-6 py-3">18/08/16</td>
                <td className="px-6 py-3">18/14/16</td>
                <td className="px-6 py-3">15</td>
                <td className="px-6 py-3">152</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 flex font-normal items-center gap-3 py-3 whitespace-nowrap"
                >
                  <div className="country-img w-8 h-8 rounded-full overflow-hidden">
                    <img
                      className="object-cover object-center h-full w-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
                      alt=""
                    />
                  </div>
                  Md. Abdul Hakim
                </th>
                <td className="px-6 py-3">$10.00/mo - 6mo</td>
                <td className="px-6 py-3">18/08/16</td>
                <td className="px-6 py-3">18/14/16</td>
                <td className="px-6 py-3">15</td>
                <td className="px-6 py-3">152</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
