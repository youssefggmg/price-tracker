/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const FeadBack = () => {
    return (
        <div className="px-4 py-16 mx-auto max-w-5xl">
            <h2 className='text-center roboto-black text-3xl md:text-4xl my-8 md:my-12'>
                Feedback
            </h2>
            <div className="flex flex-wrap justify-around px-6 ">
                <div className="bg-gray-800 px-8 py-8 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-1/2 max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                    <div className="flex flex-col items-center">
                        <div className=''>
                            <img src="https://readymadeui.com/team-2.webp" className="w-30 h-20 rounded-full object-cover" />
                            <br />
                            <p className="text-base text-center text-gray-300 font-bold uppercase ">John Doe</p>
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="text-white text-base mt-3 leading-relaxed py-8">
                            I've used this website of hundred of times and got a lot of benefits from it by tracking the products I liked and waited of the price to drop and then got it in the best time 
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 px-8 py-8 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-1/2 max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                    <div className="flex flex-col items-center">
                        <div className=''>
                            <img src="https://readymadeui.com/team-2.webp" className="w-30 h-20 rounded-full object-cover" />
                            <br />
                            <p className="text-base text-center text-gray-300 font-bold uppercase ">John Doe</p>
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="text-white text-base mt-3 leading-relaxed py-8">
                            I've used this website of hundred of times and got a lot of benefits from it by tracking the products I liked and waited of the price to drop and then got it in the best time 
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeadBack
