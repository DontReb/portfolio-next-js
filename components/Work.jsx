import React from 'react'

const Work = (props) => {

    const { ovoClass } = props;

    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className={`text-center mb-2 text-lg ${ovoClass}`}>My Portfolio</h4>
            <h2 className={`text-center text-5xl ${ovoClass}`}>My latest Work</h2>

            <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovoClass}`}>
                Welcome to my graphic design portfolio! Take a look at a curated collection of my latest work, showcasing my passion and expertise in creating impactful graphic designs. This isn't just a gallery of images; it's a testament to my ability to solve complex visual challenges and bring ideas to life. Each project reflects a unique journey, from initial concept to a polished, final product designed to resonate with its intended audience and drive real results.
            </p>

        </div>
    )
}

export default Work