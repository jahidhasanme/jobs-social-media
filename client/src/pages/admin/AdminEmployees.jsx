export const AdminEmployees = () => {
  return (
    <div className="employers-list w-full h-full text-[#535353] bg-[#fff] p-4">
      <h3 className="font-medium">Users List</h3>
      <div className="employers mt-3">
        <div className="relative rounded-md overflow-x-auto">
          <table className="w-full text-sm text-center text-[#535353] border border-[#E4E4E4]">
            {/* Table head */}
            <thead className="text-xs bg-[#E4E4E4]">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Package
                </th>
                <th scope="col" className="px-3 py-3">
                  Buying Date
                </th>
                <th scope="col" className="px-3 py-3">
                  Expiry Date
                </th>
                <th scope="col" className="px-3 py-3">
                  Hired In
                </th>
                <th scope="col" className="px-3 py-3">
                  Posts
                </th>
                <th scope="col" className="px-3 py-3">
                  Followers
                </th>
              </tr>
            </thead>
            <tbody>
              {/* All the user information goes here */}
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 font-normal py-3 whitespace-nowrap"
                >
                  Md. Abdul Hakim
                </th>
                <td className="px-3 py-3">$10.00/mo - 6mo</td>
                <td className="px-3 py-3">18/08/16</td>
                <td className="px-3 py-3">18/14/16</td>
                <td className="px-3 py-3">15</td>
                <td className="px-3 py-3">15</td>
                <td className="px-3 py-3">152</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 font-normal gap-3 py-3 whitespace-nowrap"
                >
                  Md. Abdul Hakim
                </th>
                <td className="px-3 py-3">$10.00/mo - 6mo</td>
                <td className="px-3 py-3">18/08/16</td>
                <td className="px-3 py-3">18/14/16</td>
                <td className="px-3 py-3">15</td>
                <td className="px-3 py-3">15</td>
                <td className="px-3 py-3">152</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
