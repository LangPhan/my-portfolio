import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ImageHero from "./ImageHero";
import { useRef } from "react";

function Hero() {
  const constraintsRef = useRef(null);
  return (
    <motion.div
      className="h-full flex flex-col justify-center items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      ref={constraintsRef}
    >
      <ImageHero />
      <div className="text-white drop-shadow-text min-h-[24px]">
        <Typewriter
          words={[
            "Hi, The Name's Dat",
            "Welcome To My Portfolio",
            "<Web FullStack Dev💻/>",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={10}
        />
      </div>
      <motion.div
        className="absolute bg-sGradientColor rounded-full w-[150px] h-[150px] shadow-xl 
      flex justify-center items-center text-lg text-white top-0 left-0 cursor-move"
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
      flex justify-center items-center text-lg text-white top-0 right-0 cursor-move"
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
      flex justify-center items-center text-lg text-white bottom-24 left-0 cursor-move"
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
      flex justify-center items-center text-lg text-white bottom-24 right-0 cursor-move"
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
