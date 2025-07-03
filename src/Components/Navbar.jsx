import React from 'react'
import logo from '../assets/Images/logo.svg'
import { memo } from 'react'
import Button from './Button'

const Navbar = () => {
    const menuitem = [
        { id: 1, name: "Home" },
        { id: 2, name: "About Us" },
        { id: 3, name: "All Service" },
        { id: 4, name: "All Page" },
    ];

    return (
        <nav className="py-3 sm:py-4 bg-white w-full">
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-center px-3 sm:px-7 md:pl-20 md:pr-20 py-2">
                <picture>
                    <img src={logo} alt="logo" className="h-10 sm:h-12 w-auto" />
                </picture>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-x-4 lg:gap-x-[32px]">
                    {menuitem.map((item) => (
                        <li key={item.id}>
                            <a href="#" className="menu font-inter font-semibold text-[16px] lg:text-[20px] capitalize">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

               
                <div className="md:hidden ml-auto">
                    <button type="button" className="text-black focus:outline-none" aria-label="Open menu">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className="hidden md:block">
                    <Button
                        btnContent="Log in"
                        btnDesign="bg-black font-bold font-nunito text-white text-[16px] lg:text-[20px] px-5 lg:px-7 py-2 rounded-lg btn"
                    />
                </div>
            </div>
           
        </nav>
    );
};

export default memo(Navbar);
