import React from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const Navbar = () => {
  const socials = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sarthaks793/",
      icon: LinkedInLogoIcon,
    },
    {
      label: "GitHub",
      url: "https://github.com/sweezy793",
      icon: GitHubLogoIcon,
    },
    {
      label: "X",
      url: "https://twitter.com/AllonsyAl0nso",
      icon: TwitterLogoIcon,
    },
    {
      label: "Mail",
      url: "",
      icon: EnvelopeClosedIcon,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-red-400 -rotate-2">
        Sarthak 👽
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link href={item.url} key={index} aria-label={item.label}>
              <Icon className="w-5 h-5 hover:scale-150 transition-all " />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
