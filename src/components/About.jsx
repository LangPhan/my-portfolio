import img from "../assets/about2.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="flex flex-col h-screen lg:flex-row justify-center items-center mx-0 lg:mx-24 2xl:mx-36"
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
      <h2 className="absolute top-12 w-full uppercase text-2xl text-center gradientText tracking-[12px]">
        About
      </h2>
      <motion.img
        initial={{
          opacity: 0,
          x: -50,
        }}
        transition={{
          duration: 1.2,
          delay: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        whileHover={{ scale: 1.5, transition: { duration: 0.8 } }}
        src={img}
        alt="Main Image"
        className="object-cover w-24 h-24 rounded-full mb-10 md:w-[250px] md:h-[250px]
        lg:rounded-lg lg:w-[300px] lg:h-[380px] shadow-2xl"
      />
      <motion.div
        className="space-y-10 md:px-10 text-center md:text-left"
        initial={{
          opacity: 0,
          x: 100,
        }}
        transition={{
          duration: 1.2,
          delay: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <h4 className="uppercase text-lg md:text-xl md:text-center lg:text-left text-white">
          Here is little background
        </h4>
        <p className="text-xs md:text-lg gradientText">
          Hello! I am a final year student at TDTU with a major in Computer
          Network and Communication. I possess strong skills in programming,
          good communication abilities, and a quick learning aptitude. My
          strengths lie in both Front-end and Back-end web application
          development, with proficiency in HTML, CSS, JavaScript, and Java Core.
          I have a talent for converting PSD to HTML/CSS and am comfortable
          using Tailwind CSS and Bootstrap. Additionally, I am familiar with
          RESTful APIs and have experience working with Java (Spring Boot),
          JavaScript (ReactJS), MySQL, NoSQL, JSON, and API. I can also use
          source code management tools like GIT. I am highly adaptable to new
          technology and can quickly learn and apply new skills. Currently, I am
          located in District 7, Ho Chi Minh City.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
