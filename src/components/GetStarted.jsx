import React from "react";
import { motion } from "framer-motion";

const GetStarted = ({ arrow }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="relative  md:hidden flex justify-center"
    >
      <div className="border-4 border-[#33bbcf] w-[200px] h-[200px] flex flex-col justify-center items-center rounded-full shadow-gray-600 shadow-2xl">
        <p className="flex items-center text-[30px] text-gradient font-semibold fontcus1">
          Get{" "}
          <img
            className="object-contain w-[30px] h-[30px]"
            src={arrow}
            alt=""
          />
        </p>
        <p className="text-[30px] text-gradient font-semibold fontcus1">
          Started
        </p>
      </div>
    </motion.div>
  );
};

export default GetStarted;
