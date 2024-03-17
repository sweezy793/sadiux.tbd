import { MovingBorderButton } from "@/components/ui/moving-border";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-16 lg:flex-row lg:gap-0 items-center justify-between">
      <div className="space-y-10 text-center lg:text-left z-10">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hello there{" "}
          <Image
            className="inline"
            src="https://cdn3.emoji.gg/emojis/8794-hellotherekenobi.png"
            width={50}
            height={50}
            alt="HelloThereKenobi"
          />
          <br />
          <span className="underline underline-offset-8 decoration-red-500">
            {"I'm Sarthak Sarangi"}
          </span>
        </h1>
        <p className="text-lg text-gray-300">
          {`Your friendly neighborhood software developer working at Freshworks with a passion for all things tech.`}
          <br />
          {`By day, I'm crafting elegant solutions, but by night, I'm Batman(smh).`}
          <br />
          {`So, if you're up for a chat about coding, new tech, 
        debating about video games, or simply swapping recommendations, I'm all ears! Let's connect and explore the wonders of tech. 🚀`}
        </p>
        <Link
          href={"mailto:sarthaks793@gmail.com"}
          className="inline-block group"
        >
          <Title text="Contact Me 📫" />
        </Link>
      </div>
      <div className="z-10 relative">
        <div className="w-72 h-72 space-y-3 -rotate-[0deg] relative flex flex-col items-center">
          <div className="flex gap-3 translate-x-6">
            <div className="w-32 h-32 rounded-full bg-red-500"></div>
            <div className="w-0 h-0 border-t-[65px] border-t-transparent border-l-[100px] border-l-violet-500 border-b-[65px] border-b-transparent"></div>
          </div>
          <div className="flex gap-3 -translate-x-6">
            <div className="w-0 h-0 border-t-[65px] border-t-transparent border-r-[100px] border-r-violet-500 border-b-[65px] border-b-transparent"></div>
            <div className="w-32 h-32 rounded-full bg-red-500"></div>
          </div>
          <div className="glow absolute top-[50%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-28  left-5 ">
          <MovingBorderButton
            borderRadius="1.5rem"
            className="p-3 font-semibold"
          >
            <p>Hire me 💼</p>
          </MovingBorderButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
