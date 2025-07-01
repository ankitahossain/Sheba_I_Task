import React from 'react'
import { memo } from 'react'
import quotes from '../assets/Images/Quotes.svg'
import client_1 from '../assets/Images/client_1.png'
import client_2 from '../assets/Images/client_2.png'

const Feedback = () => {
  return (
    <div className='px-3 py-6'>
      {/* Header Section */}
      <div className='px-4 py-6 flex flex-col items-center gap-4'>
        <p className='font-lato font-bold text-4xl text-black_color'>
          CLIENT FEEDBACK'S
        </p>
        <p className="font-open-sans text-center text-base text-font_color max-w-[700px] mx-auto">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.
        </p>
        {/* Feedback Cards Section */}
        <div className='flex justify-between items-center gap-x-18 mt-12'>

          <div className='w-[250px] flex relative opacity-10'>
            <p className='font-inter text-[16px] text-font_color font-regular mr-8'>
              Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
            </p>
            <img src={quotes} alt="quotes" className='object-contain absolute top-[-16%]  right-0' />
          </div>

          {/* Main Feedback Card */}
          <div className='bg-white max-w-[754px] rounded-xl h-[326px] flex justify-between items-center gap-4 shadow px-6 py-4'>
            <div className='w-[250px] h-[250px]'>
              <img src={client_2} alt="client_2" className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col items-start gap-4 relative w-[420px]'>
              <img src={quotes} alt="quotes" className='object-contain absolute right-0 top-[-18%]' />
              <p className='font-open-sans text-[16px] text-font_color'>
                Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.
              </p>
              <h3 className='font-inter font-bold text-[16px] text-black_color'>Kyle Merwin</h3>
              <h1 className='font-inter text-[14px] text-font_color'>CO-owner</h1>
            </div>
          </div>


          {/* Right Decoration Image */}
          <div>
            <img src={client_1} alt='client_1' className="h-[250px] w-[220px] object-contain opacity-10" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default memo(Feedback)
