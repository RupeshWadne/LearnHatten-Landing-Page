"use client";

import money from "@/assets/sAI-3d-3.png";
import graph from "@/assets/sAI-3d-2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProductDemo } from "@/components/Product-Details";

export const Features = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#f5f7fa] dark:from-[#111] dark:to-[#434343] to-[#c3cfe2] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <p className="tag">Key Features</p>
          </div>
          <h2 className="section-title mt-4">
            Features That Simplify Finance Completly
          </h2>
          <p className="section-description mt-4">
            Our service simplify budgeting, saving and investing.
          </p>
        </div>
        <div className="relative pt-12">
          <ProductDemo />

          {/* <Image src={ProductImage} alt="Product image" className="mt-5" /> */}
          <motion.img
            src={graph.src}
            height={250}
            width={250}
            className="absolute hidden md:block -right-36 -top-32"
            alt="bulb"
            style={{
              translateY,
            }}
          />

          <motion.img
            src={money.src}
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
