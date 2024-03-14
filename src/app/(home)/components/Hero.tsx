import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <h1>
        Hello there{" "}
        <Image
          className="inline"
          src="https://cdn3.emoji.gg/emojis/8794-hellotherekenobi.png"
          width={32}
          height={32}
          alt="HelloThereKenobi"
        />
        <br />
        <span>{"I'm Sarthak Sarangi"}</span>
      </h1>
      <p>
        {`Your friendly neighborhood software developer working at Freshworks, entrenched in the world of JavaScript and more. 
        Beyond the code, I'm just a regular guy with a passion for all things tech.`}
        <br />
        {`By day, I'm crafting elegant solutions, but by night, I'm Batman(smh).`}
        <br />
        {`So, if you're up for a chat about coding challenges, the newest tech on the market, 
        debating the best video games, or simply swapping recommendations, I'm all ears! Let's connect and explore the wonders of tech. 🚀`}
      </p>
      <Link href={"mailto:sarthaks793@gmail.com"}>
        <div>
          <h1>Contact Me 📫</h1>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
