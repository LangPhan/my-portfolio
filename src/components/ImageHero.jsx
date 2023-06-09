import img from "../assets/about.jpg";
import { motion } from "framer-motion";

function ImageHero() {
  return (
    <motion.div
      initial={{ y: -250, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      whileInView={{ rotate: 360 }}
    >
      <img
        src={img}
        alt="Main Image"
        className="w-[250px] h-[250px] rounded-full shadow-inner mb-10 select-none"
      />
    </motion.div>
  );
}

export default ImageHero;
