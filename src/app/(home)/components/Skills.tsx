"use client";

import React from "react";
import Title from "./Title";
import {
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Skills = () => {
  const skillArr = [
    {
      title: "Next.js",
      icon: SiNextdotjs,
    },
    {
      title: "React",
      icon: SiReact,
    },
    {
      title: "Angular",
      icon: SiAngular,
    },
    {
      title: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
    },
    {
      title: "JavaScript",
      icon: SiJavascript,
    },
    {
      title: "Node.js",
      icon: SiNodedotjs,
    },
    {
      title: "Express",
      icon: SiExpress,
    },
    {
      title: "MongoDB",
      icon: SiMongodb,
    },
    {
      title: "Postgres",
      icon: SiPostgresql,
    },
    {
      title: "Prisma",
      icon: SiPrisma,
    },
    {
      title: "AWS",
      icon: SiAmazonaws,
    },
    {
      title: "Azure",
      icon: SiMicrosoftazure,
    },
    {
      title: "Git",
      icon: SiGit,
    },
    {
      title: "Docker",
      icon: SiDocker,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Title
        text="Skills 🛠️"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skillArr} />
    </div>
  );
};

export default Skills;
