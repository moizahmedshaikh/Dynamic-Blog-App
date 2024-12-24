"use client"

import { MagnifyingGlassIcon  } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Bars3Icon } from "@heroicons/react/24/outline";
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';


const Navbar = () => {

  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";



  return (
    <nav className='w-full bg-white'>
        <div className='max-w-[90%] w-full mx-auto flex items-center justify-between h-[70px]'>
            <h1 className='font-[900] text-2xl'>Moiz Ahmed</h1>
            <ul className='md:flex hidden items-center gap-4 text-black/60 text-[12px] font-[600] tracking-widest'>
                <li className='hover:text-black transition duration-300 cursor-pointer'>
                <Link href={"/"} className='p-3'>HOME</Link>
                  </li>
                <li className='hover:text-black transition duration-300 cursor-pointer'>
                <Link href={"/blog"} className='p-3' >BLOG</Link>
                  
                </li>
                <li className='hover:text-black transition duration-300 cursor-pointer'>
                <Link href={"/about"} className='p-3'>ABOUT</Link>
                </li>
                <li className='hover:text-black transition duration-300 cursor-pointer'>
                <Link href={"/contact"} className='p-3'>CONTACT</Link>
                </li>

            </ul>
            <div className='flex items-center gap-4 cursor-pointer'>
                <p className='text-[12px] font-[600] tracking-widest'>SEARCH</p>
                <MagnifyingGlassIcon className='w-5'/>
                <div onClick={showNavHandler} className=' w-7 md:hidden '> 
                <Bars3Icon />
                </div>
            </div>
        </div>










        
      <div className="w-full border-[0.3px] border-[#00000073] opacity-[30%]"></div>
      <div className="lg:hidden">
        <div
          className={`fixed ${navOpen} transform transition-all duration-500  inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
        >
          {/* Nav Links */}
        </div>
        <div
          className={`top-0 fixed ${navOpen} transform transition-all duration-500 delay-300 flex justify-start flex-col h-screen w-[80%] pt-24 sm:w-[60%]  bg-[#ffffff] z-[10000] space-y-6`}
        >
          


          <ul className=' flex flex-col items-center gap-8 text-black/60 text-lg font-[600] tracking-widest'>
                <li className='hover:text-black transition duration-300 cursor-pointer '>
                <Link onClick={closeNavHandler} className='p-3' href={"/"}>HOME</Link>
                  </li>
                <li className='hover:text-black transition duration-300 cursor-pointer '>
                <Link onClick={closeNavHandler} className='p-3' href={"/blog"}>BLOG</Link>
                  
                </li>
                <li className='hover:text-black transition duration-300 cursor-pointer '>
                <Link onClick={closeNavHandler} className='p-3' href={"/about"}>ABOUT</Link>
                </li>
                <li className='hover:text-black transition duration-300 cursor-pointer '>
                <Link onClick={closeNavHandler} className='p-3' href={"/contact"}>CONTACT</Link>
                </li>

            </ul>
          
          
          <CgClose
            onClick={closeNavHandler}
            className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 text-black"
          />
        </div>
      </div>


















    </nav>
  )
}

export default Navbar