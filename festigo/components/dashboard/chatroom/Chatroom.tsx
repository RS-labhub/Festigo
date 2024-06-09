"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { Conversation } from "./Conversation";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

const data = [
  {
    id: "567890",
    name: "Radha’s Sautan",
    lastMessage: "The weather will be perfect for the ghjk",
    lastMessageTime: "9:41 AM",
    isChannel: true,
    image: "",
  },
  {
    id: "909890483",
    name: "Radha’s Sautan",
    lastMessage: "The weather will be perfect for the ghjk",
    lastMessageTime: "9:41 AM",
    isChannel: true,
    image: "",
  },
];

export function Chatroom() {
  //   async function api() {
  //     try {
  //       const res = await axios.get(
  //         "/api/chats/chatparticipants?username=sdf&eventId=sdf"
  //       );
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   useEffect(() => {
  //     api();
  //   }, []);

  const searchParams = useSearchParams();
  const chatId = searchParams.get("chatId");

  return (
    <div className="h-full flex justify-start  items-start gap-8 w-full">
      {/* chat-lists */}
      <div className="w-[350px] border-r-[1px] border-[#DBDDE1] shrink-0 h-full bg-white px-2 flex flex-col gap-5 py-8">
        {/* Search bar */}
        <div className="w-full rounded-full flex justify-center items-center gap-1 text-[#747881] border-[#DBDDE1] bg-white border-[1px] p-2">
          {/* search icon */}
          <span className="cursor-pointer pl-2">
            <IoMdSearch fontSize={24} />
          </span>
          {/* input */}
          <input
            type="text"
            className="w-full h-full outline-none "
            placeholder="Search"
          />
          {/* cross icon */}
          <span className="cursor-pointer">
            <RxCross2 fontSize={24} />
          </span>
        </div>

        {/* chat-lists */}
        <div className="flex flex-col overflow-y-auto p-4 w-full gap-2 justify-start items-start">
          {data.map((chat) => {
            return (
              <Link
                className="w-full"
                href={`/chatroom?chatId=${chat.id}`}
                key={chat.id}
              >
                <div
                  className={`w-full flex justify-between items-start ${
                    chatId === chat.id ? "bg-[#D9D9D9]" : "bg-white"
                  } rounded-xl text-[#080707]  hover:bg-[#D9D9D9]/[30%]  p-3`}
                >
                  {/* profile | name | chat  */}
                  <div className="flex justify-center items-center gap-2">
                    {/* profile image */}
                    <div>
                      <div className="bg-black relative h-11 w-11 rounded-full">
                        {chat.image && (
                          <Image src={chat.image} alt="profile" fill />
                        )}
                      </div>
                    </div>

                    {/* user | chat */}
                    <div>
                      {/* name */}
                      <div>
                        <p className="text-xs font-medium ">{chat.name}</p>
                      </div>
                      {/* last message */}
                      <div>
                        <p className="text-[8px]">
                          {chat.lastMessage.slice(0, 20)}...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* last message time | more options */}
                  <div className="flex flex-col justify-end gap-2 items-end">
                    {/* more options */}
                    <div className="text-[#747881] rounded-full cursor-pointer">
                      <BiDotsVerticalRounded fontSize={16} />
                    </div>

                    {/* last message time */}
                    <div>
                      <p className="text-[10px]">{chat.lastMessageTime}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* chats */}
      <Conversation />
    </div>
  );
}
