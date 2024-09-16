import React from 'react'
import AB01 from '../../../assets/images/Client.png'
import AB02 from '../../../assets/images/OWLG.jpg'
import LP02SM from '../../../assets/images/LP004.svg'


import Image from 'next/image'
export default function Section01() {
    return (
        <div className='flex items-center flex-col'>
            <Image src={AB01} alt="section-one" width={1920} height={1080} className='' />
        </div>
    )
}
