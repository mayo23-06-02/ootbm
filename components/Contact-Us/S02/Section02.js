import React from 'react'

export default function Section02() {
    return (
        <div className='lg:grid lg:px-12 px-4 py-12 lg:pb-0 lg:pt-24 grid-cols-2 grid-flow-row space-y-12 lg:space-y-0'>
            <div>
                <div className='space-y-2'>
                    <div className='text-5xl lg:text-[100px]'>
                        <p>Lets get</p><p> down to work</p>
                    </div>
                    <div className='flex font-sans font-semibold space-x-2 lg:space-x-4 text-xs lg:text-xl'>
                        <p>Advertising</p><p>   Branding </p><p>  Strategy </p><p>  Communications </p><p>  Design </p><p>  Events</p>
                    </div>
                </div>
                <div className='font-sans font-bold text-sm lg:text-xl'>
                    <p className='pb-6 pt-8 lg:pb-10 lg:pt-12 text-black/55'>Email, call, or complete the form to get a quote or enquire</p>
                    <p>Plot 1613 | Hhelemisi Manzini</p>
                    <p>Office No. 01 | Box C633 Hub</p>
                    <p>+268 2505 7595 | +268 76420848</p>
                    <p>outoftheboxmedia@hotmail.com</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='bg-[#F2F2F2] max-w-xl rounded-3xl p-4 lg:p-8 space-y-6'>
                    <div>
                        <p className='text-2xl lg:text-5xl'>Get in Touch</p>
                        <p className='text-sm lg:text-xl'>You can reach us any time</p>
                    </div>
                    <div className='space-y-4'>
                        <input className='rounded-full py-4 px-4 lg:px-8 w-full bg-white' placeholder='Full Name' />
                        <input className='rounded-full py-4 px-4 lg:px-8 w-full bg-white' placeholder='Phone Number' />
                        <input className='rounded-full py-4 px-4 lg:px-8 w-full bg-white' placeholder='Email' />
                        <textarea className='rounded-2xl py-4 px-4 lg:px-8 w-full h-48 bg-white' placeholder='How can we help you?' />
                        <button className='bg-[#D2402D] text-white rounded-full py-4 px-4 lg:px-8 w-full' >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
