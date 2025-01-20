import React from "react";
import { motion } from "framer-motion";
const Comments = ({ quotes, people01, people02, people03 }) => {
  return (
    <div className="mt-[100px] px-7">
      <div className="w-full md:flex md:justify-between">
        <h2 className="text-[40px] lg:max-w-[40%] sm:max-w-[50%] lg:font-bold font-semibold ">
          What are people saying about us
        </h2>
        <p className="mt-7 text-gray-300 font-semibold md:max-w-[40%]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet
        </p>
      </div>

      <div className="lg:flex md:flex justify-between w-full md:fle-wrap flex-wrap sm:block mt-[50px]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="lg:max-w-[30%] hover:cursor-pointer mt-9 rounded-[20px] py-[50px] px-[50px] lg:px-[30px] flex flex-col space-y-[40px] bg-black-gradient"
        >
          <div>
            <img src={quotes} alt="" />
          </div>
          <div>
            <p>
              Money is only a tool. it will take you whereever you wish, but it
              will not replace you as the driver.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-6">
              <img
                src={people01}
                className="w-[70px] h-[70px] object-contain"
                alt=""
              />
              <p>
                Herman Jensen <br />
                Founder & Leader
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="lg:max-w-[30%] mt-9 cursor-pointer rounded-[20px] py-[50px] px-[50px] lg:px-[30px] flex flex-col space-y-[40px] bg-black-gradient"
        >
          <div>
            <img src={quotes} alt="" />
          </div>
          <div>
            <p>
              Money makes your life easier. if your'e lucky to have it, your'e
              lucky.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-6">
              <img
                src={people02}
                className="w-[70px] h-[70px] object-contain"
                alt=""
              />
              <p>
                Stevie Mark <br />
                Founder & Leader
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="lg:max-w-[30%] hover:cursor-pointer  mt-9 rounded-[20px] py-[50px] px-[50px] lg:px-[30px] flex flex-col space-y-[40px] bg-black-gradient"
        >
          <div>
            <img src={quotes} alt="" />
          </div>
          <div>
            <p>
              Its is usually people in the money business, finance, and
              international trade that are rich.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-6">
              <img
                src={people03}
                className="w-[70px] h-[70px] object-contain"
                alt=""
              />
              <p>
                Ken Gallagher <br />
                Founder & Leader
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Comments;
