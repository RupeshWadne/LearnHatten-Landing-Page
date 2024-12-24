"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Started as a complete beginner, and within 3 months I launched my first DApp. The token rewards kept me going, but landing a blockchain developer role was the real win.",
    name: "Emma Chen",
    username: "Software Engineer",
    imageSrc: avatar1.src,
  },
  {
    text: "The structured approach to Web3 concepts is brilliant. Moving through the beginner track gave me rock-solid foundations, and the rewards made every lesson exciting.",
    name: "Alex Rodriguez",
    username: "Frontend Developer",
    imageSrc: avatar2.src,
  },
  {
    text: "Transitioning from Web2 felt intimidating until I found this platform. The practical projects and reward system made learning Web3 actually enjoyable.",
    name: "Marcus Johnson",
    username: "Blockchain Developer",
    imageSrc: avatar3.src,
  },
  {
    text: "The advanced track challenged me in all the right ways. Building real DeFi protocols while earning tokens was incredibly motivating. Now I'm actively contributing to major blockchain projects.",
    name: "Ryan Thompson",
    username: "Smart Contract Developer",
    imageSrc: avatar4.src,
  },
  {
    text: "Found my sweet spot between learning and earning. Each module adds both knowledge and tokens to your wallet. The project-based approach makes everything stick.",
    name: "Sophia Patel",
    username: "Game Developer",
    imageSrc: avatar5.src,
  },
  {
    text: "Skeptical at first, but this platform delivers. Solid curriculum, practical code examples, and a fair reward system. My entire dev team is now on board.",
    name: "Jessica Liu",
    username: "Technical Lead",
    imageSrc: avatar6.src,
  },
  {
    text: "Procrastinated learning Solidity for months until I found this platform. The beginner track and token incentives made it engaging. Currently building my first NFT project!",
    name: "David Martinez",
    username: "Game Developer",
    imageSrc: avatar7.src,
  },
  {
    text: "The security-focused modules in the intermediate track are outstanding. Each lesson translates directly to real-world applications. The rewards are just a bonus.",
    name: "Olivia Nakamura",
    username: "Security Engineer",
    imageSrc: avatar8.src,
  },
  {
    text: "From gas optimization to zero-knowledge proofs, every advanced concept is well-explained. The reward system pushed me through challenging topics.",
    name: "Carlos Gomez",
    username: "AI/ML Engineer",
    imageSrc: avatar9.src,
  },
];

const column1 = testimonials.slice(0, 3);
const column2 = testimonials.slice(3, 6);
const column3 = testimonials.slice(6, 9);

const TestimonialColumn = (props: {
  testimonials: typeof testimonials;
  className?: string;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }, i) => (
            <div key={i} className="card dark:text-white">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-[#0A0D14]">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title mt-5">Hear From Our Top Performers</h2>
          <p className="section-description mt-5">
            The Student Experience Straight From the Source.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialColumn testimonials={column1} duration={15} />
          <TestimonialColumn
            testimonials={column2}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialColumn
            testimonials={column3}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
