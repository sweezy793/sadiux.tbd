import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-16 lg:flex-row lg:gap-0 items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
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
          <span className="underline underlin-offset-8 decoration-red-400">
            {"I'm Sarthak Sarangi"}
          </span>
        </h1>
        <p className="md:w-[50rem] text-lg text-gray-300">
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
          <div>
            <h1 className="text-3xl font-bold group-hover:text-red-400 transition-all">
              Contact Me 📫
            </h1>
            <div className="w-40 h-2 bg-red-400 rounded-full "></div>
            <div className="w-40 h-2 bg-indigo-400 rounded-full translate-x-2"></div>
          </div>
        </Link>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[20deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-36 h-36 rounded-full bg-red-400"></div>
            <div className="w-0 h-0 border-t-[65px] border-t-transparent border-l-[100px] border-l-indigo-400 border-b-[65px] border-b-transparent"></div>
          </div>
          <div className="flex gap-3 -translate-x-16">
            <div className="w-0 h-0 border-t-[65px] border-t-transparent border-r-[100px] border-r-indigo-400 border-b-[65px] border-b-transparent"></div>
            <div className="w-36 h-36 rounded-full bg-red-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
