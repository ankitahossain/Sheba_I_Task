import React from 'react'
import { memo } from 'react'
import service from '../assets/Images/service.png'
import service_img from '../assets/Images/service_img.png'
const Service = () => {
    return (
        <div className='px-3 py-6 bg-white_color'>
            <div className='px-4 py-6  relative'>
            
                <div className='bg-bg_color'>
                    <img src={service_img} alt="service_img" className='w-full h-full object-contain ' />
                    {/* Service Card */}

                    <div className='flex justify-between items-center gap-4 absolute top-[1%]'>
                        {/* Left Service Card  */}
                        <div className='flex flex-col items-center gap-3 w-[46%] ml-[6%]'>
                            <h1 className="font-lato font-bold text-[48px] text-black_color">Get your service from our app</h1>
                            <p className='font-font-open-sans font-regular text-[16px] text-font_color'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
            <div className='flex justify-between items-center mr-[36%] gap-2 mt-6'>
                               
                           <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2 ">
<svg class="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
<div className="flex flex-col">
    <span className='font-roboto font-regular text-[10px] text-white_color'>Download on the</span>
    <span className='font-roboto font-regular text-[20px] text-white_color'>App Store</span>
  </div>
</button>
<button
  type="button"
  className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
>
  <svg xmlns="http://www.w3.org/2000/svg" 
       viewBox="0 0 16 16" 
       fill="currentColor" 
       className="w-5 h-5 me-2 -ms-1">
    <path d="M14.222 7.655 3.234.204a.678.678 0 0 0-.706-.02.678.678 0 0 0-.347.592v14.448c0 .243.132.466.347.592a.678.678 0 0 0 .706-.02l10.988-7.451a.678.678 0 0 0 0-1.19zM2.5 14.087V1.913L10.972 8 2.5 14.087z"/>
  </svg>
  <div className="flex flex-col">
    <span className="font-roboto font-regular text-[10px] text-white_color">
      GET IT ON
    </span>
    <span className="font-roboto font-regular text-[20px] text-white_color">
      Google Play
    </span>
  </div>
</button>



            </div>
                        </div>
                         {/* Right Image Card  */}
                            <div className='w-[370.78px] h-[495px] '>
                                <img src={service} alt="service" className='w-full h-full object-contain ml-[60%]' />

                            </div>
                    </div>
                    

                </div>
            </div>

        </div>
    )
}

export default memo(Service)
