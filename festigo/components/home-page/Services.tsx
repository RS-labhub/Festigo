import React from "react";
import wedding from "/public/assets/gifs/home-wedding.gif";
import outdoor from "/public/assets/gifs/outdoor-planner.gif";
import planner from "/public/assets/gifs/wedding-planner.gif";
import serviceBg from "/public/assets/images/service-bg.png";
import Image, { StaticImageData } from "next/image";
import rightArrow from "/public/assets/images/right-arrow.png";

type cardDataProps = {
  image: StaticImageData;
  label: string;
  labelCss: string;
  buttonCss: string;
  css: string;
};

const cardsData: cardDataProps[] = [
  {
    image: wedding,
    label: "Organizer",
    labelCss: "bg-[#E64CFF]",
    buttonCss: "text-[#FA00FF]",
    css: "hover:border-[#DB00FF]",
  },
  {
    image: planner,
    label: "Vendors",
    labelCss: "bg-[#F2FF62] ",
    buttonCss: "text-[#FAFF00]",
    css: "hover:border-[#FAFF00]",
  },
  {
    image: outdoor,
    label: "Guests",
    labelCss: "bg-[#62D9FF]",
    buttonCss: " text-[#000AFF]",
    css: "hover:border-[#001AFF]",
  },
];

function Card({ image, labelCss, buttonCss, label, css }: cardDataProps) {
  return (
    <div
      className={`relative group hover:scale-110 h-96 w-80 transition-all shadow-[black]/[20%] shadow-none hover:shadow-md duration-300 ease-in-out hover:border-[3px] ${css}`}
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <Image src={image} alt={label} fill />
      </div>

      {/* Label | Read More Button */}
      <div className="justify-center hidden group-hover:flex top-[50%] left-[50%] translate-x-[-50%] absolute items-center flex-col">
        <div className={`${labelCss} px-2 py-1`}>
          <p className="text-5xl font-medium text-white">{label}</p>
        </div>
        {/* Read More button */}
        <div className="flex justify-start gap-2 cursor-pointer items-center">
          <span className={`text-2xl ${buttonCss} shrink-0`}>Read more</span>
          <span className="relative h-16 shrink-0 w-16">
            <Image src={rightArrow} alt="arrow" fill />
          </span>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <div className="flex flex-col relative w-full pt-20 pb-80 bg-white justify-center gap-1 items-center">
      {/* bg-image */}
      <div className="absolute w-full top-10 h-[110vh]">
        <Image src={serviceBg} alt="image" fill />
      </div>

      {/* Our services heading */}
      <div className="z-20">
        <p className="text-[#FF0000] text-2xl">Our Services</p>
      </div>

      {/* Subtitle text */}
      <div className="z-20">
        <p className="text-black text-5xl">Who can avail FESTIGO???</p>
      </div>

      {/* Services card */}
      <div className="w-full mt-24 px-20">
        <div className="flex w-full justify-between items-center">
          {cardsData.map((cardData: cardDataProps, index: number) => {
            return (
              <Card
                key={index}
                image={cardData.image}
                label={cardData.label}
                labelCss={cardData.labelCss}
                buttonCss={cardData.buttonCss}
                css={cardData.css}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
