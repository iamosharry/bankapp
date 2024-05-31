import React, { useState } from 'react'

const Navbar = ({logo,navlist,menu,close}) => {
  const [openMenu,setOpenMenu] = useState(menu)
  const [mobileMenu,setMobileMenu] =  useState('translate-y-[-500px]')
  const handleMenu = ()=>{
    setOpenMenu(prev => prev === menu ? close : menu)
    setMobileMenu(prev => prev === 'translate-y-[-500px]' ? 'translate-y-[0]' : 'translate-y-[-500px]')
  }

  return (
    <nav className={`flex px-10 md:px-0 justify-between items-center py-5 relative w-full z-[200]`}>
      <img className='w-[120px] h-[35px] z-[100]' src={logo} alt="logo" />
      <ul className='flex-1 hidden md:flex items-center justify-end space-x-20 relative'>
        
        {navlist.map((list,index)=>(
          <li key={index}>{list}</li>
        ))}
      </ul>
      <div onClick={handleMenu} className='md:hidden z-[100]'>
        <img className='w-[28px] h-[28px] object-contain'   src={openMenu} alt="menu" />
      </div>
      <ul className={`md:hidden absolute bg-black-gradient top-[0]  w-full left-0 flex flex-col justify-center items-center
        h-[60vh] transform ${mobileMenu} transition duration-[0.5s] `}>
      {navlist.map((list,index)=>(
          <li key={index} className='mt-[50px]'>{list}</li>
        ))}

      </ul>
    </nav>
  )
}

export default Navbar