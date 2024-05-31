import React from 'react'

const Transaction = ({bill,apple,google}) => {
  return (
    <div className='md:flex items-center md:justify-center'>
      <div className='flex md:w-[50%] sm:justify-start justify-center mt-[80px] px-3'>
        <img className='w-[350px] md:w-[450px] lg:w-[500px] object-contain ' src={bill} alt="bill-icon" />
      </div>
      <div className='px-5 mt-10 md:w-[50%]'>
        <h3 className='font-semibold text-[25px] md:text-[30px] lg:text-[50px] max-w-[350px] lg:max-w-[600px]'>Easily control your billing and invoicing.</h3>
        <p className='mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere dignissimos impedit quidem perferendis amet dolores quae quisquam, accusamus sint.</p>
        <div className='flex mt-7 items-center justify-between sm:justify-start sm:space-x-8 md:justify-start md:space-x-8'>
          <img className='w-[150px] object-contain' src={apple} alt="apple-icon" />
          <img className='w-[150px] object-contain' src={google} alt="google-icon" />
        </div>
      </div>
    </div>
  )
}

export default Transaction