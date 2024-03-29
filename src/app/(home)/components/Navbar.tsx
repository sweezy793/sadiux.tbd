import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = ({
  className,
  resumeFlag,
}: {
  className?: string;
  resumeFlag?: boolean;
}) => {
  const socials = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sarthaks793/",
      icon: SiLinkedin,
    },
    {
      label: "GitHub",
      url: "https://github.com/sweezy793",
      icon: SiGithub,
    },
    {
      label: "X",
      url: "https://twitter.com/AllonsyAl0nso",
      icon: FaXTwitter,
    },
    {
      label: "Mail",
      url: "mailto:sarthaks793@gmail.com",
      icon: SiGmail,
    },
  ];

  if (resumeFlag) {
    socials.push({
      label: "Resume",
      url: "/assets/SARTHAK_SARANGI_RESUME.pdf",
      icon: FaFileAlt,
    });
  }

  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-red-400 -rotate-3 z-10">
        {"<Sarthak 👽/>"}
      </h1>
      <div className="flex items-center gap-5 z-10">
        {socials.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.url}
              key={index}
              aria-label={item.label}
              target="_blank"
            >
              <Icon className="w-5 h-5 hover:scale-150 transition-all " />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
