import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="h-12 z-[100] flex justify-between items-center md:mx-20 mx-2 z-100 sticky top-0 overflow-hidden">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="logo gradientText lg:text-xl text-lg"
      >
        Lang
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="social gradientText text-xl
           flex justify-around items-center h-full"
      >
        <SocialIcon
          network="facebook"
          url="https://www.facebook.com/langphanhack"
          target="_blank"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 36, width: 36 }}
        />
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/lang-phan-72a484234/"
          target="_blank"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 36, width: 36 }}
        />
        <SocialIcon
          network="github"
          url="https://github.com/LangPhan/"
          target="_blank"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 36, width: 36 }}
        />
        <SocialIcon
          network="email"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 36, width: 36 }}
        />
      </motion.div>
    </header>
  );
}

export default Header;