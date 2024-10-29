import ActiveLink from "@/app/ui/common/ActiveLink";

export const AdminNav = () => {
  return (
    <nav className="bg-[#1976D2] text-white h-screen">
      <h2 className="px-8 py-6 text-2xl font-bold text-center lg:text-4xl lg:py-10 lg:px-14">
        JobSearch
      </h2>
      <ul className="flex flex-col items-center justify-center text-center lg:text-lg lg:pl-3">
        <ActiveLink
          href="/admin"
          className="w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer"
          activeClassName="bg-[rgba(255,255,255,0.4)]"
        >
          Dashboard
        </ActiveLink>
        <ActiveLink
          href="/admin/employers"
          className="w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer"
          activeClassName="bg-[rgba(255,255,255,0.4)]"
        >
          Employers
        </ActiveLink>
        <ActiveLink
          href="/admin/employees"
          className="w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer"
          activeClassName="bg-[rgba(255,255,255,0.4)]"
        >
          Users/Employees
        </ActiveLink>
        <ActiveLink
          href="/admin/packages"
          className="w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer"
          activeClassName="bg-[rgba(255,255,255,0.4)]"
        >
          Packages
        </ActiveLink>
        <ActiveLink
          href="/admin/email"
          className="w-full px-4 lg:px-6 py-3 lg:py-4 font-semibold lg:rounded-l hover:bg-[rgba(255,255,255,0.4)] ease-linear duration-200 cursor-pointer"
          activeClassName="bg-[rgba(255,255,255,0.4)]"
        >
          Email
        </ActiveLink>
      </ul>
    </nav>
  );
};
