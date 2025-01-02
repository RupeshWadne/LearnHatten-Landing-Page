"use client"

import Logo1 from "@/assets/logo1.png";
import Logo2 from "@/assets/logo2.png";
import Logo3 from "@/assets/logo3.png";
import Logo4 from "@/assets/logo4.png";
import Logo5 from "@/assets/logo5.png";
import Logo6 from "@/assets/logo6.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="md:py-4 bg-[#f5f7fa] dark:bg-[#111]">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_50%,transparent)]">
          <motion.div 
            className="flex flex-none"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            <Image src={Logo1} alt="Logo1" className="logo-tecker-image" />
            <Image src={Logo2} alt="Logo2" className="logo-tecker-image" />
            <Image src={Logo3} alt="Logo3" className="logo-tecker-image" />
            <Image src={Logo4} alt="Logo4" className="logo-tecker-image" />
            <Image src={Logo5} alt="Logo5" className="logo-tecker-image" />
            <Image src={Logo6} alt="Logo6" className="logo-tecker-image" />

            {/* second logos row */}
            <Image src={Logo1} alt="Logo1" className="logo-tecker-image" />
            <Image src={Logo2} alt="Logo2" className="logo-tecker-image" />
            <Image src={Logo3} alt="Logo3" className="logo-tecker-image" />
            <Image src={Logo4} alt="Logo4" className="logo-tecker-image" />
            <Image src={Logo5} alt="Logo5" className="logo-tecker-image" />
            <Image src={Logo6} alt="Logo6" className="logo-tecker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
