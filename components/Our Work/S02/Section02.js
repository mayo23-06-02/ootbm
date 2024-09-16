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
import SGT from '../../../assets/images/SGT.png'
import SGTSM from '../../../assets/images/SGTSM.png'
import TEG from '../../../assets/images/TEG.png'
import TEGSM from '../../../assets/images/TEGSM.png'



import { Span } from 'next/dist/trace'

export default function Section02() {
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
                                <p className='font-sans lg:max-w-[80vw] max-w-[90vw]   text-center text-xs lg:text-lg'>In 2016, First Finance commissioned OOTBM to handle their branding positioning and identity for the company as well as for each of it’s three branches spread across the country. Since then, OOTBM has been involved in the creations of all First Finance marketing collateral - from it’s brochures, print media adverts billboards, stationery and digital material </p>
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
                    <li className='relative flex items-center justify-center'>
                        <Image src={SGT} alt="section-one" width={1920} height={1080} className='hidden lg:inline' />
                        <Image src={SGTSM} alt="section-one" width={1920} height={1080} className='lg:hidden' />
                        <span className='absolute text-white items-center flex flex-col'>
                            <div className='space-y-6 flex flex-col items-center w-full'>
                                <p className='text-5xl lg:text-[150px] space-y-16 flex flex-col items-center'>SNG Grant Thornton</p>
                                <p className='font-sans lg:max-w-[80vw] max-w-[90vw]   text-center text-xs lg:text-lg'>SNG Grant Thornton is a member firm of Grant Thornton International Ltd with an aim to help dynamic organizatios unlock their potential for growth by providing meaningful, forward looking advice.

                                    We created a different stratergy, which informed and gave rise to an exciting new identity and brand promise of SNG: An instict for growth. The SNG signature was further developed across all two-dimensional business stationary, literarture, eletronic elements, marketing collateral, clothing and signage</p>
                            </div>
                        </span>
                    </li>
                    <li className='relative flex items-center justify-center'>
                        <Image src={TEG} alt="section-one" width={1920} height={1080} className='hidden lg:inline' />
                        <Image src={TEGSM} alt="section-one" width={1920} height={1080} className='lg:hidden' />
                        <span className='absolute text-white items-center flex flex-col'>
                            <div className='space-y-6 flex flex-col items-center w-full'>
                                <p className='text-5xl lg:text-[150px] space-y-16 flex flex-col items-center'>The Epig Gig</p>
                                <p className='font-sans lg:max-w-[80vw] max-w-[90vw]   text-center text-xs lg:text-lg'>THE EPIC GIG IS A vibrant festival dedicated to showcasing and celebrating the latest trends and talents of the youth in the arts and entertainment industry. Our mission is to provide a dynamic platform where young artists, performers, and creators can exhibit their work, connect with like-minded individuals, and inspire the next generation of innovators.</p>
                            </div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
