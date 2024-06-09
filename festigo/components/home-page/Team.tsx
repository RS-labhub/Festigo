"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import NiharikaImg from "/public/assets/images/niharika.jpg";
import rohan from "/public/assets/images/rohan.jpg";
import rohan_logo from "/public/assets/images/rohan-logo.png";
import himanshu from "/public/assets/images/himanshu.jpg";
import adarsh from "/public/assets/images/adarsh.jpg";
import shape1 from "/public/assets/images/team-purple-shape.png";
import shape2 from "/public/assets/images/team-polygon.png";
import leftShape from "/public/assets/images/team-left-polygon.png";
import rightShape from "/public/assets/images/team-right-polygon.png";
import { RxCross2 } from "react-icons/rx";

type CardProps = {
  name: string;
  role: string;
  description: string;
  image: StaticImageData;
  bg: StaticImageData;
  logo: StaticImageData;
};

const team: CardProps[] = [
  {
    name: "Niharika Goulikar",
    role: "Frontend & Backend Dev",
    description:
      "A full stack developer equipped in both .NET technologies and the MERN stack. I graduated in the year 2023 and I'm working in Zelis as an Associate Software Engineer with 9 months of experience. I'm currently learning about  system design and DevOps.",
    image: NiharikaImg,
    bg: NiharikaImg,
    logo: rohan_logo,
  },
  {
    name: "Himanshu Jain",
    role: "Frontend Dev",
    description:
      "I'm a 3rd year undergrad in engineering. I'm a full stack developer with a bit of DevOps knowledge, currently interning as a frontend developer and exploring open source. I'm also currently learning Web3 and always eager to grow and learn more!",
    image: himanshu,
    bg: himanshu,
    logo: rohan_logo,
  },
  {
    name: "Adarsh Jain",
    role: "Frontend Dev",
    description:
      "I am a full stack developer with 1 year of experience in designing and implementing web applications using the MERN stack (MongoDB, Express, React, Node.js). I build scalable, high-performance applications that solve real-world problems, delivering comprehensive solutions from user interfaces to server-side logic.",
    image: adarsh,
    bg: adarsh,
    logo: rohan_logo,
  },
  {
    name: "Rohan Sharma",
    role: "UI/UX Designer, Frontend Dev",
    description:
      "A 2nd year undergrad of an engineering college, armed with some long lasting visionary skills. ‘Dominated many open-source competitions, as well as, slashed a few hackathons. But, still I’m in the process of learning, as of now, I’m good at nothing.",
    image: rohan,
    bg: rohan,
    logo: rohan_logo,
  },
];

function Card({ image, name, role, description, bg, logo }: CardProps) {
  const [showCard, setShowCard] = useState(false);
  return (
    <>
      {showCard && (
        <div className="w-full h-screen z-10 fixed top-0 left-0 bg-[black]/[20%] flex justify-center items-center">
          <div className="w-[600px] gap-2 pb-20 rounded-3xl justify-center items-center flex flex-col relative p-10 text-white bg-[#3F3F3F]">
            {/* close button  */}
            <button
              className="absolute right-5 p-2 top-5"
              onClick={() => setShowCard(false)}
            >
              <span>
                <RxCross2 fontSize={30} />
              </span>
            </button>

            {/* name */}
            <div>
              <p className="text-6xl">{name}</p>
            </div>

            {/* role */}
            <div>
              <p className="text-[#DEDEDE] text-4xl">{role}</p>
            </div>

            {/* description */}
            <div className="mt-2">
              <p className="text-[#EAEAEA] text-center text-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center flex-col items-center">
        {/* Profile Image */}
        <div className="border-[12px] relative flex justify-center items-center border-[#D9D9D9] rounded-full bg-transparent h-[300px] w-[300px]">
          <div className="rounded-full overflow-hidden relative w-[250px] h-[250px] bg-[#D9D9D9]">
            <Image
              src={image}
              fill
              alt="profile"
              className="overflow-hidden rounded-full object-cover"
            />
          </div>

          {/* red-circles */}
          <button
            onClick={() => setShowCard(true)}
            className="absolute bottom-0 right-0"
          >
            <div className="bg-[#FF0000] w-[90px] h-[90px] flex justify-center items-center rounded-full">
              <div className="h-[60px] w-[60px] relative rounded-full bg-[white]">
                <Image src={logo} alt="logo" fill />
              </div>
            </div>
          </button>
        </div>

        {/* Name | role */}
        <div className="text-black flex flex-col gap-2 justify-center items-center">
          {/* name */}
          <div>
            <p className="text-4xl">{name}</p>
          </div>
          {/* role */}
          <div>
            <p className="text-3xl">{role}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Team() {
  return (
    <div className="bg-white relative flex-col w-full py-40 justify-center items-center flex">
      {/* Three polygon triangle */}
      <div className="w-[500px] top-20 h-[380px] relative">
        <Image src={shape1} alt="shape-1" fill />
      </div>

      {/* Triangle */}
      <div className="w-full absolute flex justify-center items-center">
        {/* Three polygon triangle */}
        <div className="w-[80%] h-[120vh] top-[27%] absolute">
          <Image src={shape2} alt="shape-1" fill />
        </div>

        {/* Three polygon triangle */}
        <div className="w-[80%]  relative h-[120vh] rotate-180">
          <Image src={shape2} alt="shape-1" fill />
        </div>
      </div>

      {/* left polygon shape */}
      <div className="absolute  left-20 bottom-[15%] h-[400px] w-[400px]">
        <Image src={leftShape} fill alt="left-Shape" />
      </div>

      {/* right polygon shape */}
      <div className="absolute right-20 bottom-[15%] h-[400px] w-[450px]">
        <Image src={rightShape} fill alt="left-Shape" />
      </div>

      {/* Heading */}
      <div>
        <p className="text-7xl font-bold">
          <span className="text-[#FF0000]">Greet</span> the{" "}
          <span className="text-[#FF0000]">Team</span>
        </p>
      </div>

      {/* Cards */}
      <div className="w-10/12 pt-20 flex flex-wrap justify-center items-center gap-20">
        {team.map((user, index) => {
          return (
            <Card
              key={index}
              image={user.image}
              name={user.name}
              role={user.role}
              bg={user?.bg}
              description={user.description}
              logo={user.logo}
            />
          );
        })}
      </div>
    </div>
  );
}
