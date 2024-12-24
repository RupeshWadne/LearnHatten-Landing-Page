"use client"
import Image from "next/image";
import CTA1 from "@/assets/CTA1.png";
import CTA2 from "@/assets/CTA2.png";
import ArrowRight from "@/assets/arrow-right.svg"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MainButton from "@/components/MainButton"

export const CallToAction = () => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div ref={sectionRef} className="bg-gradient-to-b from-white dark:from-[#0A0D14] dark:to-[#413a35] to-[#EDD5C1] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-title">Stop losing money while learning
          join us</h2>
          <p className="section-description mt-5">
           Learn new skills and earn simultaneously. Join our Discord community now for exclusive opportunities and a supportive learning environment.
          </p>
          <motion.img style={{
              translateY,
            }} src={CTA2.src} alt="3d Icon" width={360} className="absolute -left-[350px] -top-[137px] rotate-[20deg]" />
          {/* <motion.img style={{
              translateY,
            }} src={CTA1.src} alt="3d Icon" width={330} className="absolute -right-[331px] -top-[19px] -rotate-12" /> */}
        </div>
        <div className="flex mt-8 justify-center">
          <MainButton content="Join Exclusive Community" />
        </div>
      </div>
    </div>
  );
};
