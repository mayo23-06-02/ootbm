import Image from 'next/image'
import React from 'react'
import LP03 from '../../../assets/images/AB.png'
import LP03SM from '../../../assets/images/ABSM.png'
import LP02SM from '../../../assets/images/LP004.svg'
import Link from 'next/link'
import Fincorp from '../../../assets/images/FINCORP.png'
import FincorpSM from '../../../assets/images/FINCORP - SM.png'
import Kelloggs from '../../../assets/images/KELLOGGS.png'
import KelloggsSM from '../../../assets/images/KELLOGGS - SM.png'

import { Span } from 'next/dist/trace'

export default function LandingPageSectionFour() {
    return (
        <div className='flex justify-center flex-col items-center  '>
            <Image src={LP02SM} alt="section-one" width={250} height={1080} className=' py-8 lg:py-16 lg:hidden' />
            <Image src={LP02SM} alt="section-one" width={400} height={1080} className=' py-8 lg:py-16 hidden lg:inline' />
            <div>
                <ul className='flex space-y-6 flex-col' >
                    <li className='relative flex items-center justify-center'>
                        <Image src={Fincorp} alt="section-one" width={1920} height={1080} className='hidden lg:inline' />
                        <Image src={FincorpSM} alt="section-one" width={1920} height={1080} className='lg:hidden' />
                        <span className='absolute text-white items-center flex flex-col'>
                            <div className='space-y-6'>
                                <p className='text-7xl lg:text-[150px] space-y-16 flex flex-col items-center'>FINCORP</p>
                                <p className='font-sans lg:max-w-[80vw] max-w-[90vw]   text-center text-xs lg:text-lg'>In 2016, First Finance commissioned OOTBM to handle their branding positioning and identity for the company as well as for each of it&apos;s three branches spread across the country. Since then, OOTBM has been involved in the creations of all First Finance marketing collateral - from it&apos;s brochures, print media adverts billboards, stationery and digital material </p>
                            </div>
                        </span>
                    </li>
                    <li className='relative flex items-center justify-center'>
                        <Image src={Kelloggs} alt="section-one" width={1920} height={1080} className='hidden lg:inline' />
                        <Image src={KelloggsSM} alt="section-one" width={1920} height={1080} className='lg:hidden' />
                        <span className='absolute text-white items-center flex flex-col'>
                            <div className='space-y-6'>
                                <p className='text-7xl lg:text-[150px] space-y-16 flex flex-col items-center'>KELLOGGS</p>
                                <p className='font-sans lg:max-w-[80vw] max-w-[90vw]   text-center text-xs lg:text-lg'>The print campaign serves both the corporate image and the target audience, centering around the  &apos;&apos;Proudly Local&apos;&apos; theme. It&apos;s used particularly for the public to convey the powerful realities of energy and promote
                                    awareness of the Kellogg&apos;s Tolagram noodles brand. Well-targeted advertisement with effective,  concise copywriting and original photography were used effectively to reach the niche institutional audience. </p>
                            </div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
