import React from "react";

const Footer = ({ logo, instagram, linkedin, twitter, facebook }) => {
  return (
    <>
      <div className="w-full bg-gray-900  text-gray-100 sm:px-[30px] px-[20px] py-[80px] flex flex-col  md:flex-row md:items-start md:space-x-10">
        <div className="md:w-[30%] ">
          <img src={logo} alt="" />
          <p className="my-7 max-w-[300px] font-semibold">
            New way to make payments easy, reliable and secure
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg::space-x-14   ">
          <div className=" lg:w-full">
            <h3 className="font-bold text-[23px] mb-2">Usefull links</h3>
            <ul className="text-gray-300 font-semibold">
              <li>Content</li>
              <li>How it works</li>
              <li>Create</li>
              <li>Explore</li>
              <li>Terms & Service</li>
            </ul>
          </div>

          <div className="lg:w-full">
            <h3 className="font-bold text-[23px] mb-2">Community</h3>
            <ul className="text-gray-300 font-semibold">
              <li>Help Center</li>
              <li>Partner</li>
              <li>Suggestions</li>
              <li>Blog</li>
              <li>Newletters</li>
            </ul>
          </div>

          <div className=" lg:w-full mt-8 sm:mt-0">
            <h3 className="font-bold text-[23px] mb-2">Partner</h3>
            <ul className="text-gray-300 font-semibold">
              <li>Our Partner</li>
              <li>Become a Partner</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-400 bg-gray-900 text-white sm:px-[30px] px-[20px] py-7 flex flex-col space-y-[20px] lg:flex lg:flex-row lg:items-center lg:justify-between">
        <h4 className="font-semibold text-[18px]">
          Copyright &copy; 2024 HooBank All Rights Reserved.{" "}
        </h4>
        <div className="flex space-x-5 lg:pb-5">
          <div className="w-[20px] h-[20px]">
            <img
              className="w-full h-full object-contain"
              src={instagram}
              alt=""
            />
          </div>
          <div className="w-[20px] h-[20px]">
            <img
              className="w-full h-full object-contain"
              src={twitter}
              alt=""
            />
          </div>
          <div className="w-[20px] h-[20px]">
            <img
              className="w-full h-full object-contain"
              src={facebook}
              alt=""
            />
          </div>
          <div className="w-[20px] h-[20px]">
            <img
              className="w-full h-full object-contain"
              src={linkedin}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
