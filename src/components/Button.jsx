import React from 'react'

const Button = ({title}) => {
  return (
    <div className='text-center sm:text-start mt-9'>
      <button className='bg-blue-gradient text-blue-900 py-4 w-[80%] sm:w-[30%] rounded-lg text-[20px] font-semibold'>{title}</button>
    </div>
  )
}

export default Button