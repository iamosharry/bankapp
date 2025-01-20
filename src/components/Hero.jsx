import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

const Hero = ({ discount, arrow, robot }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [titles, setTitles] = useState([
    "Generation",
    "Elevation",
    "Innovation",
    "Migration",
  ]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lg:h-[88vh] lg:flex">
      <div className="lg:w-[50%] lg:h-full bg-transperant lg:pt-[60px] relative w-full h-[50%] flex flex-col  mt-[15%] lg:block lg:mt-0">
        <motion.div
          drag
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute lg:right-[10%] lg:top-[25%] z-[1000]  border-2 border-[#33bbcf] hover:border-white w-[100px] h-[100px] hidden sm:flex flex-col justify-center items-center rounded-full  hover:cursor-pointer"
        >
          <p className="flex items-center text-[18xp] text-gradient font-semibold">
            Get <img src={arrow} alt="" />
          </p>
          <p className="text-[18xp] text-gradient font-semibold">Started</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-start"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="items-center  inline-flex py-1 px-2 bg-discount-gradient rounded-[15px] text-[14px] mb-5 lg:mb-0 fontcus1 shadow-lg"
          >
            <img className="object-contain" src={discount} alt="" />
            20% DISCOUNT FOR ONE MONTH ACCOUNT
          </motion.p>
        </motion.div>
        <motion.div className="lg:text-[65px] leading-[1.2em]  text-[60px] font-semibold text-center lg:text-start flex flex-col space-y-0">
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
            }}
            className="fontcus2 text-6xl"
          >
            The Next
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.8 },
            }}
            className="text-gradient fontcus1 text-7xl py-2"
          >
            {titles[count]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="fontcus2 text-6xl"
          >
            Payment Method.
          </motion.p>
        </motion.div>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          className="text-[15px] leading-7 mt-7 fontcus2 text-gray-300 text-center lg:text-start max-w-[500px] px-5 lg:px-0 mb-9 lg:mb-0"
        >
          Our team of experts uses a methodology to identify the credit card
          most likely to fit your needs. We examine annual percentage rate,
          annual fees
        </motion.p>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 1.5 }}
        className="lg:w-[50%] lg:h-full relative  w-[100vw] h-[500px] "
      >
        <div className="absolute w-full h-full blue__gradient top-[-100px]"></div>
        <img
          className="w-full h-full object-contain object-top block"
          src={robot}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
