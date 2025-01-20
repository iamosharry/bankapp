import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
const Business = ({ star, shield, send }) => {
  return (
    <div className="mt-[100px] py-6 sm:px-7 bg-transparent lg:flex lg:justify-between">
      <div>
        <h2 className="text-[30px] sm:text-[40px] font-bold text-center sm:text-start">
          You do the business, <br /> we'll handle the money.
        </h2>
        <p className="text-center sm:text-start mt-8 font-medium text-gray-200 px-5 sm:px-0 text-[15px] sm:max-w-[400px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards in the market
        </p>
        <Button title="Get Started" />
      </div>

      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            y: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
          }}
          className="mt-[100px] lg:mt-0 relative py-[30px] lg:pt-0"
        >
          <img
            className="object-contain w-[60px] h-[60px] block bg-gray-700 absolute left-[50%] lg:left-[-15%] lg:top-[50%] lg:translate-y-[-50%] sm:left-[60px] transform translate-x-[-50%] top-[-30px]  p-3 rounded-full"
            src={star}
            alt="star"
          />
          <div>
            <h3 className="text-center text-[30px] lg:text-[25px] font-semibold mb-4 lg:mb-0 sm:text-start">
              Rewards
            </h3>
            <p className="max-w-[400px] text-center px-5 sm:px-0 sm:text-start">
              The best credit cards offer some tantalizing combination of
              promotion and prizes
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            y: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
          }}
          className="mt-[70px] lg:mt-1 relative py-[30px]"
        >
          <div className="absolute w-[140%] h-full ttp top-0 left-[-35%] rounded-[30px] "></div>
          <img
            className="object-contain w-[60px] h-[60px] block bg-gray-700 absolute left-[50%] sm:left-[60px] lg:left-[-15%] lg:top-[50%] lg:translate-y-[-50%] transform translate-x-[-50%] top-[-40px]  p-3 rounded-full"
            src={shield}
            alt="star"
          />
          <div>
            <h3 className="text-center sm:text-start text-[30px] lg:text-[20px] font-semibold mb-4 lg:mb-0 ">
              100% Secured
            </h3>
            <p className="max-w-[400px] text-center sm:text-start px-5 sm:px-0">
              We take proactive steps to make sure your information and
              transaction are secured{" "}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            y: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
          }}
          className="mt-[70px] lg:mt-1 relative py-[30px]"
        >
          <img
            className="object-contain w-[60px] h-[60px] block bg-gray-700 absolute left-[50%] sm:left-[60px] lg:left-[-15%] lg:top-[50%] lg:translate-y-[-50%] transform translate-x-[-50%]  top-[-40px]  p-3 rounded-full"
            src={send}
            alt="star"
          />
          <div>
            <h3 className="text-center sm:text-start text-[30px] lg:text-[20px] font-semibold mb-4 lg:mb-0">
              Balance Transfer
            </h3>
            <p className="max-w-[400px] text-center sm:text-start px-5 sm:px-0">
              A balance transfer credit card can save you alot of money in
              interest charges.{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Business;
