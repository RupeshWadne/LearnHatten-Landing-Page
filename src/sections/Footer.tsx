import Image from "next/image";
import X from "@/assets/social-x.svg";
import Insta from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import Youtube from "@/assets/social-youtube.svg";
import SAASlogo from "@/assets/sAI2.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center group  group-hover:duration-500 overflow-hidden relative shadow-gray-50 flex flex-col justify-start items-start">
      <div className="after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:left-16 after:w-12 after:h-12 before:absolute before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col z-10"></div>
      <div className="container flex flex-col md:flex-row items-center gap-6 md:gap-0 md:items-start justify-between">

            <Image
              alt="SaaS log"
              src={SAASlogo}
              height={60}
              className="relative"
            />
        <nav className="flex flex-col justify-center items-center md:items-start gap-6">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#community">Community</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex flex-row md:flex-col justify-center gap-6">
          <a href="#"><X className="cursor-pointer"/></a>
          <a href="#"><Insta className="cursor-pointer"/></a>
          <a href="#"><Linkedin className="cursor-pointer"/></a>
          <a href="#"><Pin className="cursor-pointer"/></a>
          <a href="#"><Youtube className="cursor-pointer"/></a>
        </div>
      </div>
      <p className="container mt-6 pt-5 border-t-2 border-white/10 text-start">&copy; 2025 sAI, Inc. All rights reserved.</p>
    </footer>
  );
};
