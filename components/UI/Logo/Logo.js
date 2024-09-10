import Image from 'next/image'
import React from 'react'
import LogoImage from '../../../assets/images/Logo.png'
export default function Logo() {
  return (
    <div>
        <div className=''>
            <Image src={LogoImage} alt="logo" width={200} height={200} className="hidden lg:inline"/>
            <Image src={LogoImage} alt="logo" width={100} height={100} className="lg:hidden"/>
        </div>
    </div>
  )
}