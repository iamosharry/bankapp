import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Users = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="lg:flex md:flex mt-[100px] sm:justify-between px-[30px] sm:px-0 ">
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-5 lg:psudo mb-[20px]"
      >
        <h3 className="lg:text-[40px] text-[30px] font-semibold">3800+</h3>
        <p className="text-gradient text-[14px] sm:text-[16px] font-bold">
          USER ACTIVE
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex items-center space-x-5 lg:psudo mb-[20px] justify-center"
      >
        <h3 className="lg:text-[40px] text-[30px] font-semibold">230+</h3>
        <p className="text-gradient text-[14px] sm:text-[16px] font-bold">
          TRUSTED BY COMPANY
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex items-center space-x-5 mb-[20px]"
      >
        <h3 className="lg:text-[40px] text-[30px] font-semibold">$230M+</h3>
        <p className="text-gradient text-[14px] sm:text-[16px] font-bold">
          TRANSACTION
        </p>
      </motion.div>
    </div>
  );
};

export default Users;
