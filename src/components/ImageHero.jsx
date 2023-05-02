import img from '../assets/main.png'
import { motion } from 'framer-motion';

function ImageHero() {
    return (
        <motion.div
            initial = {{x: 0, opacity: 0, scale: 0.5}}
            animate = {{opacity: 1, scale: 1}}
            transition={{duration: 1, delay: 0.8}}
        >
            <img src={img} alt="Main Image" className='w-[250px] h-[250px] rounded-full shadow-inner mb-10'/>
        </motion.div>
      );
}

export default ImageHero;