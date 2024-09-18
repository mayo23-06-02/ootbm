import React from 'react'
import OS from '../../../assets/images/OS.svg'
import Image from 'next/image'

export default function Section04() {
  return (
    <div className='w-full items-center max-w-[1280px] justify-center flex flex-col '>
      <Image src={OS} alt="section-one" width={400} height={1080} className='hidden lg:inline' />
      <Image src={OS} alt="section-one" width={250} height={1080} className='lg:hidden' />
      <div className='flex pt-6  flex-col w-full items-start px-4  text-2xl lg:text-6xl'>
        <p>ADVERTISING AGENCY </p>
        <p>COMMUNICATIONS STRATEGY</p>
        <p>BRANDING & CORPORATE IDENTITY</p>
        <p>PROJECT MANAGEMENT</p>
        <p>MERCHANDISING & PROMOTIONS</p>
        <p>COPYWRITING & PHOTOGRAPHY</p>
        <p>CREATIVE GRAPHIC DESIGNS</p>
        <p>POP DISPLAY & EXHIBITIONS</p>
        <p>CORPORATE GIFTS & CORPORATE WEAR</p>
      </div>
    </div>
  )
}
