"use client";
import dynamic from "next/dynamic";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });


import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";

import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Linux","Power BI","PyTorch"];
  const rightLists = ["Pandas", "SQL", "Excel"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "mehdioukid001@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);

    // Reset copied state after 3 seconds
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgba(4, 6, 35, 1)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4, 6, 35, 1) 0%, rgba(4, 6, 35, 1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && id !== 2 &&(
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          
  

{spareImg && id === 2 && (
  <div className="absolute right-0 top-1/4">
    <img
      src={spareImg}
      alt={spareImg}
      className="object-cover object-center w-full h-full"
    />
  </div>
)}




          {id === 3 && (
           <div className="flex lg:gap-4 mr-5 w-fit absolute top-1 bottom-2 right-1">
           <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
             {leftLists.map((item, i) => (
               <span
                 key={i}
                 className="py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
               >
                 {item}
               </span>
             ))}
           </div>
           <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
             {rightLists.map((item, i) => (
               <span
                 key={i}
                 className="py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
               >
                 {item}
               </span>
             ))}
           </div>
         </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  loop={copied}
                  play={copied}
                  animationData={animationData}
                  style={{ width: 200, height: 200 }}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
