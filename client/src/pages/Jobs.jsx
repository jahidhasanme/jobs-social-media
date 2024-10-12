import { JobManagement } from "../components/jobs/JobManagement";

export const Jobs = () => {
  return (
    <main className="min-h-screen px-4 xsm:px-10 py-7 bg-[#F5F5F5]">
      <div className="flex justify-center gap-5 mx-auto job-page-contents max-w-screen-2xl">
        <JobManagement />
      </div>
    </main>
  );
};
