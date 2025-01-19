import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GetStarted = ({ arrow }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 100 }}
      animate={inView ? { y: 0 } : {}}
      transition={{ duration: 0.3 }}
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
