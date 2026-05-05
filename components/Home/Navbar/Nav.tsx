'use client';
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
  openNav:()=> void;
}

const Nav = ({openNav}:Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if(window.scrollY >= 90) setNavBg(true);
      if(window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener('scroll',handler);
    return () => window.removeEventListener('scroll',handler);
  },[]);

  return (
     <div className={`${navBg ? 'bg-emerald-950 shadow-md' : 'fixed'} transition-all duration-200 h-[12vh] z-1000 fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/*LOGO*/}
        <div className='flex items-center space-x-2'>
          <img src="/images/Mountain.png" alt="Mountain Tea Factory Logo" className="w-20 h-20 object-contain" />
          <h1 className='text-x1 md:text-2xl text-white uppercase font-semibold'>Mountain Tea</h1>
        {/*NavLinks*/}
        </div>
         
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link)=>{
            return <Link href={link.url} key={link.id}>
              <p className='relative text-white text-base font-medium w-fit block
              after:block after:content-[""] after:absolute after:bottom-0 after:left-0
              after:h-[3px] after:bg-yellow-300 after:w-full 
              after:scale-x-0 hover:after:scale-x-100 
              after:transition after:duration-300 after:origin-left'>{link.label}</p>
            </Link>
          })}
        </div>
        {/*Burger Menu*/}
        <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
      </div>
    </div>
  )
}

export default Nav