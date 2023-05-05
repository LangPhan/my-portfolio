import SkillDetail from "./SkillDetail";
import { motion } from "framer-motion";
import Java from "../assets/icons/Java-Light.svg"
import Bootstrap from "../assets/icons/Bootstrap.svg"
import C from "../assets/icons/C.svg"
import CSS from "../assets/icons/CSS.svg"
import Figma from "../assets/icons/Figma-Light.svg"
import Github from "../assets/icons/Github-Light.svg"
import HTML from "../assets/icons/HTML.svg"
import JavaScript from "../assets/icons/JavaScript.svg"
import Maven from "../assets/icons/Maven-Light.svg"
import MongoDB from "../assets/icons/MongoDB.svg"
import MySQL from "../assets/icons/MySQL-Light.svg"
import NodeJS from "../assets/icons/NodeJS-Light.svg"
import PHP from "../assets/icons/PHP-Light.svg"
import Postman from "../assets/icons/Postman.svg"
import Powershell from "../assets/icons/Powershell-Light.svg"
import Python from "../assets/icons/Python-Light.svg"
import React from "../assets/icons/React-Light.svg"
import Spring from "../assets/icons/Spring-Light.svg"
import TailwindCSS from "../assets/icons/TailwindCSS-Light.svg"
import VSCode from "../assets/icons/VSCode-Light.svg"


function Skill() {
  return (
    <motion.div
      className="flex min-h-screen relative flex-col text-center xl:flex-row justify-center items-center
    xl:space-y-0 mb-5"
      initial={{
        opacity: 0,
        y: -50,
      }}
      transition={{
        ease: "linear",
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
    >
      <h2 className="absolute top-[6%] w-full uppercase text-2xl text-center gradientText tracking-[12px]">
        Skill
      </h2>
      <h2 className="absolute top-[12%] uppercase text-md text-center gradientText tracking-[4px]">Hover to see my proficiency</h2>
      <motion.div className="absolute top-[25%]  grid grid-cols-4 gap-5 justify-items-center w-full">
        <SkillDetail isLeft={true} img = {Java} pro ={"60%"} />
        <SkillDetail isLeft={true} img = {Python} pro = {"50%"} />
        <SkillDetail isLeft={false} img = {HTML} pro = {"70%"} />
        <SkillDetail isLeft={false} img = {CSS} pro = {"60%"} />
        <SkillDetail isLeft={true} img = {Spring} pro = {"40%"}/>
        <SkillDetail isLeft={true} img = {Maven} pro = {"40%"}/>
        <SkillDetail isLeft={false} img = {JavaScript} pro = {"50%"} />
        <SkillDetail isLeft={false} img = {React} pro = {"50%"}/>
        <SkillDetail isLeft={true} img = {Powershell} pro = {"30%"} />
        <SkillDetail isLeft={true} img = {Github} pro = {"50%"}/>
        <SkillDetail isLeft={false} img = {Figma} pro = {"50%"} />
        <SkillDetail isLeft={false} img = {TailwindCSS} pro = {"60%"}/>
        <SkillDetail isLeft={true} img = {C} pro = {"30%"} />
        <SkillDetail isLeft={true} img = {PHP} pro = {"30%"}/>
        <SkillDetail isLeft={false} img = {MySQL} pro = {"60%"} />
        <SkillDetail isLeft={false} img = {MongoDB} pro = {"50%"}/>
        <SkillDetail isLeft={true} img = {VSCode} pro = {"80%"} />
        <SkillDetail isLeft={true} img = {Postman} pro = {"60%"}/>
        <SkillDetail isLeft={false} img = {Bootstrap} pro = {"40%"} />
        <SkillDetail isLeft={false} img = {NodeJS} pro = {"40%"}/>
      </motion.div>
    </motion.div>
  );
}

export default Skill;
