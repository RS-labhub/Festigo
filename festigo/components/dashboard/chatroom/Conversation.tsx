import Image from "next/image";
import { useSearchParams } from "next/navigation";
import bgImage from "/public/assets/images/main-page-hero.jpg";
import messageImg from "/public/assets/images/message.png";
import { BsThreeDots } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdPhotoLibrary } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { LiaCheckDoubleSolid } from "react-icons/lia";

const addOptions = [
  {
    icon: <IoDocumentTextSharp />,
    label: "Document",
  },
  {
    icon: <MdPhotoLibrary />,
    label: "Photos and Videos",
  },
  {
    icon: <FaCamera />,
    label: "Camera",
  },
  {
    icon: <FaUserAlt />,
    label: "Contacts",
  },
];

const moreOptions = [
  "Contact info",
  "Select messages",
  "Mute Notifications",
  "Clear Chat",
  "Delete Chat",
  "Close Chat",
];

const messages = [
  {
    id: 678,
    userId: 1,
    message: "Hello",
  },
  {
    id: 890,
    userId: 2,
    message: "Hello",
  },
  {
    id: 345,
    userId: 1,
    message: "What's you name",
  },
  {
    id: 67890,
    userId: 2,
    message: "Gojo",
  },
  {
    id: 1234,
    userId: 2,
    message: "What's your?",
  },
  {
    id: 3090,
    userId: 1,
    message: "Sukuna, hehehe",
  },
  {
    id: 678,
    userId: 1,
    message: "Hello",
  },
  {
    id: 890,
    userId: 2,
    message: "Hello",
  },
  {
    id: 345,
    userId: 1,
    message: "What's you name",
  },
  {
    id: 67890,
    userId: 2,
    message: "Gojo",
  },
  {
    id: 1234,
    userId: 2,
    message: "What's your?",
  },
  {
    id: 3090,
    userId: 1,
    message: "Sukuna, hehehe",
  },
  {
    id: 678,
    userId: 1,
    message: "Hello",
  },
  {
    id: 890,
    userId: 2,
    message: "Hello",
  },
  {
    id: 345,
    userId: 1,
    message: "What's you name",
  },
  {
    id: 67890,
    userId: 2,
    message: "Gojo",
  },
  {
    id: 1234,
    userId: 2,
    message: "What's your?",
  },
  {
    id: 3090,
    userId: 1,
    message: "Sukuna, hehehe",
  },
];

