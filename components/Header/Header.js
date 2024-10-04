'use client'
import React, { useState } from 'react'
import Logo from '../UI/Logo/Logo'
import Image from 'next/image'
import Menu from '../../assets/images/menu.svg'
import Close from '../../assets/images/Close.png'

import Link from 'next/link'
import { BiEnvelope, BiLocationPlus, BiLogoFacebook, BiLogoInstagram, BiMessage } from 'react-icons/bi'

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
        <div className='flex bg-black relative items-end justify-between px-4 lg:px-8 py-2  '>
            <div className='w-full hidden lg:inline -space-y-6'>
                <div className='flex justify-between w-full items-center '>
                    <div className='scale-125 translate-y-3 '>
                        <Logo />
                    </div>
                    <div className='flex items-center space-x-16'>
                        <div className='flex items-center space-x-12'>
                            <div className='text-white font-sans font-semibold text-sm flex items-center space-x-2'>
                                <BiLocationPlus className='text-[#BB3928] text-3xl' />
                                <div>
                                    <p>Office No. 01 | Box C633 Hub | Plot 1613 | Hhelemisi Manzini </p>
                                    <p></p>
                                </div>
                            </div>
                            <div className='text-white font-sans font-semibold text-sm flex items-center space-x-2'>
                                <BiEnvelope className='text-[#BB3928] text-3xl' />
                                <div>
                                    <p>info@outoftheboxmedia.co.sz</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-x-4 flex items-center'>
                            <Link href={'https://www.facebook.com/Outoftheboxmediabegtodiffer'}>
                                <BiLogoFacebook className='text-gray-200 text-3xl' />
                            </Link>
                            <Link href={'https://www.instagram.com/outoftheboxmedia_/'}>
                                <BiLogoInstagram className='text-gray-200 text-3xl ' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-end '>
                    <div className='hidden lg:inline '>
                        <ul className='flex space-x-6  py-2  text-xl text-[#676564]'>
                            <Link href={'../../'}>
                                <li className='cursor-pointer hover:scale-110 text-gray-200  hover:text-gray-400 tracking-wider'>
                                    <p>HOME</p>
                                </li>
                            </Link>
                            <Link href={'../../about-us'}>
                                <li className='cursor-pointer hover:scale-110 text-gray-200   hover:text-gray-400 tracking-wider'>
                                    <p>ABOUT US</p>
                                </li>
                            </Link>
                            <Link href={'../../our-work'}>
                                <li className='cursor-pointer hover:scale-110 text-gray-200   hover:text-gray-400 tracking-wider'>
                                    <p>OUR WORK</p>
                                </li>
                            </Link>
                            <Link href={'../../our-clientele'}>
                                <li className='cursor-pointer hover:scale-110 text-gray-200   hover:text-gray-400 tracking-wider'>
                                    <p>CLIENTS</p>
                                </li>
                            </Link>
                            <Link href={'../../contact-us'}>
                                <li className='cursor-pointer hover:scale-110 text-gray-200  hover:text-gray-400 tracking-wider'>
                                    <p>CONTACT US</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='lg:hidden flex items-center justify-between w-full'>
                <div className='lg:hidden'>
                    <Logo />
                </div>
                <div onClick={toggleSideMenu} className='lg:hidden '>
                    <Image src={Menu} alt="logo" width={36} height={36} className="cursor-pointer hover:scale-110" />
                </div>
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
                        <Link href={'../../our-clientele'}>
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
