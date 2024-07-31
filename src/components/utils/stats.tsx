import React from 'react';

const statsData = [
    { value: '250K', label: 'Users' },
    { value: '100K', label: 'Product' },
    { value: '250', label: 'weekly new users' }
];


const Stats = () => {
    return (
        <>
            <h2>our stats</h2>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center ${index < statsData.length - 1 ? 'md:border-r' : ''}`}
                        >
                            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                                {stat.value}
                            </h6>
                            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Stats;
