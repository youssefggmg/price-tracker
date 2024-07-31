import React from 'react';

const Hero = () => {
    return (
        <div className='background-img flex flex-col justify-center px-4 md:px-11 py-8 md:py-16'>
            <h1 className='roboto-bold text-3xl md:text-5xl text-white w-full md:w-2/3 text-center md:text-left mb-4'>
                POWERFUL WEB SCRAPER FOR REGULAR AND PROFESSIONAL USE
            </h1>
            <p className='text-white w-full md:w-2/3 text-center md:text-left mb-4'>
                Price tracker is the best web scraper to scrap Amazon likes and track the prices of the items.
            </p>
            <p className='text-white text-center md:text-left'>
                Try it right now by <span className='text-yellow-400'>signing up</span> or <span className="text-black">logging in</span>.
            </p>
        </div>
    );
};

export default Hero;
