import { motion } from "framer-motion";
import ProjectCard from "./ProjectCart";
import BugTrackerImg from "../assets/Bug-tracker.png";
import DrinkStoreImg from "../assets/drink-store.png";
import AppStore from "../assets/app-store.png";
import Band from "../assets/w3-school-band.png";
import Phone from "../assets/electric-store.png";

import React from "../assets/icons/React-Light.svg";
import NodeJS from "../assets/icons/NodeJS-Light.svg";
import Spring from "../assets/icons/Spring-Light.svg";
import TailwindCSS from "../assets/icons/TailwindCSS-Light.svg";
import CSS from "../assets/icons/CSS.svg";
import HTML from "../assets/icons/HTML.svg";
import Figma from "../assets/icons/Figma-Light.svg";
import MongoDB from "../assets/icons/MongoDB.svg";
import MySQL from "../assets/icons/MySQL-Light.svg";
import PHP from "../assets/icons/PHP-Light.svg";
import Maven from "../assets/icons/Maven-Light.svg";
import Java from "../assets/icons/Java-Light.svg";
import Bootstrap from "../assets/icons/Bootstrap.svg";
import JavaScript from "../assets/icons/JavaScript.svg";

function Project() {
  const roleProject1 = ["Front-end Dev"];
  const techProject1 = [React, NodeJS, TailwindCSS, MongoDB];
  const roleProject2 = ["Full-stack Dev", "Video Editor"];
  const techProject2 = [Java, Spring, MySQL, Maven, Bootstrap];
  const roleProject3 = ["Front-end Dev"];
  const techProject3 = [HTML, CSS, JavaScript];
  const roleProject4 = ["Full-stack Dev"];
  const techProject4 = [PHP, HTML, CSS, Bootstrap, MySQL];
  const roleProject5 = ["WireFrame", "Mock-up", "Prototype"];
  const techProject5 = [Figma];
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen mt-10 2xl:mt-0 flex relative flex-col text-left md:flex-row max-w-full 
        md:px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="absolute top-[6%] w-full uppercase text-2xl text-center gradientText tracking-[12px]">
        Project
      </h2>
      <h2 className="absolute top-[12%] uppercase text-md text-center gradientText tracking-[4px]">
        Use arrow keys to move between projects
      </h2>
      <div
        className="mt-[30%] sm:mt-[14%] w-full flex space-x-5
      overflow-x-scroll p-10 snap-x snap-mandatory scroll"
      >
        <ProjectCard
          name="Drink Shop Web"
          img={DrinkStoreImg}
          roles={roleProject2}
          techs={techProject2}
        />
        <ProjectCard
          name={"Bug Tracker"}
          img={BugTrackerImg}
          roles={roleProject1}
          techs={techProject1}
        />
        <ProjectCard
          name={"Band Music Full Responsive"}
          img={Band}
          roles={roleProject3}
          techs={techProject3}
        />
        <ProjectCard
          name={"App Store Web"}
          img={AppStore}
          roles={roleProject4}
          techs={techProject4}
        />
        <ProjectCard
          name={"Phone Store Design"}
          img={Phone}
          roles={roleProject5}
          techs={techProject5}
        />
      </div>
    </motion.div>
  );
}

export default Project;
