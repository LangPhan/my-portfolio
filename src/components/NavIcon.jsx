import { motion } from "framer-motion";
import { Link } from "react-dom";

function NavIcon() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <motion.div
      className="fixed bottom-8 right-4 sm:right-8 w-10 h-10 rounded-full 
    bg-white flex justify-center items-center shadow-2xl z-50"
      whileHover={{
        scale: 1.5,
      }}
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
        duration: 0.8,
      }}
    >
      <motion.svg
        className="peer w-5 h-5 text-sGradientColor cursor-pointer"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        whileHover={{ rotate: 90 }}
        whileTap={{
          rotate: -90,
        }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 4.5,
          }}
        />
      </motion.svg>
      <motion.div
        className="invisible absolute bottom-7 w-7 h-28 bg-white rounded-lg z-40 
      flex flex-col justify-center items-center gap-1 shadow-2xl
      peer-hover:visible hover:visible after:content-['.'] after:text-white after:absolute after:bottom-[-10px] after:w-7"
      >
        <a href="#hero" className="relative">
          <motion.svg
            whileHover={{ scale: 1.2 }}
            whileTap={{ rotate: 90 }}
            className="peer w-5 h-5 text-sGradientColor cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </motion.svg>
          <motion.p className="absolute right-8 top-[2px] text-xs gradientText invisible peer-hover:visible">
            Hero
          </motion.p>
        </a>
        <a href="#about" className="relative">
          <motion.svg
            whileHover={{ scale: 1.2 }}
            whileTap={{ rotate: 90 }}
            className="peer w-5 h-5 text-sGradientColor cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </motion.svg>
          <p className="absolute right-8 top-[2px] text-xs gradientText invisible peer-hover:visible">
            About
          </p>
        </a>
        <a href="#skill" className="relative">
          <motion.svg
            whileHover={{ scale: 1.2 }}
            whileTap={{ rotate: 90 }}
            className="peer w-5 h-5 text-sGradientColor cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
            />
          </motion.svg>
          <p className="absolute right-8 top-[2px] text-xs gradientText invisible peer-hover:visible">
            Skills
          </p>
        </a>
        <a href="#project" className="relative">
          <motion.svg
            whileHover={{ scale: 1.2 }}
            whileTap={{ rotate: 90 }}
            className="peer w-5 h-5 text-sGradientColor cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </motion.svg>
          <p className="absolute right-8 top-[2px] text-xs gradientText invisible peer-hover:visible">
            Projects
          </p>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default NavIcon;
