import React from 'react';
import Image from 'next/image'; // Importing Image component

import C01 from '../../../assets/images/CC.png';

export default function Section02() {



    return (
        <div className='lg:grid lg:px-12 max-w-[1680px] px-4 py-12 lg:pb-0 lg:pt-24 grid-cols-5 grid-flow-row space-y-12 lg:space-y-0'>
            <div className='col-span-2'>
                <div className='space-y-2'>
                    <div className='text-3xl lg:text-8xl'>
                        <p>Partners</p><p> & Clients</p>
                    </div>
                    <div className='flex font-sans font-semibold space-x-2 lg:space-x-4 text-xs lg:text-sm'>
                        <p>Advertising</p><p>   Branding </p><p>  Strategy </p><p>  Communications </p><p>  Design </p><p>  Events</p>
                    </div>
                </div>
                <div className=' py-4 lg:py-8 max-w-xl font-sans space-y-2 text-sm lg:text-xl'>
                    <p>OOTBM has partnered with numerous companies to develop their brands and help establish communication strategies that reflect both their local personality and international capabilities. 
                    </p>
                    <p>
                    Each of these players has a unique personality and value proposition, which needs to be reflected in it&apos;s branch in order to effectively communicate how it&apos;s offering differs from the rest of the market. </p>
                </div>
            </div>
            <div className='flex items-center justify-end col-span-3'>
                    <div>
                        <Image src={C01} alt="section-one" width={800} height={1080} className='' />
                    </div>
                   
            </div>
        </div>
    )
}
