import Image from "next/image";
import X from "@/assets/social-x.svg";
import Insta from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import Youtube from "@/assets/social-youtube.svg";
import LHlogo from "@/assets/learnhatten.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center group  group-hover:duration-500 overflow-hidden relative shadow-gray-50 flex flex-col justify-start items-start">
      <div className="after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:left-16 after:w-12 after:h-12 before:absolute before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col z-10"></div>
      <div className="container flex flex-col md:flex-row items-center gap-6 md:gap-0 md:items-start justify-between">
        <div className="flex gap-1 items-center">
          <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
            <Image
              alt="SaaS log"
              src={LHlogo}
              height={20}
              className="relative"
            />
          </div>
          <p className="lg:text-3xl text-2xl underline font-bold italic">LearnHatten</p>
        </div>
        <nav className="flex flex-col justify-center items-start gap-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Community</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex flex-row md:flex-col justify-center gap-6">
          <X />
          <Insta />
          <Linkedin />
          <Pin />
          <Youtube />
        </div>
      </div>
      <p className="container mt-6 pt-5 border-t-2 border-white/10 text-start">&copy; 2024 Learnhatten, Inc. All rights reserved.</p>
    </footer>
  );
};
