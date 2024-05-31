import React from 'react'

const GetStarted = ({arrow}) => {
  return (
    <div className='relative  md:hidden flex justify-center'>
      <div className='border-4 border-[#33bbcf] w-[200px] h-[200px] flex flex-col justify-center items-center rounded-full'>
        <p className='flex items-center text-[30px] text-gradient font-semibold'>Get <img className='object-contain w-[30px] h-[30px]' src={arrow} alt="" /></p>
        <p className='text-[30px] text-gradient font-semibold'>Started</p>
      </div>
    </div>
  )
}

export default GetStarted