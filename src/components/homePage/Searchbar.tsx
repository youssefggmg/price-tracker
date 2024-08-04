import React from 'react'

const Searchbar = () => {
    return (
        <div>
            <h2 className='text-center roboto-black text-3xl md:text-4xl my-8 md:my-12'>
                search for the product
            </h2>
            <div className="flex items-center w-full bg-[#494A5A] roboto-bol p-4 max-w-[70%] h-[20vh] mx-auto rounded-3xl">
                <div className="relative flex-1 mr-5">
                    <input
                        className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-l-md bg-white text-[#494A5A] placeholder:text-[#494A5A] focus:outline-none focus:ring-1 focus:ring-[#3504D7]"
                        type="search"
                        placeholder="the product url..."
                    />  
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 py-2 rounded-r-md bg-[#3504D7] text-white hover:bg-[#3504D7]/90 focus:outline-none focus:ring-1 focus:ring-[#3504D7] px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6 mr-2"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Searchbar