export function Conversation() {
  const searchParams = useSearchParams();
  const conversationId = searchParams.get("chatId");
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const userId = 1;

  useEffect(() => {
    console.log("Get chat from backend");
  }, [conversationId]);

  return (
    <div className="w-full h-full">
      <div className="w-full relative h-full">
        {/* Navbar of chat section */}
        <div className="w-full relative flex justify-between items-center bg-white">
          {/* More options */}
          {showMoreOptions && (
            <div className="flex flex-col right-2 z-20 top-[40px] absolute bg-white border-[#9C9C9C] border-[1px] shadow-md shadow-black/[25%] justify-normal items-start p-2">
              {moreOptions.map((option, index) => {
                return (
                  <div
                    key={index}
                    className="w-full p-2 items-center flex justify-center cursor-pointer hover:bg-gradient-to-b from-[white] to-[#E6E6E6]"
                  >
                    <span>{option}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* User name */}
          <div className="w-full h-[60px] py-1 px-2">
            {conversationId && (
              <div className="flex justify-start gap-2 items-center">
                {/* profile-image */}
                <div className="rounded-full bg-gray-300 overflow-hidden relative h-[50px] w-[50px]">
                  <Image src={""} alt="profile" fill className="object-cover" />
                </div>

                {/* name | online */}
                <div className="flex flex-col justify-start items-start">
                  {/* name */}
                  <span className="text-lg font-medium">Radha’s Sautan</span>
                  {/* online */}
                  <span className="text-[#747881] text-xs">
                    online {10} min ago
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* more options dots */}
          <div>
            <button
              onClick={() => setShowMoreOptions(!showMoreOptions)}
              className="p-2"
            >
              <BsThreeDots fontSize={25} />
            </button>
          </div>
        </div>

        {/* Middle part for chat */}
        <div className=" h-[85%] z-10 w-full relative">
          <>
            {conversationId ? (
              // If conversation id found
              <div className="z-[100] w-full overflow-y-auto scroll-smooth flex flex-col gap-2 h-full py-5 px-2">
                {messages?.map((message) => {
                  return (
                    <div
                      key={message.id}
                      className={`flex w-full flex-col ${
                        message.userId === userId
                          ? "justify-end items-end"
                          : "justify-start  items-start"
                      }`}
                    >
                      {/* Message */}
                      <div
                        className={`${
                          message.userId === userId
                            ? "bg-[#e47d7d]"
                            : "bg-[#E9EAED]"
                        } p-2 rounded-lg`}
                      >
                        <span>{message.message}</span>
                      </div>

                      {/* Time and tick */}
                      <div
                        className={` ${
                          message.userId === userId ? "flex" : "hidden"
                        }`}
                      >
                        <span className={` text-[#005FFF]`}>
                          <LiaCheckDoubleSolid fontSize={15} />
                        </span>
                        <span className="text-[#747881] text-[10px]">
                          2:20 PM
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // If conversation id not found
              <div className="w-full h-full flex justify-center items-center">
                <div className="bg-[#FFA1A1] z-20 gap-3 p-5 rounded-[50px] flex justify-center items-center">
                  {/* Image */}
                  <div className="w-24 h-24 relative">
                    <Image src={messageImg} alt="message" fill />
                  </div>
                  <div className="max-w-[150px] ">
                    <span className="font-medium">
                      Click on a profile to{" "}
                      <span className="text-white">
                        GETTING STARTED WITH CHATS
                      </span>{" "}
                      in our Chat Rooms
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>

          {/* Chat bg Image */}
          <div className="absolute -z-10 top-0 left-0  w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={bgImage}
                alt="Bg-image"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white/[70%] w-full h-full top-0 z-0 left-0 absolute"></div>
          </div>
        </div>

        {/* Footer of chat section */}
        <div className="flex relative shrink-0 px-2 bg-white justify-between items-center gap-3">
          {/* Add Options */}
          {showAddOptions && (
            <div className="flex flex-col z-20 bottom-[60px] absolute bg-white rounded-2xl border-[#9C9C9C] border-[1px] shadow-md shadow-black/[25%] justify-normal items-start p-1">
              {addOptions.map((option, index) => {
                return (
                  <div
                    key={index}
                    className="flex cursor-pointer justify-start gap-1 w-full p-2 rounded-full items-center hover:bg-gradient-to-r from-[white] to-[#FFD2D2]"
                  >
                    <span className="text-blue-500 text-lg">{option.icon}</span>
                    <span>{option.label}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Add button */}
          <div>
            <button
              onClick={() => setShowAddOptions(!showAddOptions)}
              className="text-[#747881]"
            >
              {showAddOptions ? (
                <IoMdCloseCircleOutline fontSize={50} />
              ) : (
                <MdAddCircleOutline fontSize={50} />
              )}
            </button>
          </div>

          {/* Input field */}
          <div className="w-full flex justify-center items-center border-[#F49595] border-[0.5px] rounded-xl">
            <input
              type="text"
              className=" w-full outline-none p-2 rounded-xl"
            />
            <div>
              <button className="text-[#747881] mt-2">
                <MdOutlineEmojiEmotions fontSize={30} />
              </button>
            </div>
          </div>

          {/* Send button */}
          <div>
            <button className="text-white rounded-full bg-[#FF0000]/[70%] p-3">
              <IoMdSend fontSize={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
