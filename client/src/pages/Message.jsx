import { UserMessages } from "../components/message/UserMessages";
import { Conversation } from "../components/message/Conversation";
import { InviteSchedule } from "../components/message/InviteSchedule";
import { useAdjustHeight } from "../hooks/useAdjustHeight";

export const Message = () => {
  // Adjust container based on screen view-height
  const messageContainer = useAdjustHeight(92);

  return (
    <main
      className="h-screen overflow-hidden px-4 xsm:px-10 py-7 bg-[#F5F5F5]"
      ref={messageContainer}
    >
      <div className="flex justify-center h-full gap-5 mx-auto overflow-hidden message-contents max-w-screen-2xl">
        <UserMessages />
        <Conversation />
        <InviteSchedule />
      </div>
    </main>
  );
};

// Todos:
// make responsive
// make function
// make dynamic
