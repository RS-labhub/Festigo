import React from "react";
import Image from "next/image";
import slogan from "/public/assets/images/end-slogan.png";

export function Slogan() {
  return (
    <div className="w-full bg-white py-52 flex justify-center items-center">
      <div className="w-10/12 h-[300px] relative">
        <Image src={slogan} fill alt="slogan" />
      </div>
    </div>
  );
}
