import { HomeHeader } from "../components/home/HomeHeader";
import { UsersPostContainer } from "../components/home/UsersPostContainer";
import { UserProfile } from "../components/home/UserProfile";
import { RecentJobPosts } from "../components/home/RecentJobPosts";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <main className="min-h-screen px-4 xsm:px-10 py-7 bg-[#F5F5F5]">
        <div className="flex justify-center gap-5 mx-auto home-page-contents max-w-screen-2xl">
          <UserProfile />
          <UsersPostContainer />
          <RecentJobPosts />
        </div>
      </main>
    </>
  );
};

export default Home;

// Todos:
// make responsive
// make dynamic
