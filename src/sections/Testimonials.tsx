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
    text: `"The automation has saved us countless hours, allowing our team to focus on strategic initiatives rather than repetitive tasks. I can't imagine managing our finances without it! sAI has become an indispensable part of our workflow and enhancing our overall productivity."`,
    name: "Emma Chen",
    username: "Chief Financial Officer",
    imageSrc: avatar1.src,
  },
  {
    text: `"Implementing sAI was one of the best decisions we've made. The real-time insights have been invaluable for our strategic planning, and the ease of use has made onboarding our team a breeze!"`,
    name: "Alex Rodriguez",
    username: "VP of Finance",
    imageSrc: avatar2.src,
  },
  {
    text: `"We were able to tailor it specifically to fit our unique business needs, ensuring that every aspect aligned with our financial processes. This level of personalization has not only streamlined our operations but also resulted in extraordinary time savings, allowing our team to allocate more resources toward strategic initiatives and growth."`,
    name: "Marcus Johnson",
    username: "Budget Manager",
    imageSrc: avatar3.src,
  },
  {
    text: `"Our team has seen a 50% reduction in the time spent on financial reporting since we started using sAI. Its intuitive, efficient, and has made our workflow so much smoother!"`,
    name: "Ryan Thompson",
    username: "Operations Manager",
    imageSrc: avatar4.src,
  },
  {
    text: `“sAI has been a game-changer for us. The real-time reporting feature allows us to make informed decisions quickly, and the accuracy has significantly reduced our financial discrepancies! We can confidently navigate complex financial landscapes and respond to challenges as they arise.”`,
    name: "Sophia Patel",
    username: "Finance Director",
    imageSrc: avatar5.src,
  },
  {
    text: `"Since implementing sAI, our cash flow management has become so much more efficient. The insights are actionable and have greatly improved our financial goals."`,
    name: "Jessica Liu",
    username: "Finance Lead",
    imageSrc: avatar6.src,
  },
  {
    text: `“With sAI, we have reduced our operational costs by 30%. The integration with our existing systems was seamless, and the support team has been fantastic! sAI has truly transformed our financial operations!”`,
    name: "David Martinez",
    username: "Chief Operating Officer",
    imageSrc: avatar7.src,
  },
  {
    text: `"sAI has not only improved our reporting speed but also the quality of our financial insights. We can now make data-driven decisions confidently! The enhanced clarity of information has empowered our team to identify new growth opportunities."`,
    name: "Olivia Nakamura",
    username: "Financial Controller",
    imageSrc: avatar8.src,
  },
  {
    text: `“Our financial team can now focus on higher-level strategic planning rather than getting bogged down by routine tasks and manual processes, leading to more impactful decision-making and improved business outcomes."`,
    name: "Carlos Gomez",
    username: "Vice President of Finance",
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
                <div className="flex flex-col uppercase text-xs">
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
    <section className="bg-[#f5f7fa] dark:bg-[#111]">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title mt-5">Why customers love sAI</h2>
          <p className="section-description mt-5">
            Hear from our top customers, what they feel about sAI?
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
