import { motion } from "framer-motion";

function SkillDetail(props) {
  return (
    <motion.div className="group flex justify-center cursor-pointer mx-0 w-fit h-full"
    whileHover={{scale:1.2}}
    >
      <motion.img
        src={props.img}
        alt={"Image"}
        className="oject-cover w-24 h-24 xl:w-90 xl:h-90 
    filter group-hover:grayscale transition duration-300 rounded-3xl shadow-2xl"
        initial={{
          x: props.isLeft ? 200 : -200,
          y: -50,
          opacity: 0,
        }}
        transition={{ duration: 1, delay: 1.2 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
      />
      <div
        className="absolute w-24 h-24 xl:w-90 xl:h-90 opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out"
      >
        <motion.div
          className="flex justify-center items-center h-full"
          initial={{
            x: props.isLeft ? 200 : -200,
            y: -50,
            opacity: 0
          }}
          transition={{ duration: 1, delay: 1.2 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <p className="text-xs md:text-xl lg:text-2xl font-bold text-fGradientColor opacity-100">
            {props.pro}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SkillDetail;
