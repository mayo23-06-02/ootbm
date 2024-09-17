import Image from 'next/image'
import React from 'react'
import LP02 from '../../../assets/images/LP - 02.jpg'
import LP02SM from '../../../assets/images/LP - 02SM.png'

export default function LandingPageSectionTwo() {
  return (
    <div className='flex justify-center  '>
      
      <Image src={LP02} alt="section-one" width={1920} height={1080} className='hidden lg:inline' />
      <Image src={LP02SM} alt="section-one" width={800} height={1080} className='lg:hidden' />
    </div>
  )
}
