import React from 'react';

const Plans = () => {
    return (
        <>
            <h2 className='text-center roboto-black text-3xl md:text-4xl my-8 md:my-12'>
                Our Plans
            </h2>
            <div className="flex flex-wrap justify-around px-6 md:px-52">
                {/* Plan 1 */}
                <div className="bg-card text-card-foreground shadow-sm h-[400px] w-[300px] rounded-3xl overflow-hidden border-4 border-black" data-v0-t="card">
                    <div className="h-[20%] bg-blue-500 border-b-4 border-black flex items-center justify-center">
                        <h3 className="text-primary-foreground font-semibold">Free</h3>
                    </div>
                    <div className="h-[80%] bg-blue-600 p-6 flex flex-col justify-center">
                        <ul className="text-center">
                        <li>out of charge</li>
                        <li>only 3 items </li>
                        </ul>
                    </div>
                </div>
                {/* Plan 2 */}
                <div className="bg-card text-card-foreground shadow-sm h-[400px] w-[300px] rounded-3xl overflow-hidden border-4 border-black" data-v0-t="card">
                    <div className="h-[20%] bg-blue-500 border-b-4 border-black flex items-center justify-center">
                        <h3 className="text-primary-foreground font-semibold">PREMIEM</h3>
                    </div>
                    <div className="h-[80%] bg-blue-600 p-6 flex flex-col justify-center">
                        <ul className="text-center">
                            <li>10$  monthly</li>
                            <li>unlimited </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plans;
