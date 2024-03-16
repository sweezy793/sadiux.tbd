import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BackgroundBeams } from "../../components/ui/background-beams";

const page = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden w-full ">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />
        <Hero />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
