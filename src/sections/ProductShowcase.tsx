"use client";

import Image from "next/image";
import calendarImage from "@/assets/calender-3d.png";
import cogImage from "@/assets/cog2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProductDemo } from "@/components/Product-Details";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] dark:from-[#0A0D14] dark:to-[#60564e] to-[#EDD5C1] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <p className="tag">Blockchain-Powered Learning</p>
          </div>
          <h2 className="section-title mt-4">
            Unlocking the Future of Education
          </h2>
          <p className="section-description mt-4">
            Our platform enables students to earn tokens by solving quizzes,
            joining discussions, and promoting courses.
          </p>
        </div>
        <div className="relative pt-12">
          <ProductDemo />

          {/* <Image src={ProductImage} alt="Product image" className="mt-5" /> */}
          <motion.img
            src={cogImage.src}
            height={230}
            width={230}
            className="absolute hidden md:block -right-36 -top-32"
            alt="bulb"
            style={{
              translateY,
            }}
          />

          <motion.img
            src={calendarImage.src}
            height={280}
            width={280}
            className="absolute hidden md:block -bottom-24 -left-36"
            alt="bulb"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
