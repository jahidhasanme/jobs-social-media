"use client";

import { AdminCategories } from "@/app/ui/admin/AdminCategories";
import { AdminPackages } from "@/app/ui/admin/AdminPackages";
import { AdminSkills } from "@/app/ui/admin/AdminSkills";
import { AdminStats } from "@/app/ui/admin/AdminStats";
import { EmployeeList } from "@/app/ui/admin/EmployeeList";
import { RecentUserList } from "@/app/ui/admin/RecentUserList";
import { useAdjustHeight } from "@/app/hooks/useAdjustHeight";

export const AdminHome = () => {
  // Adjust container based on screen view-height
  const dashboardRef = useAdjustHeight(92);

  return (
    <main className="w-full h-screen overflow-hidden">
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
