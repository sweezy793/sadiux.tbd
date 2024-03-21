import React from "react";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <div className="border-t mt-20 border-slate-800">
      <Navbar className="flex-col gap-5" resumeFlag={true} />
    </div>
  );
};

export default Footer;
