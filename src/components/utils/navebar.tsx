"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
    { href: "/about", label: "About" }
];

function NavBar() {
    const [navbar, setNavbar] = useState<boolean>(false);

    return (
        <div>
            <nav className="w-full bg-black  top-0 left-0 right-0 z-10 items-center">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        {/* LOGO */}
                        <Link href="/">
                            <Image src="/logo-no-background.png" width={150} height={50} alt="Logo" />
                        </Link>
                        {/* HAMBURGER BUTTON FOR MOBILE */}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <Image src="/close.svg" width={30} height={30} alt="Close Menu" />
                                ) : (
                                    <Image
                                        src="/hamburger-menu.svg"
                                        width={30}
                                        height={30}
                                        alt="Open Menu"
                                        className="focus:border-none active:border-none"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
                        <ul className="h-screen md:h-auto items-center justify-center md:flex flex-col md:flex-row">
                            {navItems.map((item) => (
                                <li key={item.href} className="pb-6 text-xl mt-4 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                                    <Link href={item.href} onClick={() => setNavbar(false)}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            {/* Login and Sign Up Buttons for Mobile */}
                            <li className="md:hidden flex flex-col space-y-4">
                                <Link href="/login">
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Login
                                    </button>
                                </Link>
                                <Link href="/signup">
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Sign Up
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Login and Sign Up Buttons for Desktop */}
                    <div className="hidden md:flex space-x-4 mt-4 md:mt-0 md:order-2">
                        <Link href="/login">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Login
                            </button>
                        </Link>
                        <Link href="/signup">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
