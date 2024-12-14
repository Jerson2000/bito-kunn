'use client'
import Image from "next/image";
import { useState } from "react";

/* eslint-disable @next/next/no-html-link-for-pages */
const Header = () => { 
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };


    return (

        <nav className="relative bg-white shadow dark:bg-[#272727]">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="/" className="flex items-center">
                        <Image
                            src="/brand2.jpg"
                            width={50}
                            height={50}
                            alt="Picture of the author"
                            style={{
                                borderRadius: '50%',
                                border: '1px solid #fff',
                                width:"auto",
                                height:"auto"
                            }}
                            priority={true}
                        />
                        <span className="ml-2 font-medium md:text-2xl">Bito-kunn</span>
                    </a>

                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 dark:text-gray-50 dark:hover:text-gray-100 dark:focus:text-gray-100"
                            aria-label="toggle menu"
                            onClick={toggleMenu}
                        >
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        } md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center dark:bg-[#272727] shadow-white`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6">
                        {["Home", "Anime", "Manga",].map((item) => (
                            <a
                                key={item}
                                className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0 dark:text-gray-50 dark:hover:text-blue-400"
                                href={`${item === 'Home' ? '/' : '/' + item.toLowerCase()}`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Header;