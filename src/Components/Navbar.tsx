import React from 'react'
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {
  const  [isMenuOpen,setIsMenuOpen]=useState(false)
  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)

  }


  return (
    
    <div className="container pt-8">
        <div className="flex justify-between items-center">
            <div className="text-xl font-large">
                Saba Butt </div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
<li className='menuLink'>
  <a href="#hero">Home</a>
</li>
<li className='menuLink'>
  <a href="#about">About</a>
</li>
<li className='menuLink'>
  <a href="#skills">Skills</a>
</li>
<li className='menuLink'>
  <a href="#project">Project</a>
</li>
<li className='menuLink'>
  <a href="#contact">Contact</a>
</li>
            </ul>
            <div className="mt-:hidden flex justify-start items-start" onClick={toggleMenu}>
             {isMenuOpen ? <AiOutlineClose size={30}/>
             : <AiOutlineMenu size={30}/>}

            </div>

            </div>
            {isMenuOpen &&(
              <ul className="flex flex-col gap-8 mt-8 md:hidden">
<li className='menuLink'>
  <a href="#hero" onClick={toggleMenu}>Home</a>
</li>
<li className='menuLink'>
  <a href="#about" onClick={toggleMenu}>About</a>
</li>
<li className='menuLink'>
  <a href="#project" onClick={toggleMenu}>Project</a>
</li>
<li className='menuLink'>
  <a href="#contact" onClick={toggleMenu}>Contact</a>
</li>
              </ul>
            )}
    </div>
  )
}

export default Navbar;
