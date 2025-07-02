import React from 'react'
import {memo} from 'react'
import recom_1 from '../assets/Images/recom_1.png'
import recom_2 from '../assets/Images/recom_2.png'
import recom_3 from '../assets/Images/recom_3.png'
import recom_4 from '../assets/Images/recom_4.png'
const Recommended = () => {
  return (
    <div className='px-4 py-6 bg-white mt-10'>
        <div className='px-3 py-6 flex flex-col items-center'>
            <p className="font-lato font-bold text-[42px] text-black_color mb-6">
          Recommended
        </p>
        <div className='flex justify-between items-center gap-10 '>
            <img src={recom_1} alt="recom_1" className='w-full h-full object-contain rounded-lg shadow-md hover:shadow-xl cursor-pointer hover:border-2 hover:border-purple-400 transition-all duration-300'/>
             <img src={recom_2} alt="recom_2" className='w-full h-full object-contain rounded-lg shadow-md hover:shadow-xl cursor-pointer hover:border-2 hover:border-purple-400 transition-all duration-300'/>
             <img src={recom_3} alt="recom_3" className='w-full h-full object-contain rounded-lg shadow-md hover:shadow-xl cursor-pointer hover:border-2 hover:border-purple-400 transition-all duration-300'/>
             <img src={recom_4} alt="recom_4" className='w-full h-full object-contain rounded-lg shadow-md hover:shadow-xl cursor-pointer hover:border-2 hover:border-purple-400 transition-all duration-300'/>
        
        </div>

        </div>
      
    </div>
  )
}

export default memo(Recommended)
