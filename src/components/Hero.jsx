import React from 'react'


const Hero = ({discount,arrow,robot}) => {
  return (
    <div className='w-full lg:h-[88vh] lg:flex'>
      <div className='lg:w-[50%] lg:h-full bg-transperant lg:pt-[60px] relative w-full h-[50%] flex flex-col  mt-[15%] lg:block lg:mt-0'>
        <div className='absolute lg:right-[10%] lg:top-[30%]  border-2 border-[#33bbcf] w-[100px] h-[100px] hidden sm:flex flex-col justify-center items-center rounded-full'>
          <p className='flex items-center text-[18xp] text-gradient font-semibold'>Get <img src={arrow} alt="" /></p>
          <p className='text-[18xp] text-gradient font-semibold'>Started</p>
        </div>
        <div className='text-center lg:text-start'>
          <p className='items-center  inline-flex py-1 px-2 bg-discount-gradient rounded-[15px] text-[14px] mb-5 lg:mb-0'>
            <img className='object-contain' src={discount} alt="" />
            20% DISCOUNT FOR ONE MONTH ACCOUNT
          </p>

        </div>
        <h1 className='lg:text-[65px] text-[60px] font-semibold text-center lg:text-start'>The Next <br /> <span className='text-gradient'>Generation</span> <br /> Payment Method.</h1>
        <p className='text-[15px] leading-7 mt-7 text-gray-300 text-center lg:text-start max-w-[500px] px-5 lg:px-0 mb-9 lg:mb-0'>Our team of experts uses a methodology to identify the credit card most likely to fit your needs.
        We examine annual percentage rate, annual fees
        </p>

      </div>
      <div className='lg:w-[50%] lg:h-full relative  w-[100vw] h-[500px] '>
        <div className='absolute w-full h-full blue__gradient top-[-100px]'>
        </div>
        <img className='w-full h-full object-contain object-top block' src={robot} alt="" />
      </div>
    </div>
  )
}

export default Hero