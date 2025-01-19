import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="mb-[40px] w-full bg-black-gradient-2 mt-[100px] py-[50px] px-[25px] lg:py-[60px] lg:flex lg:items-center lg:justify-around md:rounded-[20px] md:px-[50px] lg:rounded-[20px]">
        <div>
          <h3 className="text-[35px] sm:text-[40px] font-bold">
            Let's try our service now!
          </h3>
          <p className="mt-7 sm:max-w-[600px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet
          </p>
        </div>
        <div className="mt-7">
          <button className="bg-blue-gradient text-blue-950 py-4 px-8 rounded-md font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
