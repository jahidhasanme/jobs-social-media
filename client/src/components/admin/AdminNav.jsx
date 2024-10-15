export const AdminNav = () => {
  return (
    <nav className="bg-[#1976D2] text-white h-screen">
      <h2 className="px-8 py-6 text-2xl font-bold text-center lg:text-4xl lg:py-10 lg:px-14">
        JobSearch
      </h2>
      <ul className="flex flex-col items-center justify-center text-center lg:text-lg lg:pl-3">
        <li className="px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l w-full  hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer">
          <a href="/">Dashboard</a>
        </li>
        <li className="w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer">
          <a href="/">Employers</a>
        </li>
        <li className="w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer">
          <a href="/">Users/Employees</a>
        </li>
        <li className="w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer">
          <a href="/">Packages</a>
        </li>
        <li className="w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer">
          <a href="/">Email</a>
        </li>
      </ul>
    </nav>
  );
};
