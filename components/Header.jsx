import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = (props) => {

    const { ovoClass } = props;

    return (
        <div>
            <div>
                <Image src={assets.profile_img} alt="profile picture of the user" className='rounder-full w-32' />
            </div>
            <h3 className={`flex items-end gap-2 text-xl md:text-2xl mb-3 ${ovoClass} `}>Hi! I am Kim Navarro <Image src={assets.hand_icon} alt="waving hand hello" className='w-6' /></h3>
            <h1 className={`text-3xl sm:text-6xl lg:text-[66px] ${ovoClass}`}>Graphic Designer based in place.</h1>
            <p className={`max-w-2xl mx-auto ${ovoClass}`}>
                I am a graphic designer from ... with ... years of experience in multiple companies like ... and clients ...
            </p>
            <div>
                <a href="">Contact Me</a>
            </div>
            
        </div>
    )
}

export default Header