"use client";

import { UsersPostContainer } from "@/app/ui/home/UsersPostContainer";
import { UserProfile } from "@/app/ui/home/UserProfile";
import { RecentJobPosts } from "@/app/ui/home/RecentJobPosts";
import { FloatingMessage } from "@/app/ui/home/FloatingMessage";
import { useAdjustHeight } from "@/app/hooks/useAdjustHeight";

const Home = () => {
  // Adjust container based on screen view-height
  const homeRef = useAdjustHeight(92);

  return (
    <>
      <main
        className="overflow-hidden h-screen px-4 xsm:px-10 py-7 bg-[#F5F5F5]"
        ref={homeRef}
      >
        <div className="relative flex justify-center h-full gap-5 mx-auto overflow-hidden home-page-contents max-w-screen-2xl">
          <UserProfile />
          <UsersPostContainer />
          <RecentJobPosts />
          <FloatingMessage />
        </div>
      </main>
    </>
  );
};

export default Home;

// Todos:
// make responsive
// make dynamic
