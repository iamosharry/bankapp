import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ card }) => {
  return (
    <div className="mt-[100px] px-7 md:flex items-center md:space-x-6">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
        }}
        viewport={{ once: true }}
        className="md:w-[50%] sm:w-[50%]"
      >
        <h2 className="text-[30px] font-semibold md:max-w-[500px]">
          Find a better card deal in few easy steps.
        </h2>
        <p className="mt-7 md:max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          doloribus nesciunt autem reprehenderit culpa, repellat quaerat facilis
          reiciendis rerum.
        </p>
        <div className="mt-7">
          <button className="bg-blue-gradient text-blue-950 py-5 w-full md:max-w-[200px] rounded-lg text-[20px] font-semibold">
            Get Started
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center mt-[100px] md:mt-0 md:w-[50%] sm:w-[50%] "
      >
        <img
          className="object-contain w-[350px] sm:w-[600px]"
          src={card}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Card;
