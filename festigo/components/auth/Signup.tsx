"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import InputField from "../common/InputField";
import { MdEmail } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assests/logo.png";

import bgImage from "../../public/assests/signupBgImage.jpg";

import homeIcon from "../../public/assests/icons/home.gif";

import { LuUserSquare2 } from "react-icons/lu";

import { RiFolderUserFill } from "react-icons/ri";

import { CountryCode } from "@/constants/CountryCode";

import { FaPhoneSquareAlt } from "react-icons/fa";

import axios from "axios";

import { Role } from "@/Utils/Enums";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";


interface User {

    username: string;
    email: string;
    phonenumber: string;
    password: string;
    role: string;
}


export default function Signup() {

    const router = useRouter();


    const [userData, setUserData] = useState({ firstName: "", lastName: "", email: "", password: "", countryCode: "+91", phonenumber: "", termsAndConditions: false, role: Role.ADMIN });

    const [isHover, setIsHover] = useState(false);

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {

        setUserData({ ...userData, [event.target.name]: event.target.value });

    }

    function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
        
        setUserData({ ...userData, termsAndConditions: event.target.checked });

    }

    async function submitHandler(event: FormEvent) {

        event.preventDefault();

        console.log(userData);

        try {

            const response = await axios.post("/api/auth/register", {

                username: userData.firstName + " " + userData.lastName,
                email: userData.email,
                phonenumber: userData.countryCode + userData.phonenumber,
                password: userData.password,
                role: userData.role,
                termsAndConditions: userData.termsAndConditions

            })

            console.log("user data is ", response.data);

            toast.success(response?.data?.message)

            router.push("/auth/login");


        } catch (error: any) {

            console.log(error.message);
            toast.error(error.message);

        }

    }


    return (

        <div className="relative flex flex-col gap-12 justify-center items-center w-screen min-h-screen mx-auto overflow-x-hidden">

            <div
                className={`absolute inset-0 transition-opacity duration-200 ${isHover ? "opacity-100" : "opacity-40"}`}
                style={{
                    backgroundImage: `url(${bgImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            <Image src={logo} alt="logo" className="w-20 h-20 absolute top-2 left-2" />

            {

                !isHover &&

                <div className="flex flex-col gap-1 absolute w-fit  top-2 right-2 invisible md:visible">

                    <Image src={homeIcon} alt="" className="w-14 h-14 " />

                    <p className="text-[#FF0000] uppercase font-bold">Home</p>

                </div>

            }

            <div className="relative z-10 flex flex-col gap-12 justify-center items-center w-full h-full ">


                <div className="flex flex-col gap-2">

                    <h1 className="font-bold text-red-600 uppercase text-center text-4xl">Festigo</h1>

                    {/* <p className="text-neutral-600 text-3xl">" Simplyfying Your Event Planning Journey "</p> */}

                </div>

                <div className="w-full max-w-md border rounded-lg p-8 shadow-lg bg-white">

                    <form onSubmit={submitHandler} className="flex flex-col space-y-6">


                        <h1 className="text-[#FF0000] text-3xl font-bold text-center">Create an account</h1>

                        {/* first and last name  */}

                        <div className="flex gap-3">

                            <InputField

                                type="text"
                                name="firstName"
                                value={userData.firstName}
                                onChange={changeHandler}
                                required={true}
                                icon={<LuUserSquare2 />}
                                placeholder="Enter Your name"
                            />

                            <InputField
                                type="lastName"
                                name="lastName"
                                value={userData.lastName}
                                onChange={changeHandler}
                                required={true}
                                icon={<RiFolderUserFill />}
                                placeholder="Enter Your lastName:"
                            />


                        </div>



                        <div className="flex gap-3">

                            <select
                                name="countryCode"
                                value={userData.countryCode}
                                onChange={changeHandler}
                                className="w-[15%] shadow border border-red-500 rounded-xl text-[#6A5F5F] focus:outline-none focus:shadow-outline"
                            >
                                {CountryCode.map((data) => (

                                    <option key={data.code} value={data.code} className="text-black">

                                        {data.code} {/* Display country name here */}

                                    </option>
                                ))}

                            </select>

                            <InputField

                                type="text"
                                name="phonenumber"
                                required={true}
                                value={userData.phonenumber}
                                onChange={changeHandler}
                                icon={<FaPhoneSquareAlt />}
                                placeholder="mobile no:"

                            />


                        </div>

                        <InputField

                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={changeHandler}
                            required={true}
                            icon={<MdEmail />}
                            placeholder="Enter Your Email:"
                        />

                        <InputField

                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={changeHandler}
                            required={true}
                            icon={<HiOutlineLockClosed />}
                            placeholder="Enter Your Password"

                        />

                        <div className="flex items-center">

                            <div className="flex justify-center items-baseline">

                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    name="rememberme"
                                    checked={userData.termsAndConditions}
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-4 w-4 text-[#2E21C8]"
                                />

                                <label htmlFor="rememberMe" className="ml-2 text-[#000000]">

                                    I agree all the

                                </label>

                            </div>

                            <p className="text-sm text-[#2E21C8] pl-2">

                                terms and conditions

                            </p>

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="mt-6 text-center">

                        <p className="text-gray-700">

                            Already have an account? <Link href={"/auth/login"} className="text-[#FC0202] hover:underline"> Login Here </Link>

                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}






