import React from "react";
import Title from "./Title";

const Projects = () => {
  const projects = [];
  return (
    <div className="py-10 p-5 sm:p-0 mt-4">
      <Title
        text="Projects 💡"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="font-bold text-4xl lg:text-6xl text-center mt-20">
        Adding Soon...🚧
      </div>
    </div>
  );
};

export default Projects;
