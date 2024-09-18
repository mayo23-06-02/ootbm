import Image from 'next/image'
import React from 'react'
import LP03 from '../../../assets/images/AP.png'
import LP03SM from '../../../assets/images/BB.png'
import LP02SM from '../../../assets/images/CB.png'
import Link from 'next/link'
import Fincorp from '../../../assets/images/DD.png'
import FincorpSM from '../../../assets/images/FINCORP - SM.png'
import Kelloggs from '../../../assets/images/CG.png'
import KelloggsSM from '../../../assets/images/KELLOGGS - SM.png'
import SGT from '../../../assets/images/CUU.png'
import SGTSM from '../../../assets/images/SGTSM.png'
import TEG from '../../../assets/images/TEG.png'
import TEGSM from '../../../assets/images/TEGSM.png'
import { BiDownload } from 'react-icons/bi'



import { Span } from 'next/dist/trace'

export default function Section02() {
    return (
        <div className='flex pt-16 justify-center flex-col items-center  space-y-4 lg:space-y-16 '>
            <div className='w-full flex flex-col items-center justify-center'>
                <div>
                    <Image src={LP03} alt="section-one" width={1920} height={1080} className='' />
                </div>
                <div className=' px-4'>
                    <div className=' grid lg:grid-cols-4 max-w-[1280px] md:grid-cols-3 grid-cols-2 gap-2 py-4 rounded-b-lg  bg-[#E6E5E5] px-6 w-full '>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - New Corporate Wear Catalogue.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - New Corporate Wear Catalogue</a>
                            </Link>
                            <BiDownload className='text-3xl w-8 h-8 hidden lg:inline' />
                        </div>
                       
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Body Warmers, Hoodies, Sweaters, Tracksuits & Fleece.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Body Warmers, Hoodies, Sweaters, Tracksuits & Fleece</a>
                            </Link>
                            <BiDownload className='text-3xl w-8 h-8 hidden lg:inline' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Bottoms, Foot & Knit Wear.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Bottoms, Foot & Knit Wear</a>
                            </Link>
                            <BiDownload className='text-3xl w-8 h-8 hidden lg:inline' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Corporate Wear.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Corporate Wear</a>
                            </Link>
                            <BiDownload className='text-3xl w-8 h-8 hidden lg:inline' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Golf Shirts.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Golf Shirts</a>
                            </Link>
                            <BiDownload className='text-3xl w-8 h-8 hidden lg:inline' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Headwear.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Headwear</a>
                            </Link>
                            <BiDownload className='text-3xl w-8 h-8 hidden lg:inline' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Jackets.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Jackets</a>
                            </Link>
                            <BiDownload className='text-3xl w-8 h-8 hidden lg:inline' />
                        </div>

                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Tshirts.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Tshirts</a>
                            </Link>
                            <BiDownload className='text-3xl w-8 h-8 hidden lg:inline' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Kids.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Kids</a>
                            </Link>
                            <BiDownload className='text-3xl w-8 h-8 hidden lg:inline' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM-Sports-Summer.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM-Sports-Summer</a>
                            </Link>
                            <BiDownload className='text-3xl w-8 h-8 hidden lg:inline' />
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center '>
                <div>
                    <Image src={SGT} alt="section-one" width={1920} height={1080} className='' />
                </div>
                <div className=' '>
                    <div className=' grid lg:grid-cols-4 max-w-[1280px] md:grid-cols-3 grid-cols-2 gap-2 py-4 rounded-b-lg  bg-[#E6E5E5] px-6 w-full '>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Uniform Catalogue - Jackets & Polar Fleece.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Uniform Catalogue - Jackets & Polar Fleece</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Uniform Catalogue - Jeans & Chinos.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Uniform Catalogue - Jeans & Chinos</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Uniform Catalogue - Knitwear & Formal Wear.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Uniform Catalogue - Knitwear & Formal Wear</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Uniform Catalogue - Ladies Soft Dressing.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Uniform Catalogue - Ladies Soft Dressing</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Uniform Catalogue - T-shirts & Golf Shirts.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Uniform Catalogue - T-shirts & Golf Shirts</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Uniform Catalogue - Woven Shirts & Blouses.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Uniform Catalogue - Woven Shirts & Blouses</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center '>
                <div>
                    <Image src={LP03SM} alt="section-one" width={1920} height={1080} className='' />
                </div>
                <div className=' '>
                    <div className=' grid lg:grid-cols-4 max-w-[1280px] md:grid-cols-3 grid-cols-2 gap-2 py-4 rounded-b-lg  bg-[#E6E5E5] px-6 w-full '>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Branding Brochure HR_2024.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Branding Brochure HR_2024</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-col items-center justify-center '>
                <div>
                    <Image src={LP03SM} alt="section-one" width={1920} height={1080} className='' />
                </div>
                <div className=' '>
                    <div className=' grid lg:grid-cols-4 max-w-[1280px] md:grid-cols-3 grid-cols-2 gap-2 py-4 rounded-b-lg  bg-[#E6E5E5] px-6 w-full '>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Branding Brochure HR_2024.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Branding Brochure HR_2024</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center '>
                <div>
                    <Image src={LP02SM} alt="section-one" width={1920} height={1080} className='' />
                </div>
                <div className=' '>
                    <div className=' grid lg:grid-cols-4 max-w-[1280px] md:grid-cols-3 grid-cols-2 gap-2 py-4 rounded-b-lg  bg-[#E6E5E5] px-6 w-full '>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Coolers & Bars Catalogue.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Coolers & Bars Catalogue</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center '>
                <div>
                    <Image src={Kelloggs} alt="section-one" width={1920} height={1080} className='' />
                </div>
                <div className=' '>
                    <div className=' grid lg:grid-cols-4 max-w-[1280px] md:grid-cols-3 grid-cols-2 gap-2 py-4 rounded-b-lg  bg-[#E6E5E5] px-6 w-full '>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Bags.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Bags</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Drinkware.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Drinkware</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Home.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Home</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Key & Card Holders.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Key & Card Holders</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Lanyards & Giveaways.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Lanyards & Giveaways</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Lanyards & Giveaways.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Lanyards & Giveaways</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Mobile Tech.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Mobile Tech</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Notebooks.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Notebooks</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Outdoor.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Outdoor</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Personal Care & Pamper.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Personal Care & Pamper</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Sports.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Sports</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Umbrellas.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Umbrellas</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Writing & Stationery.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Writing & Stationery</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM -  Touches & Auto.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM -  Touches & Auto</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Diaries 2024.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Diaries 2024</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center '>
                <div>
                    <Image src={Fincorp} alt="section-one" width={1920} height={1080} className='' />
                </div>
                <div className=' '>
                    <div className=' grid lg:grid-cols-4 max-w-[1280px] md:grid-cols-3 grid-cols-2 gap-2 py-4 rounded-b-lg  bg-[#E6E5E5] px-6 w-full '>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Design & Displays Cat-24.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Design & Displays Cat-24</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - In-store Demo & Promo Display 24.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - In-store Demo & Promo Display 24</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Point Of Sale Catalogue 2024.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Point Of Sale Catalogue 2024</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Retail Display Hardware 24.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Retail Display Hardware 24</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                        <div className='bg-[#F2F2F2] px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white  text-[#676564] font-sans font-bold  w-full flex items-center justify-between'>
                            <Link legacyBehavior href="api/download/OOTBM - Temp Retail Display Hardware 2024.pdf" passHref>
                                <a download className='line-clamp-1 text-sm '>OOTBM - Temp Retail Display Hardware 2024</a>
                            </Link>
                            <BiDownload className='text-3xl h-8 w-8 hidden lg:inline ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
