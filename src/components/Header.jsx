import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="h-12 flex justify-between items-center md:mx-20 mx-2 z-100 sticky top-0 overflow-hidden">
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
          url="https://www.facebook.com"
          target="_blank"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 28, width: 28 }}
        />
        <SocialIcon
          network="linkedin"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 28, width: 28 }}
        />
        <SocialIcon
          network="github"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 28, width: 28 }}
        />
        <SocialIcon
          network="email"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 28, width: 28 }}
        />
      </motion.div>
    </header>
  );
}

export default Header;
