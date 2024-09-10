import Image from 'next/image'
import React from 'react'
import LP02 from '../../../assets/images/LP - 02.png'
import LP02SM from '../../../assets/images/LP - 02SM.png'

export default function LandingPageSectionTwo() {
  return (
    <div className='flex justify-center  '>
      <span className='text-white absolute text-5xl pt-24 lg:text-8xl lg:max-w-[50vw] text-center'>
        <p>A CULTURE DRIVEN CREATIVE <span className='text-[#D2402D]'>AGENCY</span><br />
        BUILT FOR <br />THE NEW <br /><span className='text-[#D2402D]'>MAINSTREAM</span></p>
      </span>
      <Image src={LP02} alt="section-one" width={1920} height={1080} className='hidden lg:inline' />
      <Image src={LP02SM} alt="section-one" width={800} height={1080} className='lg:hidden' />
    </div>
  )
}
