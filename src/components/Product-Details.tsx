"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import ProductImage from "@/assets/product-image.png";


export function ProductDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#FF934F] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Learn Web3, Get Rewards
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 5,000 active learners, Learn Web3 is the most trusted platform for aspiring blockchain developers.
          </p>
        </div>
        <Image
          src={ProductImage}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#6E0D25]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Learning was never so sexy!
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Code, earn, and learn at your own pace. We&apos;ll handle the complicated stuff.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#273E47] min-h-[500px] lg:min-h-[400px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Signup for blazing-fast breakthrough Web3 development today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          With over 5,000 active learners, Learn Web3 is the most trusted platform for aspiring blockchain developers, combining hands-on experience with token rewards.
          </p>
        </div>
        <Image
          src={ProductImage}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
