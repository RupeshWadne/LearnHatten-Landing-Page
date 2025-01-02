"use client";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Basic",
    monthlyPrice: "0.0",
    buttonText: "Get Started",
    popular: false,
    inverse: false,
    features: [
      "24/7 Basic Financial Guidance",
      "Personal Budget Analysis",
      "Expense Tracking & Insights",
      "Simple Savings Recommendations",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: "19.9",
    buttonText: "Get Started",
    popular: true,
    inverse: true,
    features: [
      "All Basic Features",
      "Investment Portfolio Analysis",
      "Custom Financial Goal Setting",
      "Real-time Market Alerts",
      "Tax Planning Assistance",
      "Multi-Account Management",
    ],
  },
  {
    title: "Advanced",
    monthlyPrice: "29.9",
    buttonText: "Get Started",
    popular: false,
    inverse: false,
    features: [
      "All Pro Features",
      "Wealth Management",
      "Advanced Portfolio Optimization",
      "Risk Assessment & Mitigation",
      "Estate Planning Guidance",
      "AI-Powered Market Predictions",
      "Priority Customer Support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#f5f7fa] dark:bg-[#111]">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title">Simple and Affordable Plans</h2>
          <p className="section-description mt-4">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              buttonText,
              features,
              inverse,
              monthlyPrice,
              popular,
            }) => (
              <div
                key={title}
                className={twMerge(
                  "card group relative group z-0 overflow-hidden border-black dark:bg-white/50",
                  inverse === true && "bg-black dark:bg-black text-white/60"
                )}
              >
                <div
                  className={twMerge(
                    "circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#6E0D25] group-hover:scale-[2000%] duration-500 z-[-1]",
                    inverse === true && "bg-white"
                  )}
                ></div>
                <div
                  className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
                  style={{
                    backgroundImage: "url(/noise.webp)",
                    backgroundSize: "30%",
                  }}
                ></div>
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50 group-hover:text-white duration-100",
                      inverse === true && "text-white/60 group-hover:text-black"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-xs px-4 py-1.5 rounded-xl border border-white/20 group-hover:border-black duration-100">
                      <motion.span
                        animate={{ backgroundPositionX: "100%" }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className={twMerge(
                      "text-4xl font-bold tracking-tighter leading-none group-hover:text-white duration-100",
                      inverse === true && "group-hover:text-black"
                    )}>
                    ${monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50 group-hover:text-white duration-100",
                      inverse === true && "text-white/50 group-hover:text-black"
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "text-black bg-white group-hover:invert"
                  )}
                >
                  {buttonText}
                </button>
                <ul
                  className={twMerge(
                    "flex flex-col gap-5 mt-8 group-hover:text-white duration-100",
                    inverse === true && "group-hover:text-black"
                  )}
                >
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm gap-4">
                      <CheckIcon className="h-6 w-6" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
