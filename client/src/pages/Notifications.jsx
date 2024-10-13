import { RecentJobPosts } from "../components/home/RecentJobPosts";
import { Notification } from "../components/notifications/Notification";

export const Notifications = () => {
  return (
    <main className="min-h-screen px-4 xsm:px-10 py-7 bg-[#F5F5F5]">
      <div className="flex justify-center gap-5 mx-auto notifications-content max-w-screen-2xl">
        <div className="w-full max-w-4xl notifications-container">
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </div>
        <RecentJobPosts />
      </div>
    </main>
  );
};

// Todos:
// Make it re-useable
// Make responsive
// Make functional
