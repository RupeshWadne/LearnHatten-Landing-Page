"use client";
import CTA2 from "@/assets/sAI-3d-4.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MainButton from "@/components/MainButton";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      id="community"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#f5f7fa] dark:from-[#111] dark:to-[#434343] to-[#c3cfe2] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-title">
            Become part of our Financial Revolution
          </h2>
          {/* <p className="section-description mt-5">
            Expert help anytime you need!
          </p> */}
          <motion.img
            style={{
              translateY,
            }}
            src={CTA2.src}
            alt="3d Icon"
            width={360}
            className="absolute -left-[350px] -top-[137px] rotate-[20deg]"
          />
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
