export const EmployeeList = () => {
  return (
    <div className="w-full max-w-lg rounded border-[#E4E4E4] border text-[#535353]">
      <div className="p-3 lg:p-4 row-name bg-[#E4E4E4] flex justify-between items-center">
        <h3 className="font-medium">Employers list</h3>
        <h3>Total job posts</h3>
      </div>
      {Array.from({ length: 10 }).map((v, i) => {
        return (
          <div
            className="user-post flex justify-between items-center py-2 px-3 lg:py-3 lg:px-4 border-b border-[#E4E4E4]"
            key={i}
          >
            <h3>Company name</h3>
            <h3>13</h3>
          </div>
        );
      })}
      <button className="bg-[#F5F5F5] lg:text-base text-sm text-[#00B2FF] w-full py-2 lg:py-3">
        View Full employers list
      </button>
    </div>
  );
};
