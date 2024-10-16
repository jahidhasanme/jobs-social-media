import { AdminCategories } from "../../components/admin/AdminCategories";
import { AdminHeader } from "../../components/admin/AdminHeader";
import { AdminPackages } from "../../components/admin/AdminPackages";
import { AdminSkills } from "../../components/admin/AdminSkills";
import { AdminStats } from "../../components/admin/AdminStats";
import { EmployeeList } from "../../components/admin/EmployeeList";
import { RecentUserList } from "../../components/admin/RecentUserList";
import { useAdjustHeight } from "../../hooks/useAdjustHeight";

export const AdminHome = () => {
  const dashboardRef = useAdjustHeight(92);
  return (
    <main className="w-full h-screen overflow-hidden">
      <AdminHeader />
      <div className="bg-white wrapper">
        <div
          className="p-6 mx-auto overflow-y-scroll max-w-screen-2xl scroll-bar-none dashboard"
          ref={dashboardRef}
        >
          {/* Stats */}
          <AdminStats />
          {/* User lists */}
          <div className="flex items-center justify-center gap-3 mt-6 user-lists">
            <EmployeeList />
            <RecentUserList />
          </div>
          {/* Packages */}
          <div className="packages">
            <AdminPackages />
          </div>
          {/* Categories */}
          <div className="categories">
            <AdminCategories />
          </div>
          {/* Skills */}
          <div className="skills">
            <AdminSkills />
          </div>
        </div>
      </div>
    </main>
  );
};
