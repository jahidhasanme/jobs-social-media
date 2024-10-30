import { AdminHeader } from "@/app/ui/admin/AdminHeader";
import { AdminNav } from "@/app/ui/admin/AdminNav";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      <div className="flex justify-center ">
        <AdminNav />
        {children}
      </div>
    </>
  );
}
