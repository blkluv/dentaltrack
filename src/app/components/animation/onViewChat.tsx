"use client";
import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    // rotate: -10,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      // delay:5,
      type: "just",
      bounce: 0,
      duration: 0.2,
    },
  },
};

const childrenVar: Variants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    // rotate: -10,
    opacity: 1,
    transition: {
      type: "just",
      bounce: 0,
      duration: 0.2,
    },
  },
};

export default function OnViewChat({
  style,
}: {
  style: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className={`w-full ${style}`}
    >
      <motion.div
        variants={childrenVar}
        className="absolute z-10 md:-left-60 bottom-80 bg-green-400 text-base border-black border-2 rounded-lg max-w-[300px] py-2 px-4 "
      >
        HELP!!! My digital marketing sucks!!!
      </motion.div>
      <motion.div
        variants={childrenVar}
        className="absolute z-10 bg-neutral-100 border-black border-2 rounded-lg max-w-[300px] py-2 px-4 left-8 md:-left-40 bottom-52"
      >
        Let's fix that.
      </motion.div>
      <motion.div
        variants={childrenVar}
        className="absolute z-10 bg-green-400 border-black border-2 rounded-lg max-w-[300px] py-2 px-4  md:-left-60 bottom-36"
      >
        What it costs?
      </motion.div>
      <motion.div
        variants={childrenVar}
        className="absolute z-10 bg-neutral-100 border-black border-2 rounded-lg max-w-[300px] py-2 px-4 left-8 md:-left-40 bottom-2"
      >
        $0 risk with a money backed guarantee
      </motion.div>
    </motion.div>
  );
}
