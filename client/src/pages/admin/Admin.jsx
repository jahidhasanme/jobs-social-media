import { AdminNav } from "../../components/admin/AdminNav";
import { AdminHome } from "./AdminHome";

export const Admin = () => {
  return (
    <main className="h-screen bg-[#F5F5F5]">
      <div className="flex justify-center ">
        <AdminNav />
        <AdminHome />
      </div>
    </main>
  );
};
