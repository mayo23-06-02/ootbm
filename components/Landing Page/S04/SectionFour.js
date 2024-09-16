
import React from 'react'
import LandingPageSectionFour from './LandingSectionFour'
import Link from 'next/link'


export default function SectionFour() {

    const base = "https://pdfhost.io/v/hQ4MFams4_OOTBM_COMPANY_PROFILE_X_2023cdr";

    const links = base;
    const copylink = (e) => {
        navigator.clipboard.writeText(links)
    }
    return (
        <div className=' flex  -translate-y-32 lg:translate-y-0 ic' >
            <div className=' space-y-6 flex flex-col items-center'>
                <LandingPageSectionFour />
                <div className='flex flex-col space-y-2 items-center justify-center w-full lg:space-y-0 lg:flex-row lg:space-x-3 '>
                    <Link legacyBehavior href="https://pdfhost.io/v/hQ4MFams4_OOTBM_COMPANY_PROFILE_X_2023cdr" passHref>
                        <button className='py-4 px-6 max-w-96 w-full  rounded-xl bg-[#D2402D] text-white text-xl   cursor-pointer lg:text-3xl  hover:bg-gray-500'>Download our Potfolio </button>
                    </Link>
                        <button   className='py-4 px-6 max-w-96 w-full  rounded-xl bg-white text-[#D2402D] text-xl   cursor-pointer lg:text-3xl  hover:bg-gray-00'>Share our Potfolio</button>
                </div>
            </div>
        </div>
    )
};
