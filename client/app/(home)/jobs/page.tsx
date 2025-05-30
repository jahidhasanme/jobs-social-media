import { RecentJobPosts } from "@/app/ui/home/RecentJobPosts";
import { JobManagement } from "@/app/ui/jobs/JobManagement";
import { JobsForYou } from "@/app/ui/jobs/JobsForYou";

const Jobs = () => {
  return (
    <main className="min-h-screen px-4 xsm:px-10 py-7 bg-[#F5F5F5]">
      <div className="flex justify-center gap-5 mx-auto job-page-contents max-w-screen-2xl">
        <JobManagement />
        <JobsForYou />
        <RecentJobPosts />
      </div>
    </main>
  );
};

export default Jobs;
