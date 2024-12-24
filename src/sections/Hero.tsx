"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder2.png";
import noodleImage from "@/assets/noodle2.png";
import bulbImage from "@/assets/bulb.png";
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
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,#FE938C,#EAEEFE_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,#2E454D,#0A0D14_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">What&apos;s new in V2.0</div>
            <h1 className="text-5xl md:text-7xl md:leading-tight font-bold tracking-tighter md:tracking-tight leading-tight bg-gradient-to-b from-[#362417] dark:from-[#f3a699] dark:to-[#fff]/50 to-[#FE938C] text-transparent bg-clip-text mt-6">
            Skills Sharp, Wallet Empty?
            </h1>
            <p className="text-xl text-[#3e1601] dark:text-white/80 tracking-tight mt-6">
              Every achievement grows your stake. This isn&apos;t just education. This is your future, incentivized.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <MainButton content={"Get Started"} />
              {/* <button className="btn btn-primary">Get started</button> */}
              <button className="btn btn-text flex gap-1 group">
                <span>
                  Learn more
                </span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 duration-100" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              alt="hero"
              src={bulbImage.src}
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
              src={cylinderImage.src}
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              alt="noodle"
              src={noodleImage.src}
              width={220}
              className="hidden md:block absolute top-[524px] left-[448px]"
              style={{
                rotate: 45,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
