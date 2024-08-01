import React from 'react';
import Image from 'next/image';

const Features = () => {
    return (
        <div className="px-4 py-16 mx-auto max-w-5xl">
            <h2 className='text-center roboto-black text-3xl md:text-4xl my-8 md:my-12'>
                Features that we have on our website
            </h2>

            {/* first card */}
            <div className="flex flex-col md:flex-row border-8 rounded-3xl border-black">
                <div className="md:w-2/5 py-6 px-4 md:py-11 md:px-6 flex items-center justify-center">
                    <div className="relative w-full">
                        <label htmlFor="default-search" className="sr-only">Search</label>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                        />
                        <button
                            type="submit"
                            className="absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-4 p-6 md:w-3/5 border-t-8 md:border-t-0 md:border-l-8 border-gray-300 dark:border-gray-600">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl roboto-bold">
                            The ability to search for the historical price of almost all products on Amazon
                        </h2>
                    </div>
                </div>
            </div>

            {/* second card */}

            <div className="mt-10 flex flex-col md:flex-row border-8 rounded-3xl border-black">
                <div className="flex flex-col justify-center gap-4 p-6 md:w-3/5 border-t-8 md:border-t-0 md:border-r-8 border-gray-300 dark:border-gray-600">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl roboto-bold">
                            keep tracking the prices of your favorite  product and have detailde prices
                        </h2>
                    </div>
                </div>
                <Image src="/graph.png" alt='graph' width={350} height={100} objectFit="cover" className="rounded-3xl" />
            </div>
            {/* therd card */}

            <div className="mt-10 flex flex-col md:flex-row border-8 rounded-3xl border-black">
                <Image src="/saving.jpeg" alt='saving' width={350} height={100} objectFit="cover" className="rounded-3xl" />
                <div className="flex flex-col justify-center gap-4 p-6 md:w-3/5 border-t-8 md:border-t-0 md:border-l-8 border-gray-300 dark:border-gray-600">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl roboto-bold">
                        save a lot of money by keeping an eay on the the prices of the products 
                        </h2>
                    </div>
                </div>
            </div>
            {/* forth card */}

            <div className="mt-10 flex flex-col md:flex-row border-8 rounded-3xl border-black">
                <div className="flex flex-col justify-center gap-4 p-6 md:w-3/5 border-t-8 md:border-t-0 md:border-r-8 border-gray-300 dark:border-gray-600">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl roboto-bold">
                        get notified when ever a price drop off and hunt the best deals  
                        </h2>
                    </div>
                </div>
                <Image src="/notification.jpg" alt='notification' width={350} height={100} objectFit="cover" className="rounded-3xl" />
            </div>
            
        </div>
    );
};

export default Features;
