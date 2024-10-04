import Image from 'next/image'
import React from 'react'
import LogoImage from '../../../assets/images/LOGO.png'
export default function Logo() {
  return (
    <div>
        <div className=''>
            <Image src={LogoImage} alt="logo" width={150} height={200} className="hidden lg:inline"/>
            <Image src={LogoImage} alt="logo" width={90} height={100} className="lg:hidden"/>
        </div>
    </div>
  )
}