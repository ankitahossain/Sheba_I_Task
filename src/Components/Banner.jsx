import React from 'react'
import { memo } from 'react'
import Button from '../Components/Button';
import image_1 from '../assets/Images/image_1.png'
import image_2 from '../assets/Images/image_2.png'
import image_3 from '../assets/Images/image_3 (2).png'
import image_4 from '../assets/Images/image_4.png'
import banner from '../assets/Images/banner (4).png'
import { IoLocationOutline, IoSearch } from "react-icons/io5";

const Banner = () => {
  return (
    <div className=" ">
      <div className="bgBanner px-4 py-2 mr-22 ml-16 rounded-lg  relative">
        {/*banner image */}
        <div>
          <img src={banner} alt="banner" className='w-full h-full object-contain rounded-xl' />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-x-10 md:gap-x-16 bg-transparent absolute top-[6%] sm:top-[10%] w-full px-2 sm:px-6">
          {/*=====================banner left part===================*/}
          <div className="w-full lg:w-1/2 pl-0 sm:pl-6 mt-10">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-[48px] lg:text-[58px] font-lato text-white_color">
              Simplify Your World<br />Achieve More
            </h1>
            <p className="mt-4 sm:mt-7 font-open-sans text-base sm:text-lg md:text-[20px] leading-[162%] text-white_color">
              Streamline tasks, manage schedules, and access smart solutions designed to simplify your life.
              Boost productivity effortlessly with a personal assistant that keeps you organized, focused, and always one step ahead.
            </p>
            <div className="flex gap-2 sm:gap-4 pt-6 sm:pt-8 flex-wrap">
              <button
                type="button"
                className="text-gray-900 bg-white font-medium rounded-lg cursor-pointer text-sm px-5 py-2.5 inline-flex items-center "
              >
                <IoLocationOutline className="me-2" />
                <span>Location</span>
              </button>
              <button
                type="button"
                className="text-gray-900 bg-white font-medium rounded-lg cursor-pointer text-sm px-5 py-2.5 inline-flex items-center "
              >
                <span className="me-10">Service Search...</span>
                <IoSearch className="bg-black text-white_color rounded p-1" />
              </button>
            </div>
            <div className="pt-4 sm:pt-6 flex gap-2 sm:gap-3 flex-wrap mt-2 sm:mt-4">
              <span className="font-inter font-medium text-xs sm:text-[16px] text-white_color ">Popular Searches :
                <button className="bg-black_color text-white_color font-open-sans text-xs sm:text-[16px] py-1 sm:py-2 px-3 sm:px-5 rounded-3xl btn ml-2 sm:ml-4">
                  Shifting
                </button>
              </span>
              <button className="bg-black_color text-white_color font-open-sans text-xs sm:text-[16px] py-1 sm:py-2 px-4 sm:px-7 rounded-3xl btn">
                Beauty
              </button>
              <button className="bg-black_color text-white_color font-open-sans text-xs sm:text-[16px] py-1 sm:py-2 px-5 sm:px-10 rounded-3xl btn">
                Home Service
              </button>
            </div>
          </div>
          {/*=================banner right part==================== */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 sm:gap-4 self-start mb-8 sm:mb-12 md:mb-20">
            <div className="flex flex-col gap-2 sm:gap-4">
              <div className="w-full h-[80px] sm:h-[140px] md:h-[180px] lg:h-[200px] xl:h-[230px] overflow-hidden rounded">
                <img src={image_1} className="w-full h-full object-cover" alt="Service 1" />
              </div>
              <div className="w-full h-[100px] sm:h-[170px] md:h-[220px] lg:h-[240px] xl:h-[270px] overflow-hidden rounded">
                <img src={image_3} className="w-full h-full object-cover" alt="Service 3" />
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 mt-4 sm:mt-10">
              <div className="w-full h-[100px] sm:h-[170px] md:h-[220px] lg:h-[240px] xl:h-[270px] overflow-hidden rounded">
                <img src={image_2} className="w-full h-full object-cover" alt="Service 2" />
              </div>
              <div className="w-full h-[80px] sm:h-[140px] md:h-[180px] lg:h-[200px] xl:h-[230px] overflow-hidden rounded">
                <img src={image_4} className="w-full h-full object-cover" alt="Service 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Banner);
