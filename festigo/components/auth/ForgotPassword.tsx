
"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";
import { MdEmail } from "react-icons/md";
import InputField from '../common/InputField';
import toast from "react-hot-toast";
import logo from "../../public/assests/logo.png";
import Image from "next/image";

import bgImage from "@/public/assests/forgotPasswordbg.png";

import { HiOutlineLockClosed } from "react-icons/hi";


import Link from "next/link";


export default function ResetPassword() {

    const [email, setEmail] = useState('');

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {

      setEmail( event.target.value);

    }

    function submitHandler(event: FormEvent) {

        event.preventDefault();

        console.log("user data ", email);


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


                    <h1 className="text-red-500 font-bold text-2xl text-center mt-3">Forgot Password</h1>

                    <form onSubmit={submitHandler} className="flex flex-col gap-6">

                        <InputField
                            type="email"
                            name="email"
                            value={email}
                            onChange={changeHandler}
                            label="Enter Your Email:"
                            required={true}
                            icon={<MdEmail />}
                            placeholder="example@gmail.com"

                        />


                        <button type="submit" className="text-white bg-red-500 w-full text-center py-2 px-2 rounded-lg">

                            Submit

                        </button>

                    </form>
                    
                </div>

                <div className="flex justify-center items-center bg-stone-200 p-4 gap-2">

                    <p className="text-sm text-gray-800">Remember your password</p>

                    <Link href={"/auth/signup"} className="text-red-600 hover:underline">Sign Up Here</Link>

                </div>

            </div>


        </div>
    );
}




