"use client";

import { UserMessages } from "@/app/ui/message/UserMessages";
import { Conversation } from "@/app/ui/message/Conversation";
import { InviteSchedule } from "@/app/ui/message/InviteSchedule";
import { useAdjustHeight } from "../hooks/useAdjustHeight";

const Message = () => {
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

export default Message;

// Todos:
// make responsive
// make function
// make dynamic
