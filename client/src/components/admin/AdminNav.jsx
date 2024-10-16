import { NavLink } from "react-router-dom";

export const AdminNav = () => {
  return (
    <nav className="bg-[#1976D2] text-white h-screen">
      <h2 className="px-8 py-6 text-2xl font-bold text-center lg:text-4xl lg:py-10 lg:px-14">
        JobSearch
      </h2>
      <ul className="flex flex-col items-center justify-center text-center lg:text-lg lg:pl-3">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `${
              isActive ? "bg-[rgba(255,255,255,0.4)]" : ""
            } w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/employers"
          className={({ isActive }) =>
            `${
              isActive ? "bg-[rgba(255,255,255,0.4)]" : ""
            } w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer`
          }
        >
          Employers
        </NavLink>
        <NavLink
          to="/admin/employee"
          className={({ isActive }) =>
            `${
              isActive ? "bg-[rgba(255,255,255,0.4)]" : ""
            } w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer`
          }
        >
          Users/Employees
        </NavLink>
        <NavLink
          to="/admin/packages"
          className={({ isActive }) =>
            `${
              isActive ? "bg-[rgba(255,255,255,0.4)]" : ""
            } w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer`
          }
        >
          Packages
        </NavLink>
        <NavLink
          to="/admin/email"
          className={({ isActive }) =>
            `${
              isActive ? "bg-[rgba(255,255,255,0.4)]" : ""
            } w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer`
          }
        >
          Email
        </NavLink>
      </ul>
    </nav>
  );
};
