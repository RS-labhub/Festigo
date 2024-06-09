"use client";

import { useState } from "react";
import Sidebar from "../../components/common/Sidebar";
import { CiSearch } from "react-icons/ci";
import { PiUserCircleDuotone, PiUsersDuotone } from "react-icons/pi";
import PlusIcon from "@/public/assests/icons/PulsIcon.png";
import { FaArrowRightLong } from "react-icons/fa6";
import UserImage from "@/public/assests/icons/userImage.png";
import { CiLocationOn } from "react-icons/ci";

import MessageIcon from "@/public/assests/icons/messageIcon.png";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid grid-cols-12 ">
        <div className="bg-[#white]  fixed bottom-0">
          <Sidebar />
        </div>
        <div className="col-span-12 pl-[300px]">{children}</div>
      </div>

      {/* <div className="w-screen min-h-screen bg-[#FEF4F4] overflow-hidden">
            <div className="relative flex flex-col md:flex-row gap-4 w-full p-4">
                <div className="bg-white">
                    <Sidebar />
                </div>
              <div> {children}</div>
             
            </div>
        </div> */}
    </>
  );
}
