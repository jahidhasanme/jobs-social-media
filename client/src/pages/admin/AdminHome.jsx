import { AdminHeader } from "../../components/admin/AdminHeader";
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
          <AdminStats />
          <div className="flex items-center justify-center gap-3 mt-6 user-lists">
            <EmployeeList />
            <RecentUserList />
          </div>
        </div>
      </div>
    </main>
  );
};
