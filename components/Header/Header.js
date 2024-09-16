'use client'
import React, { useState } from 'react'
import Logo from '../UI/Logo/Logo'
import Image from 'next/image'
import Menu from '../../assets/images/menu.svg'
import Close from '../../assets/images/Close.png'

import Link from 'next/link'

export default function Header() {

    const [open, setOpen] = useState(false)

    function toggleSideMenu(params) {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className='flex relative items-center justify-between px-4 lg:px-8 py-2 lg:py-4'>
            <Logo />
            <div className='hidden lg:inline'>
                <ul className='flex space-x-6 pr-6 text-2xl'>
                    <Link href={'../../'}>
                        <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                            <p>HOME</p>
                        </li>
                    </Link>
                    <Link href={'../../about-us'}>
                        <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                            <p>ABOUT US</p>
                        </li>
                    </Link>
                    <Link href={'../../our-work'}>
                        <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                            <p>OUR WORK</p>
                        </li>
                    </Link>
                    <Link href={'../../our-clients'}>
                        <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                            <p>CLIENTS</p>
                        </li>
                    </Link>
                    <Link href={'../../contact-us'}>
                        <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                            <p>CONTACT US</p>
                        </li>
                    </Link>
                </ul>
            </div>
            <div onClick={toggleSideMenu} className='lg:hidden '>
                <Image src={Menu} alt="logo" width={36} height={36} className="cursor-pointer hover:scale-110" />
            </div>
            <span className={`fixed z-50 h-screen top-0 left-0 w-screen bg-black/10 py-4 px-2 lg:hidden ${open ? 'block' : 'hidden'}`}>
                <div className='flex h-full w-full flex-col bg-[#DEDEDE] px-4 py-6 rounded-xl  justify-end relative'>
                    <Image onClick={toggleSideMenu} src={Close} alt="logo" width={36} height={36} className="cursor-pointer active::scale-110 absolute top-4 right-4 " />
                    <ul className='flex flex-col space-y-2  pr-6 text-5xl'>
                        <Link href={'../../'}>
                            <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                                <p>HOME</p>
                            </li>
                        </Link>
                        <Link href={'../../about-us'}>
                            <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                                <p>ABOUT US</p>
                            </li>
                        </Link>
                        <Link href={'../../our-work'}>
                            <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                                <p>OUR WORK</p>
                            </li>
                        </Link>
                        <Link href={'../../our-clients'}>
                            <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                                <p>CLIENTS</p>
                            </li>
                        </Link>
                        <Link href={'../../contact-us'}>
                            <li className='cursor-pointer hover:scale-110  hover:text-black/50'>
                                <p>CONTACT US</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </span>
        </div>
    )
}
