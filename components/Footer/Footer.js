import React from 'react'
import Home from '../../assets/images/HOME.jpg'
import About from '../../assets/images/ABOUT US.png'
import Partners from '../../assets/images/PARTNERS.png'
import Work from '../../assets/images/OUR WORK.png'
import Contact from '../../assets/images/CONTACT US.png'


import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className=' lg:translate-y-0 space-y-6 '>
            <ul className='flex lg:space-x-2 space-x-1 text-sm lg:text-3xl'>
                <Link href={'../../'}>
                    <li className='flex items-center justify-center cursor-pointer hover:scale-105'>
                        <Image src={Home} alt="section-one" width={400} height={1080} />
                        <span className='absolute'>
                            <p className='text-white'>Home</p>
                        </span>
                    </li>
                </Link>
                <Link href={'../../about-us'}>
                    <li className='flex items-center justify-center cursor-pointer hover:scale-105'>
                        <Image src={About} alt="section-one" width={400} height={1080} />
                        <span className='absolute'>
                            <p className='text-white'>About Us</p>
                        </span>
                    </li>
                </Link>
                <Link href={'../../our-work'}>
                    <li className='flex items-center justify-center cursor-pointer hover:scale-105'>
                        <Image src={Partners} alt="section-one" width={400} height={1080} />
                        <span className='absolute'>
                            <p className='text-white'>Our Work</p>
                        </span>
                    </li>
                </Link>
                <Link href={'../../our-clientele'}>
                    <li className='flex items-center justify-center cursor-pointer hover:scale-105'>
                        <Image src={Work} alt="section-one" width={400} height={1080} />
                        <span className='absolute'>
                            <p className='text-white'>Clients</p>
                        </span>
                    </li>
                </Link>
                <Link href={'../../contact-us'}>
                    <li className='flex items-center justify-center cursor-pointer hover:scale-105'>
                        <Image src={Contact} alt="section-one" width={400} height={1080} />
                        <span className='absolute'>
                            <p className='text-white'>Contact Us</p>
                        </span>
                    </li>
                </Link>
            </ul>
            <div className='flex w-full items-center flex-col space-y-2 text-xs pb-8'>
                <div className='h-0.5 w-full bg-white' />
                <div className='font-sans font-semibold'>
                    <p>Copyright © OOTBM 2024</p>
                </div>
            </div>
        </div>
    )
}
