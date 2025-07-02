import React from 'react'
import logo_1 from '../assets/Images/logo_1.svg'
import {memo} from 'react'

const Footer = () => {
    const item = [
        { id: 1, name: "Overview" },
        { id: 2, name: "Features" },
        { id: 3, name: "Pricing" },
        { id: 4, name: "Careers" },
        { id: 5, name: "Help" },
        { id: 6, name: "Privacy" },
    ];

    return (
        <div className='px-3 py-6 bg-banner_color'>
            <div className='px-4 py-6'>

                <div className='flex flex-col items-start gap-6 ml-[4%]'>
                    <div>
                        <img src={logo_1} alt="logo_1" className='h-12 w-auto' />
                    </div>
                    <p className='font-font-open-sans font-regular text-[16px] text-white_color w-[320px]'>
                        Design amazing digital experiences that create more happy in the world.
                    </p>

                    <ul className='flex items-center gap-x-[32px]'>
                        {item.map((item) => (
                            <li key={item.id}>
                                <a href="#" className='footer_item font-inter font-semibold text-[20px] capitalize'>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Shorter horizontal line */}
                    <div className='w-[96%] h-[2px] bg-white'></div>
                </div>

                {/* footer bottom part */}
                <div className='flex justify-between items-center mt-6 ml-[4%] mr-[4%]'>

                    <p className='text-white_color font-normal'>
                        © 2024 AI DETECT. <span className="font-main">All rights reserved.</span>
                    </p>

                    <div className="flex">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="javascript:void(0)" className="block hover:opacity-80 transition-opacity" aria-label="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-white w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="block hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-6 h-6" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="block hover:opacity-80 transition-opacity" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-6 h-6" viewBox="0 0 49.652 49.652">
                                        <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="block hover:opacity-80 transition-opacity" aria-label="GitHub">
                                    <svg className="fill-white w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default memo(Footer);
