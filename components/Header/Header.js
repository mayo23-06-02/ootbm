import React from 'react'
import Logo from '../UI/Logo/Logo'
import Image from 'next/image'
import Menu from '../../assets/images/Menu.svg'

export default function Header() {
  return (
    <div className='flex items-center justify-between px-4 lg:px-8 py-2 lg:py-4'>
        <Logo />
        <div className='hidden lg:inline'>
            <ul className='flex space-x-6 pr-6 text-2xl'>
                <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                    <p>HOME</p>
                </li>
                <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                    <p>ABOUT US</p>
                </li>
                <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                    <p>OUR WORK</p>
                </li>
                <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                    <p>PARTNERS</p>
                </li>
                <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                    <p>CONTACT US</p>
                </li>
            </ul>
        </div>
        <div className='lg:hidden '>
            <Image src={Menu} alt="logo" width={36} height={36} className="cursor-pointer hover:scale-110"/>
        </div>
    </div>
  )
}
