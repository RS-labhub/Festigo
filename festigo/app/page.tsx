import Image from "next/image";
import { HeroSection } from "@/components/home-page/HeroSection";
import { AboutUs } from "@/components/home-page/AboutUs";
import { Services } from "@/components/home-page/Services";
import { Features } from "@/components/home-page/Features";
import { Footer } from "@/components/common/Footer";
import { Team } from "@/components/home-page/Team";
import { Slogan } from "@/components/home-page/Slogan";

export default function Home() {
  
  return (


    <div className="">

      <HeroSection />
      <AboutUs />
      <Services />
      <Features />
      <Team />
      <Slogan />
      <Footer />


    </div>
  );
}



