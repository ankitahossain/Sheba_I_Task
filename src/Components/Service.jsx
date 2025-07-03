import React from 'react'
import { memo } from 'react'
import service from '../assets/Images/service.png'
import service_img from '../assets/Images/service_img.png'

const Service = () => {
  return (
    <div className="px-2 sm:px-3 py-6 bg-white_color">
      <div className="px-1 sm:px-4 py-6 relative">
        <div className="bg-bg_color relative rounded-2xl overflow-hidden">
          <img src={service_img} alt="service_img" className="w-full h-full object-contain" />

          {/*  Left Content Wrapper  */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4 absolute top-0 left-0 w-full h-full px-2 sm:px-0 py-4 md:py-0">
            
            <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-[46%] md:ml-[6%] bg-white/80 md:bg-transparent rounded-lg p-3 md:p-0">
              <h1 className="font-lato font-bold text-2xl sm:text-3xl md:text-[48px] text-black_color text-center md:text-left">
                Get your service from our app
              </h1>
              <p className="font-font-open-sans font-regular text-[15px] sm:text-[16px] text-font_color text-center md:text-left">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center mt-4">
                {/* App Store */}
                <button type="button" className="flex items-center px-4 py-2 bg-black hover:bg-[#222] text-white rounded-lg transition duration-200 w-44 sm:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" className="inline mr-2" viewBox="0 0 22.773 22.773">
                    <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] font-medium leading-none">Download on the</p>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </button>

                {/* Google Play */}
                <button type="button" className="flex items-center px-4 py-2 bg-black hover:bg-[#222] text-white rounded-lg transition duration-200 w-44 sm:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" className="mr-2" viewBox="0 0 64 64">
                    <path fill="#57cef3" d="M7 3v58l33-29z" />
                    <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" />
                    <path fill="#48ff48" d="M36 32 7 3h4l34 20z" />
                    <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" />
                    <path fill="#f33" d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z" />
                    <path fill="#0779e4" d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z" />
                    <path fill="#314a52" d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] font-medium leading-none">Get it on</p>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full max-w-[320px] sm:max-w-[370.78px] h-[220px] sm:h-[320px] md:h-[495px] flex justify-center items-center mx-auto md:mx-0 ">
              <img src={service} alt="service" className="w-full h-full object-contain md:ml-[-5%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Service)
