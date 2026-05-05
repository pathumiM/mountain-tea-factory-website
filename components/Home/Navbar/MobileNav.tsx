 import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

    return (
        <div>
            {/*Overlay*/}
            <div 
                className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-1000 bg-black opacity-70 w-full h-screen`}
                onClick={closeNav}
            ></div>
            
            {/*Nav Menu*/}
            <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-100 w-[80%] sm:w-[60%] bg-green-950 space-y-6 z-1001`}>
                {navLinks.map((link) => {
                    return (
                        <Link href={link.url} key={link.id} onClick={closeNav}>
                            <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                                {link.label}
                            </p>
                        </Link>
                    )
                })}
                
                {/*Close Button*/}
                <CgClose 
                    onClick={closeNav} 
                    className='absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer' 
                />
            </div>
        </div>
    )
}

export default MobileNav