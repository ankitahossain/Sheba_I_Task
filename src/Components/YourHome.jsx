import React, { memo } from 'react';
import img_1 from '../assets/Images/img_1 (2).png';
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from '../Components/Button';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="nextArrow absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowForward size={32} className="text-white bg-hover_color rounded-full p-2" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="prevArrow absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowBack size={32} className="text-white bg-hover_color rounded-full p-2" />
    </div>
  );
}

const YourHome = () => {
  const items = [
    { id: 1, img: img_1 },
    { id: 2, img: img_1 },
    { id: 3, img: img_1 },
    { id: 4, img: img_1 },
    { id: 5, img: img_1 },
    { id: 6, img: img_1 }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // large laptops
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024, // small laptops/tablets
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="px-4 py-6 bg-white mt-10">
      <div className="px-3 py-6 flex flex-col items-center">
        <p className="font-lato font-bold text-[42px] text-black_color mb-6 text-center">
          For Your Home
        </p>
        <div className="relative w-full max-w-[1400px] mx-auto">
          <Slider {...settings}>
            {items.map((data) => (
              <div key={data.id} className="relative px-2">
                <img
                  src={data.img}
                  alt="home"
                  className="w-full h-[290px] object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-14">
                  <Button
                    btnContent="Plumbing & Sanitary Services"
                    btnDesign="bg-gray_color text-white text-[14px] px-4 py-2 rounded"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default memo(YourHome);
