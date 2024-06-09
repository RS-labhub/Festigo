import React from "react";
import Image from "next/image";
import tickImage from "/public/assets/images/tick.png";
import userImg from "/public/assets/images/dummy-user.jpg";

export function PaymentRequestCard({
  setShowCard,
  name,
  date,
  amount,
  imageUrl,
  username,
}: any) {
  return (
    <div className="p-6 bg-white flex justify-center items-center pt-10 flex-col gap-1 shadow-lg relative">
      {/* cross button */}
      <button
        className="absolute right-2 top-2 p-2"
        onClick={() => setShowCard(false)}
      >
        X
      </button>

      {/* heading */}
      <div>
        <p className="text-3xl font-bold">PAYMENT REQUESTED BY</p>
      </div>
      {/* image */}
      <div className="relative mt-7 h-28 w-28 rounded-full">
        <Image
          src={userImg}
          alt="profile"
          fill
          className="object-cover rounded-full"
        />
      </div>

      {/* user-details | tick */}
      <div className="mt-2 flex relative justify-center items-end gap-2">
        {/* name | no. | username */}
        <div className="flex flex-col justify-center items-center">
          <p>{name || "Harshika"}</p>
          <p>99xxxxxxxx844</p>
          <p>{username || "meriii_harshuuu"}</p>
        </div>

        {/* tick image */}
        <div className="absolute right-[-60px] h-12 w-12 overflow-hidden">
          <Image src={tickImage} alt="tick" fill />
        </div>
      </div>

      {/* money */}
      <div className=" mt-6">
        <p className="text-4xl font-light">{amount || "$8 CRORES"}</p>
      </div>

      {/* reservation */}
      <div>
        <p className="text-[#606060] font-light">Venue Reservation</p>
      </div>

      {/* pay button */}
      <button className="w-[80%] mt-2 py-3 bg-[#FF4747] text-white">
        <span className="text-2xl font-semibold">PAY</span>
      </button>

      {/* later and decline button */}
      <div className="text-[#F94848] mt-4 font-semibold px-5 w-[80%] flex justify-between items-center text-xl">
        <button className="uppercase">later</button>
        <button className="uppercase">decline</button>
      </div>
    </div>
  );
}
