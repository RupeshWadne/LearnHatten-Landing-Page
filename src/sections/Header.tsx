"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import LHlogo from "@/assets/learnhatten.png"
import Image from "next/image";
import ThemeToggle from "@/components/Toggle";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(isOpen);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex items-center justify-center py-3 bg-black dark:bg-white/80 dark:text-black text-white text-sm gap-3">
        <p className="text-white/60 dark:text-black hidden md:block">
          Work smarter, not harder. Start your free trial today!
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>See how it works</p>
          <ArrowRight className="h-4 w-4 inline-flex items-center justify-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
          <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
            <Image className="invert dark:invert-0" src={LHlogo} alt="Saas Logo" height={45} width={45} />
            </div>
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
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Community</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center">
                Get for free
              </button>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-black w-screen h-screen max-w-screen-sm text-white duration-500 absolute flex p-6 md:hidden">
          <nav className="items-start underline flex flex-col gap-6 font-semibold text-2xl">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center">
                Get for free
              </button>
            </nav>
        </div>
      )}
    </header>
  );
};
