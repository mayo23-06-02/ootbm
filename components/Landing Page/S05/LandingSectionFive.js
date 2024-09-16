import Image from 'next/image'
import React from 'react'
import LP02 from '../../../assets/images/OO.svg'
import LP02SM from '../../../assets/images/LP - 02SM.png'

export default function LandingPageSectionFive() {
  return (
    <div className='flex justify-center pt-16 lg:pt-8 '>
      <Image src={LP02} alt="section-one" width={1920} height={1080} className='' />
    </div>
  )
}
