import React, { useState, ChangeEvent, FormEvent } from "react";
import { MdEmail } from "react-icons/md";
import InputField from '../common/InputField';
import toast from "react-hot-toast";
import logo from "../../public/assests/logo.png";
import Image from "next/image";

import bgImage from "@/public/assests/resetPasswordBg.jpg";

import { HiOutlineLockClosed } from "react-icons/hi";


export default function ResetPassword() {

    const [userData, setUserData] = useState({ newPassword: "", confirmPassword: "" });

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {

        setUserData({ ...userData, [event.target.name]: event.target.value });

    }

    function submitHandler(event: FormEvent) {

        event.preventDefault();

        console.log("user data ", userData);


        try {

            // API call

        } catch (error: any) {

            toast.error(error.message);

        }
    }

    return (

        <div

            style={{
                backgroundImage: `url(${bgImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div className="flex flex-col justify-between gap-8 bg-white rounded-sm shadow-xl md:w-1/3 lg:w-1/4">

                <Image src={logo} alt="logo" className="w-20 h-20 absolute left-2 top-2" />

                <div className="flex flex-col w-full px-7 pt-2 gap-4 ">


                    <h1 className="text-red-500 font-bold text-2xl text-center mt-3">Reset Password</h1>

                    <form onSubmit={submitHandler} className="flex flex-col gap-6">

                        <InputField
                            type="password"
                            name="newPassword"
                            value={userData.newPassword}
                            onChange={changeHandler}
                            label="Enter Your Password:"
                            required={true}
                            icon={<HiOutlineLockClosed />}
                            placeholder="password"

                        />

                        <InputField

                            type="password"
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={changeHandler}
                            label="Re-Enter Your Password:"
                            required={true}
                            icon={<HiOutlineLockClosed />}
                            placeholder="password"

                        />

                        <button type="submit" className="text-white bg-red-500 w-full text-center py-2 px-2 rounded-lg">

                            Submit

                        </button>

                    </form>
                    
                </div>

                <div className="flex justify-center items-center bg-stone-200 p-4 gap-1">

                    <p className="text-sm text-gray-800">Did not get any email?</p>
                    <p className="text-sm text-[#FC0202]">Resend Email</p>

                </div>

            </div>


        </div>
    );
}


