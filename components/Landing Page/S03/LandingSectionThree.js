import Image from 'next/image'
import React from 'react'
import LP03 from '../../../assets/images/AB.png'
import LP03SM from '../../../assets/images/ABSM.png'
import LP02SM from '../../../assets/images/LP003.svg'
import Link from 'next/link'

export default function LandingPageSectionThree() {
    return (
        <div className='flex justify-center flex-col items-center  '>
            <Image src={LP02SM} alt="section-one" width={300} height={1080} className=' py-8 lg:py-16 lg:hidden' />
            <Image src={LP02SM} alt="section-one" width={400} height={1080} className=' py-8 lg:py-16 hidden lg:inline' />
            <Image src={LP03} alt="section-one" width={1920} height={1080} className='hidden lg:inline' />
            <Image src={LP03SM} alt="section-one" width={1920} height={1080} className='inline lg:hidden' />
            <span>
                <Link href={'../../about-us'}>
                    <button className='text-white text-xl -translate-y-16 lg:-translate-y-24 cursor-pointer lg:text-3xl hover:text-[#D2402D]'>
                        <a href='#'>READ MORE ABOUT US</a>
                    </button>
                </Link>
            </span>
        </div>
    )
}
