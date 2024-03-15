import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto p-5  overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default page;
