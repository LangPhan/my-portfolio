import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ImageHero from "./ImageHero";
import { useRef } from "react";

function Hero() {
  const constraintsRef = useRef(null);
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      ref={constraintsRef}
    >
      <ImageHero />
      <div className="text-white text-xl sm:text-2xl drop-shadow-text min-h-[24px] z-50">
        <Typewriter
          words={[
            "Hi, The Name's Dat",
            "Welcome To My Portfolio",
            "<Web FullStack Dev💻/>",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          cursorColor="yellow"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={0}
        />
      </div>
      <motion.div
        className="absolute bg-sGradientColor rounded-full w-[150px] h-[150px] shadow-xl 
      sm:flex hidden justify-center items-center text-lg text-white top-[10%] left-[10%] cursor-move z-10"
        drag
        dragConstraints={constraintsRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        title="Hold and pull a mouse to move it"
      >
        Quick Learning
      </motion.div>
      <motion.div
        className="absolute bg-sGradientColor rounded-full w-[150px] h-[150px] shadow-xl 
      sm:flex hidden justify-center items-center text-lg text-white top-[10%] right-[10%] cursor-move z-10"
        drag
        dragConstraints={constraintsRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.3 }}
        title="Hold and pull a mouse to move it"
      >
        Creative
      </motion.div>
      <motion.div
        className="absolute bg-sGradientColor rounded-full w-[150px] h-[150px] shadow-xl 
      sm:flex hidden justify-center items-center text-lg text-white bottom-[15%] left-[10%] cursor-move z-10"
        drag
        dragConstraints={constraintsRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 3.1 }}
        title="Hold and pull a mouse to move it"
      >
        Teamwork
      </motion.div>
      <motion.div
        className="absolute bg-sGradientColor rounded-full w-[150px] h-[150px] shadow-xl 
      sm:flex hidden justify-center items-center text-lg text-white bottom-[15%] right-[10%] cursor-move z-10"
        drag
        dragConstraints={constraintsRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 3.9 }}
        title="Hold and pull a mouse to move it"
      >
        Organization
      </motion.div>
    </motion.div>
  );
}

export default Hero;
