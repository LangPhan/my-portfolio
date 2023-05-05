import { motion } from "framer-motion";

function ProjectCard(props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center
    space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] opacity-70 hover:opacity-100
    snap-center bg-gradient-to-l from-fGradientColor to-sGradientColor cursor-pointer"
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        src={props.img}
        alt="Image"
        className="w-[100%] h-[50%] object-fill object-center px-5 py-2"
      />
      <div className="px-0 md:px-10 text-white">
        <h4 className="uppercase text-2xl text-yellow-400">{props.name}</h4>
        <p className="">Technologies used: </p>
        <div className="flex space-x-2 my-2">
          {props.techs.map((image) => {
            return (
              <motion.img
              whileHover={{scale: 1.2}}
                src={image}
                alt="image"
                className="h-10 w-10 rounded-full"
              />
            );
          })}
        </div>
        <p className="uppercase italic text-lg ">My role:</p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          {props.roles.map((role) => {
            return <li>{role}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
