import React from "react";

const Clients = ({ coinbase, airbnb, dropbox, binance }) => {
  return (
    <div className="lg:flex-row md:flex-row sm:flex-row  justify-around mt-[100px] flex  flex-col items-center">
      <div className="lg:w-[250px] lg:h-[70px] md:w-[100px] md:h-[50px] w-[250px] h-[100px]   ">
        <img className="w-full h-full object-contain" src={airbnb} alt="" />
      </div>
      <div className="lg:w-[250px] md:w-[100px] md:h-[50px] w-[250px] h-[100px]  lg:h-[70px] ">
        <img
          className="w-full h-full block object-contain"
          src={coinbase}
          alt=""
        />
      </div>
      <div className="lg:w-[250px] md:w-[100px] md:h-[50px] w-[250px] h-[100px]  lg:h-[70px] ">
        <img
          className="w-full h-full block object-contain"
          src={dropbox}
          alt=""
        />
      </div>
      <div className="lg:w-[250px] md:w-[100px] md:h-[50px] w-[250px] h-[100px]  lg:h-[70px] ">
        <img
          className="w-full h-full block object-contain"
          src={binance}
          alt=""
        />
      </div>
    </div>
  );
};

export default Clients;
