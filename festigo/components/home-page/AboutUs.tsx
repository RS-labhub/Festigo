import Image from "next/image";
import React from "react";
import aboutUsGif from "/public/assets/gifs/home-about-us.gif";
import rightArrow from "/public/assets/images/right-arrow.png";
import aboutUsBg from "/public/assets/images/about-us-bg.png";

export function AboutUs() {
  return (
    <div className="w-full bg-white py-48 gap-20 px-10 overflow-hidden h-full relative flex justify-between items-start">
      {/* Bg */}
      <div className=" h-[850px] z-[0] w-[750px] absolute -top-5 -right-5">
        <Image src={aboutUsBg} alt="Background" fill />
      </div>

      {/* Gif image */}
      <div className="relative w-full h-[500px]">
        <Image src={aboutUsGif} alt="gif" fill />
      </div>

      {/* About us content */}
      <div className="flex flex-col z-10 justify-normal items-start gap-5 w-full">
        {/* About us text */}
        <div>
          <p className="text-[#FF0000] font-bold text-2xl">About us</p>
        </div>

        {/* Who we are text */}
        <div>
          <p className="text-black font-bold text-5xl">Who are we???</p>
        </div>

        {/* description about us */}
        <div className="mt-5">
          <p className="text-black font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
            erat pretium, aliquam augue nec, ornare turpis. Cras quis odio
            mollis, malesuada metus nec, fermentum ligula. Maecenas interdum
            augue sit amet ligula imperdiet mollis. Nulla scelerisque id sem nec
            pharetra. Sed a sapien non eros consequat consequat. Integer aliquet
            dapibus tincidunt. Phasellus consequat quis est vel vulputate. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            potenti.
          </p>
        </div>

        {/* Read More button */}
        <div className="flex justify-start gap-2 cursor-pointer items-center">
          <span className="text-black text-2xl">Read more</span>
          <span className="relative h-16 w-16">
            <Image src={rightArrow} alt="arrow" fill />
          </span>
        </div>
      </div>
    </div>
  );
}
