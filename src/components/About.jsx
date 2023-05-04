import img from "../assets/main.png";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-center mx-0 md:mx-10"
      initial={{
        opacity: 0,
        y: -100,
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
      <h2 className="absolute top-12 uppercase text-2xl text-center gradientText tracking-[12px]">
        About
      </h2>
      <img
        src={img}
        alt="Main Image"
        className="object-cover w-24 h-24 rounded-full mt-28 mb-10 md:mb-0 md:w-[200px] md:h-[280px] md:rounded-lg"
      />
      <motion.div className="space-y-10 md:px-10 text-center md:text-left">
        <h4 className="uppercase text-lg text-white">
          Here is little background
        </h4>
        <p className="text-xs textGradient">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          necessitatibus enim tenetur excepturi quasi delectus vero
          exercitationem dolore doloribus! Aspernatur quos vero libero expedita
          maxime quis ducimus, odit nihil deleniti.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
