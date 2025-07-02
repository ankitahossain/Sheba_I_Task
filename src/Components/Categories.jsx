import React from 'react';
import { memo } from 'react';
import img_1 from '../assets/Images/img_1.png';
import img_2 from '../assets/Images/img_2.png';
import img_3 from '../assets/Images/img_3.png';
import img_4 from '../assets/Images/img_4.png';
import img_5 from '../assets/Images/img_5.png';
import img_6 from '../assets/Images/img_6.png';
import img_7 from '../assets/Images/img_7.png';
import img_8 from '../assets/Images/img_8.png';
import img_9 from '../assets/Images/img_9.png';
import img_10 from '../assets/Images/img_10.png';
import img_11 from '../assets/Images/img_11.png';
import img_12 from '../assets/Images/img_12.png';
import Button from './Button';

const Categories = () => {
    const category = [
        { id: 1, image: img_1 },
        { id: 2, image: img_2 },
        { id: 3, image: img_3 },
        { id: 4, image: img_4 },
        { id: 5, image: img_5 },
        { id: 6, image: img_6 },
        { id: 7, image: img_7 },
        { id: 8, image: img_8 },
        { id: 9, image: img_9 },
        { id: 10, image: img_10 },
        { id: 11, image: img_11 },
        { id: 12, image: img_12 },
    ];

    return (
        <div className="px-2 sm:px-4 py-8 bg-white mt-17">
            <div className="max-w-6xl mx-auto text-center space-y-4">
                <p className="font-lato font-bold text-2xl sm:text-3xl md:text-4xl text-black">
                    Explore Our Categories
                </p>
                <p className="font-open-sans text-sm sm:text-base md:text-lg text-font_color max-w-2xl mx-auto">
                    Discover tailored categories designed to simplify your search,
                    explore diverse options, and find exactly what you need effortlessly.
                </p>
            </div>

            <div
                className="mt-8 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto"
            >
                {category.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-center items-center rounded-lg shadow-md hover:shadow-xl cursor-pointer hover:border-2 hover:border-purple-400 transition-all duration-300 bg-white min-h-[80px] sm:min-h-[100px]"
                    >
                        <img
                            src={item.image}
                            alt={`Category ${item.id}`}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <Button
                    btnContent="View More"
                    btnDesign="bg-black font-bold font-nunito text-white text-base sm:text-lg md:text-[20px] px-6 sm:px-9 py-2 rounded-lg btn"
                />
            </div>
        </div>
    );
};

export default memo(Categories);
