import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BackgroundBeams } from "../../components/ui/background-beams";
import Skills from "./components/Skills";

const page = () => {
  return (
    <div className="min-h-[400vh] bg-black overflow-hidden w-full ">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />
        <Hero />
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
      </div>
    </div>
  );
};

export default page;
