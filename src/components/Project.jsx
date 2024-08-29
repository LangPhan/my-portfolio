import { motion } from "framer-motion";
import ProjectCard from "./ProjectCart";

import AppStore from "../assets/app-store.png";
import BugTrackerImg from "../assets/Bug-tracker.png";
import DrinkShop from "../assets/drink-store.png";
import Phone from "../assets/electric-store.png";
import TDTUFIND from "../assets/tdtufind.png";
import Band from "../assets/w3-school-band.png";

import Bootstrap from "../assets/icons/Bootstrap.svg";
import CSS from "../assets/icons/CSS.svg";
import Figma from "../assets/icons/Figma-Light.svg";
import HTML from "../assets/icons/HTML.svg";
import Java from "../assets/icons/Java-Light.svg";
import JavaScript from "../assets/icons/JavaScript.svg";
import Maven from "../assets/icons/Maven-Light.svg";
import MongoDB from "../assets/icons/MongoDB.svg";
import MySQL from "../assets/icons/MySQL-Light.svg";
import NodeJS from "../assets/icons/NodeJS-Light.svg";
import PHP from "../assets/icons/PHP-Light.svg";
import React from "../assets/icons/React-Light.svg";
import Spring from "../assets/icons/Spring-Light.svg";
import TailwindCSS from "../assets/icons/TailwindCSS-Light.svg";

function Project() {
  const projects = [
    {
      title: "tdt find",
      image: TDTUFIND,
      roles: ["FullStack Dev"],
      technologies: [
        React,
        TailwindCSS,
        MongoDB,
        NodeJS,
      ],
    },
    {
      title: "drink shop web",
      image: DrinkShop,
      roles: ["FullStack Dev"],
      technologies: [
        Java,
        Spring,
        MySQL,
        Maven,
        Bootstrap,
      ],
    },
    {
      title: "bug tracker",
      image: BugTrackerImg,
      roles: ["Front-end Dev"],
      technologies: [
        React,
        NodeJS,
        TailwindCSS,
        MongoDB,
      ],
    },
    {
      title: "app and game marketplace",
      image: AppStore,
      roles: ["Front-end Dev"],
      technologies: [
        PHP,
        HTML,
        CSS,
        Bootstrap,
        MySQL,
      ],
    },
    {
      title:
        "band music full responsive",
      image: Band,
      roles: ["Personal Project"],
      technologies: [
        HTML,
        CSS,
        JavaScript,
      ],
    },
    {
      title: "phone store design",
      image: Phone,
      roles: [
        "Wire Frame",
        "Mock-up",
        "Prototype",
      ],
      technologies: [Figma],
    },
  ];

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
        Use arrow keys to move between
        projects
      </h2>
      <div
        className="mt-[30%] sm:mt-[14%] w-full flex space-x-5
      overflow-x-scroll p-10 snap-x snap-mandatory scroll"
      >
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              name={project.title}
              img={project.image}
              roles={project.roles}
              techs={
                project.technologies
              }
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Project;
