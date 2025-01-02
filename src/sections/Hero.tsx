"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import Asset1 from "@/assets/sAI-3d-6.png";
import Asset2 from "@/assets/sAI-3d-5.png";
import mainImg from "@/assets/sAI-3d-1.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MainButton from "@/components/MainButton"

export const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,#f5f7fa,#c3cfe2_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,#434343,#111_100%)]  overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Smart Financial Assistant</div>
            <h1 className="text-3xl md:text-5xl md:leading-tight font-bold tracking-tighter md:tracking-tight leading-tight bg-gradient-to-b from-[#362417] dark:from-[#fff6ccf6] dark:to-[#fff] to-[#555] text-transparent bg-clip-text mt-6">
            your <span className="text-6xl md:text-8xl heading-hero italic">Personal Finance</span> expert
            </h1>
            <p className="text-lg md:text-xl text-[#3e1601] dark:text-white/80 tracking-tight mt-6">
              sAI is your friendly AI chatbot, simplifying budgeting, saving, and investing with personalized support.
            </p>
            <div className="flex gap-3 items-center mt-[30px]">
              <MainButton content={"GET STARTED"} />
              {/* <button className="btn btn-primary">Get started</button> */}
              <button className="btn btn-text flex">
                  KEY FEATURES
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              alt="hero"
              src={mainImg.src}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              alt="cylinder image"
              src={Asset1.src}
              width={220}
              height={220}
              className="hidden md:block -top-8 left-0 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              alt="noodle"
              src={Asset2.src}
              width={220}
              className="hidden md:block absolute top-[524px] left-[448px]"
              style={{
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
