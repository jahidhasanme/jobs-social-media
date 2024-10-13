import { UserMessages } from "../components/message/UserMessages";
import { Conversation } from "../components/message/Conversation";
import { InviteSchedule } from "../components/message/InviteSchedule";

export const Message = () => {
  return (
    <main className="min-h-screen px-4 xsm:px-10 py-7 bg-[#F5F5F5]">
      <div className="flex justify-center gap-5 mx-auto job-page-contents max-w-screen-2xl">
        <UserMessages />
        <Conversation />
        <InviteSchedule />
      </div>
    </main>
  );
};
