import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GetStarted = ({ arrow }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="relative  md:hidden flex justify-center"
    >
      <div className="border-4 border-[#33bbcf] w-[200px] h-[200px] flex flex-col justify-center items-center rounded-full">
        <p className="flex items-center text-[30px] text-gradient font-semibold">
          Get{" "}
          <img
            className="object-contain w-[30px] h-[30px]"
            src={arrow}
            alt=""
          />
        </p>
        <p className="text-[30px] text-gradient font-semibold">Started</p>
      </div>
    </motion.div>
  );
};

export default GetStarted;
