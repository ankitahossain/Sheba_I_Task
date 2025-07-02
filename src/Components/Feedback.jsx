import React from 'react'
import { memo } from 'react'
import quotes from '../assets/Images/Quotes.svg'
import client_1 from '../assets/Images/client_1.png'
import client_2 from '../assets/Images/client_2.png'

const Feedback = () => {
  return (
    <div className="px-2 sm:px-4 py-6">
      {/* Header Section */}
      <div className="px-2 sm:px-4 py-6 flex flex-col items-center gap-4">
        <p className="font-lato font-bold text-2xl sm:text-3xl md:text-4xl text-black_color text-center">
          CLIENT FEEDBACK'S
        </p>
        <p className="font-open-sans text-center text-sm sm:text-base text-font_color max-w-[90vw] sm:max-w-[700px] mx-auto">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.
        </p>
        {/* Feedback Cards Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-x-18 mt-8 w-full">
          {/* Left Decoration Card */}
          <div className="w-full max-w-[250px] flex relative opacity-10 mb-6 lg:mb-0">
            <p className="font-inter text-[14px] sm:text-[16px] text-font_color font-regular mr-8">
              Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
            </p>
            <img src={quotes} alt="quotes" className="object-contain absolute top-[-16%] right-0 w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          {/* Main Feedback Card */}
          <div className="bg-white w-full max-w-[754px] h-auto lg:h-[326px] flex flex-col lg:flex-row justify-between items-center gap-4 px-4 sm:px-6 py-4 rounded-lg shadow-xl border-2 border-purple-500">
            <div className="w-full max-w-[250px] h-[180px] sm:h-[220px] lg:h-[250px] mx-auto flex-shrink-0">
              <img src={client_2} alt="client_2" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex flex-col items-start gap-4 relative w-full max-w-[420px] mt-4 lg:mt-0">
              <img src={quotes} alt="quotes" className="object-contain absolute right-0 top-[-18%] w-8 h-8 sm:w-10 sm:h-10" />
              <p className="font-open-sans text-[14px] sm:text-[16px] text-font_color">
                Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.
              </p>
              <h3 className="font-inter font-bold text-[15px] sm:text-[16px] text-black_color">Kyle Merwin</h3>
              <h1 className="font-inter text-[13px] sm:text-[14px] text-font_color">CO-owner</h1>
            </div>
          </div>

          {/* Right Decoration Image */}
          <div className="w-full max-w-[220px] flex justify-center opacity-10 mt-6 lg:mt-0">
            <img src={client_1} alt='client_1' className="h-[120px] sm:h-[180px] lg:h-[250px] w-[120px] sm:w-[180px] lg:w-[220px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Feedback)
