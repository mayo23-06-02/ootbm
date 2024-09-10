import Image from 'next/image'
import React from 'react'
import LP from '../../../assets/images/LP.svg'
import Video from './Video'

export default function LandingPageSectionOne() {
  return (
    <div>
        <Image src={LP} alt="section-one" width={1920} height={1080} />
    </div>
  )
}
