import { Package } from "@/app/ui/packages/Package";
import { PackagesDuration } from "@/app/ui/packages/PackagesDuration";

const Packages = () => {
  return (
    <main className="min-h-screen px-4 xsm:px-10 py-7 bg-[#F5F5F5]">
      <div className="flex flex-col items-center justify-center gap-5 mx-auto packages-contents max-w-screen-2xl">
        <PackagesDuration />
        <div className="flex flex-wrap justify-center gap-7 packages-container">
          <Package />
          <Package />
          <Package />
          <Package />
          <Package />
        </div>
      </div>
    </main>
  );
};

export default Packages;

// Todos:
// Make responsive
// Make dynamic & re-useable
// Make functional
