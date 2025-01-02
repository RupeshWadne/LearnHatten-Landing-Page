"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import SAASlogo from "@/assets/sAI2.png";
import Image from "next/image";
import ThemeToggle from "@/components/Toggle";
import { useState } from "react";
import MainButton from "@/components/MainButton";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(isOpen);

  return (
    <header className="sticky top-0 bg-transparent z-20">
      {/* <div className="flex items-center justify-center py-3 bg-black dark:bg-white/80 dark:text-black text-white text-sm gap-3">
        <p className="text-white/60 dark:text-black hidden md:block">
          Work smarter, not harder. Start your free trial today!
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>See how it works</p>
          <ArrowRight className="h-4 w-4 inline-flex items-center justify-center" />
        </div>
      </div> */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between border border-black/20 dark:border-white/20 rounded-2xl pr-3 pl-1 backdrop-blur-sm bg-opacity-25 bg-[#f1f1f1]">
            <Image
              className="z-20"
              src={SAASlogo}
              alt="Saas Logo"
              height={60}
              width={60}
            />
            <div className="block md:hidden">
              <ThemeToggle />
            </div>
            <label className="flex flex-col gap-2 w-8 md:hidden">
              <input
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
                className="peer hidden"
                type="checkbox"
              />
              <div className="rounded-2xl h-[3px] w-1/2 bg-black dark:bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
              <div className="rounded-2xl h-[3px] w-full bg-black dark:bg-white duration-500 peer-checked:-rotate-45"></div>
              <div className="rounded-2xl h-[3px] w-1/2 bg-black dark:bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
            </label>
            <nav className="hidden md:flex items-center text-black/60 dark:text-white/60 gap-6 font-semibold">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#community">Community</a>
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <MainButton content={"GET STARTED"} />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-black w-screen h-screen max-w-screen-sm text-white duration-500 absolute flex p-6 md:hidden">
          <nav className="items-start underline flex flex-col gap-6 font-semibold text-2xl">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#community">Community</a>
            <MainButton content={"GET STARTED"} />
          </nav>
        </div>
      )}
    </header>
  );
};
