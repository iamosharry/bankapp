import React from 'react'

const Users = () => {
  return (
    
    <div className='lg:flex md:flex mt-[100px] sm:justify-between px-[30px] sm:px-0'>
      <div className='flex items-center space-x-5 lg:psudo mb-[20px] justify-center'>
        <h3 className='lg:text-[40px] text-[30px] font-semibold'>3800+</h3>
        <p className='text-gradient text-[14px] sm:text-[16px] font-bold'>USER ACTIVE</p>
      </div>
      <div className='flex items-center space-x-5 lg:psudo mb-[20px] justify-center'>
        <h3 className='lg:text-[40px] text-[30px] font-semibold'>230+</h3>
        <p className='text-gradient text-[14px] sm:text-[16px] font-bold'>TRUSTED BY COMPANY</p>
      </div>
      <div className='flex items-center space-x-5 mb-[20px]'>
        <h3 className='lg:text-[40px] text-[30px] font-semibold'>$230M+</h3>
        <p className='text-gradient text-[14px] sm:text-[16px] font-bold'>TRANSACTION</p>
      </div>
    </div>
  )
}

export default Users