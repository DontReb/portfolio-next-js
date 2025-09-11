import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = (props) => {

    const { ovoClass } = props;

    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt="profile picture of the user" className='rounder-full w-32' />
            </div>
            <h3 className={`flex items-end gap-2 text-xl md:text-2xl mb-3 ${ovoClass} `}>Hi! I am Kim Navarro <Image src={assets.hand_icon} alt="waving hand hello" className='w-6' /></h3>
            <h1 className={`text-3xl sm:text-6xl lg:text-[66px] ${ovoClass}`}>Graphic Designer based in place.</h1>
            <p className={`max-w-2xl mx-auto ${ovoClass}`}>
                I am a graphic designer from ... with ... years of experience in multiple companies like ... and clients ...
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} alt="Button to go to contacting the user" className='w-4' /></a>

                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    My resume <Image src={assets.download_icon} alt="Button to download the resume of the user" className='w-4' /></a>
            </div>

        </div>
    )
}

export default Header