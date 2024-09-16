import React from 'react'
import OS from '../../../assets/images/OS.svg'
import Image from 'next/image'

export default function Section04() {
  return (
    <div className='w-full items-center justify-center flex flex-col '>
        <Image src={OS} alt="section-one" width={400} height={1080} className='hidden lg:inline' />
        <Image src={OS} alt="section-one" width={250} height={1080} className='lg:hidden' />
        <div className='flex pt-6  flex-col w-full items-start px-4 lg:px-16 text-2xl lg:text-8xl'>
            <p>COMMUNICATIONS STRATEGY</p>
            <p>ADVERTISING CAMPAIGNS</p>
            <p>PROJECT MANAGEMENT</p>
            <p>PROMOTIONS</p>
            <p>CLIENT SERVICE</p>
            <p>COPYWRITING & PHOTOGRAPHY</p>
            <p>CREATIVE GRAPHIC DESIGNS</p>
            <p>LOGO DEVELOPMENT & STYLE GUIDES</p>
            <p>BRANDING & CORPORATE IDENTITY</p>
            <p>ADVERTISING</p>
            <p>DIGITAL REPRESENTATIONS</p>
            <p>ILLUSTRATIONS</p>
        </div>
    </div>
  )
}
