import Image from 'next/image'
import React from 'react'
import Stat from '../../../assets/images/STAT.svg'

export default function Section02() {
    return (
        <div className='px-4 lg:pt-16 max-w-[1680px] pt-8 space-y-12 lg:space-y-0 lg:px-16 grid-cols-7 lg:grid grid-flow-row'>
            <div className='col-span-4 space-y-8 flex items-end flex-col lg:space-y-16 lg:pr-16'>
                <div className='space-y-4 max-w-xl '>
                    <p className='text-3xl lg:text-5xl'>&apos;&apos;Started from the bottom now we are here&apos;&apos;</p>
                    <p className='font-sans font-semibold  text-justify'>
                        Out of the Box Media, founded in 2013 by Mr. Tammy Dlamini, is a Full House Advertising Agency & Brand Solutions company specializing in advertising, communications, brand management, and events management.
                    </p>
                    <p className='font-sans font-semibold  text-justify'>
                        Initially starting with just three staff members and securing the Sun International brand management contract, the company has since expanded its services to include branding, printing, exhibition design, and manufacturing. Now operating from an office block in Zakhele and a warehouse in Matsapha,
                    </p>
                    <p className='font-sans font-semibold  text-justify'>
                        Out of the Box Media employs 10 full-time and 5 part-time employees, serving a diverse clientele from both the public and private sectors. The company also runs an intern program to provide industry experience to students.
                    </p>
                </div>
                <div className='space-y-4 max-w-xl'>
                    <p className='text-3xl lg:text-5xl'>&apos;&apos;This is our story and its not over yet&apos;&apos;</p>
                    <p className='font-sans font-semibold  text-justify'>
                        OOTBM is a strategic branding and communication design consultancy, specializing in emerging markets and delivering media-neutral, business-focused solutions to client challenges. Areas of practice include design thinking, information, environmental and digital design, stakeholder communication and investor relations, internal brand engagement, advertising, public relations and events, digital brand management, procurement, project management and printing.
                    </p>
                    <p className='font-sans font-semibold  text-justify'>
                        OOTBM is a function of its unique pool of talent. Built from the inside-out, we&apos;ve assembled the brightest minds in our industry and created a high performance culture in which only the best is acceptable. This translates into superior client solutions and delivery of results that are unrivaled by our peers. Our team is highly diverse, driven to deliver results and ready to assist in deriving sustainable competitive advantage.
                    </p>
                    <p className='font-sans font-semibold  text-justify'>
                        Over the past 8 years, we&apos;ve fine tuned our organizational and operational strategy to provide clients with a 360  brand solution.
                    </p>
                    <p className='font-sans font-semibold  text-justify'>
                        We&apos;ve also taken an active leadership role in driving dialogue and influencing change in the creative community, with a regular podium presence by OOTBM board members at international and local workshops and conferences and representation on industry bodies.
                    </p>
                </div>
            </div>
            
            <div className='col-span-3'>
                <Image src={Stat} alt="section-one" width={620} height={1080} />
            </div>
        </div>
    )
}
