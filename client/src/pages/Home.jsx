import { HomeHeader } from "../components/home/HomeHeader";
import { UsersPostContainer } from "../components/home/UsersPostContainer";
import { UserProfile } from "../components/home/UserProfile";
import { RecentJobPosts } from "../components/home/RecentJobPosts";
import { Outlet, useLocation } from "react-router-dom";
import { FloatingMessage } from "../components/home/FloatingMessage";

const Home = () => {
  // Navigation
  const location = useLocation();

  return (
    <>
      <HomeHeader />
      {location.pathname === "/home" && (
        <main className="min-h-screen px-4 xsm:px-10 py-7 bg-[#F5F5F5]">
          <div className="relative flex justify-center gap-5 mx-auto home-page-contents max-w-screen-2xl">
            <UserProfile />
            <UsersPostContainer />
            <RecentJobPosts />
            <FloatingMessage />
          </div>
        </main>
      )}
      <Outlet />
    </>
  );
};

export default Home;

// Todos:
// make responsive
// make dynamic
