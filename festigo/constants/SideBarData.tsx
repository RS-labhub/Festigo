import { IoIosPerson } from "react-icons/io"; // vendor
import { IoLogoWechat } from "react-icons/io5"; // chat
import { IoSettingsOutline } from "react-icons/io5"; // setting
import { BiLogOut } from "react-icons/bi"; // logout
import { MdOutlineDashboard } from "react-icons/md"; // dashboard


import Booking from "@/public/assests/icons/booking.png";

import Channels from "@/public/assests/icons/Channels.png";

import Payouts from "@/public/assests/icons/Payouts.png";

import Guest from "@/public/assests/icons/guest.png";

import Image from "next/image";

export const SideBarData = [
    {
        title: "Dashboard",
        icon: <MdOutlineDashboard size={22}/>,
        link:"/dashboard"
    },
    {
        title: "Vendors",
        icon: <IoIosPerson size={22}/>
    },
    {
        title: "Chatroom",
        icon: <IoLogoWechat size={22}/>,
        link:"/chatroom"
      

    },
    {
        title: "Bookings",

        icon: <Image src={Booking} alt="Bookings" />
    },
    {
        title: "Schedules",
        // Add the appropriate icon if you have one
        icon: null,
        link:"/calender"
    },
    {
        title: "Guests",
        icon: <Image src={Guest} alt="Guests" />
    },
    {
        title: "Channels",
        icon: <Image src={Channels} alt="Channels" />
    },
    {
        title: "Payouts",
        icon: <Image src={Payouts} alt="Payouts" />,
        link:"/payouts"
    },
    {
        title: "Settings",
        icon: <IoSettingsOutline size={22}/>
    },
    {
        title: "Log Out",
        icon: <BiLogOut size={22}/>
    }
];




