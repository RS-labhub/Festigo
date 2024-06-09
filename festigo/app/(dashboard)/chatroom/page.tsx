import { Chatroom } from "@/components/dashboard/chatroom/Chatroom";
import React from "react";

function Page() {
  return (
    <div className="w-full h-[calc(100vh-00px)] pr-1 overflow-hidden bg-[#FEF4F4] pl-8 py-5">
      <Chatroom />
    </div>
  );
}

export default Page;
