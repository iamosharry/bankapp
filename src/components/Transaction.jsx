import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Transaction = ({ bill, apple, google }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className="md:flex items-center md:justify-center mt-10">
      <motion.div
        ref={ref}
        initial={{ x: -300, opacity: 0 }}
        whileInView={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="flex md:w-[50%] sm:justify-start justify-center  px-3"
      >
        <img
          className="w-[350px] md:w-[450px] lg:w-[500px] object-contain "
          src={bill}
          alt="bill-icon"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
        }}
        className="px-5 mt-10 md:w-[50%]"
      >
        <h3 className="font-semibold text-[25px] md:text-[30px] lg:text-[50px] max-w-[350px] lg:max-w-[600px]">
          Easily control your billing and invoicing.
        </h3>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere
          dignissimos impedit quidem perferendis amet dolores quae quisquam,
          accusamus sint.
        </p>
        <div className="flex mt-7 items-center justify-between sm:justify-start sm:space-x-8 md:justify-start md:space-x-8">
          <img
            className="w-[150px] object-contain"
            src={apple}
            alt="apple-icon"
          />
          <img
            className="w-[150px] object-contain"
            src={google}
            alt="google-icon"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Transaction;
