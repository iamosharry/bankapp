import React from 'react'


const Card = ({card}) => {
  return (
    <div className='mt-[100px] px-7 md:flex items-center md:space-x-6'>
      <div className='md:w-[50%] sm:w-[50%]'>
        <h2 className='text-[30px] font-semibold md:max-w-[500px]'>Find a better card deal in few easy steps.</h2>
        <p className='mt-7 md:max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloribus nesciunt autem reprehenderit culpa, repellat quaerat facilis reiciendis rerum.</p>
        <div className='mt-7'>
          <button className='bg-blue-gradient text-blue-950 py-5 w-full md:max-w-[200px] rounded-lg text-[20px] font-semibold'>Get Started</button>
        </div>
      </div>
      <div className='flex justify-center mt-[100px] md:mt-0 md:w-[50%] sm:w-[50%]'>
        <img className='object-contain w-[350px] sm:w-[600px]' src={card} alt="" />
      </div>
    </div>
  )
}

export default Card