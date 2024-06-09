"use client";

import React from "react";
import logo from "/public/assets/images/main-logo.png";
import arrow from "/public/assets/gifs/topArrow.gif";
import instagram from "/public/assets/images/instagram.png";
import twitter from "/public/assets/images/twitter.png";
import linkedin from "/public/assets/images/linkedin.png";
import facebook from "/public/assets/images/facebook.png";
import Image from "next/image";
import Link from "next/link";

const socialMediaHandles = [
  {
    url: facebook,
    path: "/",
    label: "Facebook",
  },
  {
    url: instagram,
    path: "/",
    label: "Instagram",
  },
  {
    url: twitter,
    path: "/",
    label: "Twitter",
  },
  {
    url: linkedin,
    path: "/",
    label: "LinkedIn",
  },
];

// TODO: Put into constant file
const footer = [
  {
    title: "Company",
    links: [
      {
        label: "About us",
        path: "/about-us",
      },
      {
        label: "Our Services",
        path: "/our-services",
      },
      {
        label: "Features",
        path: "/features",
      },
      {
        label: "Team",
        path: "/team",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "FAQs",
        path: "/faqs",
      },
      {
        label: "Contact us",
        path: "/contact-us",
      },
    ],
  },
  {
    title: "Links",
    links: [
      {
        label: "Terms and Conditions",
        path: "/terms-and-conditions",
      },
      {
        label: "Privacy Policies",
        path: "/privacy-policies",
      },
      {
        label: "Careers",
        path: "/careers",
      },
    ],
  },
];

export function Footer() {
  function ArrowHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="w-full relative justify-center flex bg-white py-5">
      <div className="w-10/12 flex flex-col items-center">
        {/* Top Border line */}
        <div className="w-full border-t-[1px] my-20 border-black"></div>

        {/* Footer links | Stay connect */}
        <div className="w-full flex justify-between pr-20 items-start">
          {/* Stay in touch | logo */}
          <div className="flex flex-col gap-10 justify-start items-start">
            {/* Logo | tagline */}
            <div className="flex justify-center items-center flex-col">
              {/* logo */}
              <div className="h-16 w-80 relative">
                <Image src={logo} alt="logo" fill />
              </div>

              {/* tagline text*/}
              <div>
                <p className="text-[#787878] font-extralight text-xl">
                  &quot;Simplify Your Event Planning Journey&quot;
                </p>
              </div>
            </div>

            {/* Stay Connect options */}
            <div className="flex justify-center gap-6 items-start flex-col">
              {/* logos */}
              <div className="flex justify-start gap-5 items-center">
                {socialMediaHandles.map((data, index) => (
                  <Link key={index} href={data.path}>
                    <div className="relative h-14 w-14">
                      <Image src={data.url} alt={data.label} fill />
                    </div>
                  </Link>
                ))}
              </div>
              {/* text */}
              <div>
                <p className="text-lg font-extralight text-black">
                  Stay in touch
                </p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex  gap-24 mt-5 text-black">
            {footer.map((section, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 justify-start items-center"
              >
                {/* parent title  */}
                <div>
                  <p className="font-medium text-lg">{section.title}</p>
                </div>

                {/* child Links */}
                <div className="flex flex-col gap-3 justify-center items-center">
                  {section.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.path}>
                      <span className="font-extralight hover:underline">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* rights reserved text */}
        <div className="w-full flex justify-center mt-10">
          <div className="w-3/5 border-t-[1px] pt-5 border-[#AEADAD] flex justify-center">
            <p className="text-lg font-extralight text-[#3B3B3B]">
              All rights reserved © 2024- Festigo.co
            </p>
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute bottom-16 right-10">
          <button className="w-[75px] h-[70px] relative" onClick={ArrowHandler}>
            <Image src={arrow} alt="arrow" fill />
          </button>
        </div>
      </div>
    </div>
  );
}
