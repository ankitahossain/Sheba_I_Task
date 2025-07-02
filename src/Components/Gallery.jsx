import React, { useState, useEffect, memo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img_1 from "../assets/Images/gallery_1.png"
import img_2 from "../assets/Images/gallery_2.png";
import img_3 from "../assets/Images/gallery_3.png";
import img_4 from "../assets/Images/gallery_4.png";
import img_5 from "../assets/Images/gallery_5.png";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const gallery = [
    { id: 1, image: img_1, title: "Moving Service 1" },
    { id: 2, image: img_2, title: "Moving Service 2" },
    { id: 3, image: img_3, title: "Moving Service 3" },
    { id: 4, image: img_4, title: "Moving Service 4" },
    { id: 5, image: img_5, title: "Moving Service 5" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [gallery.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const getImageStyle = (index) => {
    // Responsive breakpoints
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    const base = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      borderRadius: isMobile ? "12px" : "24px",
      boxShadow: isMobile ? "0 4px 16px rgba(0,0,0,0.10)" : "0 8px 32px rgba(0,0,0,0.12)",
      cursor: index !== activeIndex ? "pointer" : "default",
      overflow: "hidden",
      zIndex: 1,
      opacity: 1,
    };

    const total = gallery.length;
    let rel = index - activeIndex;
    if (rel < -Math.floor(total / 2)) rel += total;
    if (rel > Math.floor(total / 2)) rel -= total;

    // Mobile layout: stack images vertically, only show active
    if (isMobile) {
      if (rel === 0) {
        return {
          ...base,
          width: "90vw",
          maxWidth: "320px",
          height: "220px",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1)",
          zIndex: 3,
          opacity: 1,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        };
      }
      return { display: "none" };
    }

    // Tablet layout: smaller images, less overlap
    if (isTablet) {
      if (rel === -1 || rel === 4) {
        return {
          ...base,
          width: "120px",
          height: "180px",
          left: "5%",
          transform: "translateY(-50%) scale(0.85)",
          zIndex: 2,
          opacity: 0.7,
        };
      }
      if (rel === 0) {
        return {
          ...base,
          width: "200px",
          height: "280px",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1)",
          zIndex: 3,
          opacity: 1,
          boxShadow: "0 12px 48px rgba(0,0,0,0.18)",
        };
      }
      if (rel === 1 || rel === -4) {
        return {
          ...base,
          width: "120px",
          height: "180px",
          right: "5%",
          left: "auto",
          transform: "translateY(-50%) scale(0.85)",
          zIndex: 2,
          opacity: 0.7,
        };
      }
      return { display: "none" };
    }

    // Desktop (original logic)
    if (rel === -2 || rel === 3) {
      return {
        ...base,
        width: "160px",
        height: "240px",
        left: "-40px",
        transform: "translateY(-50%) scale(0.8)",
        opacity: 0.6,
        clipPath: "inset(0 40% 0 0)",
      };
    }
    if (rel === -1 || rel === 4) {
      return {
        ...base,
        width: "220px",
        height: "320px",
        left: "15%",
        transform: "translateY(-50%) scale(0.9)",
        zIndex: 2,
        opacity: 0.8,
      };
    }
    if (rel === 0) {
      return {
        ...base,
        width: "300px",
        height: "420px",
        left: "50%",
        transform: "translate(-50%, -50%) scale(1)",
        zIndex: 3,
        opacity: 1,
        boxShadow: "0 12px 48px rgba(0,0,0,0.2)",
      };
    }
    if (rel === 1 || rel === -4) {
      return {
        ...base,
        width: "220px",
        height: "320px",
        right: "15%",
        left: "auto",
        transform: "translateY(-50%) scale(0.9)",
        zIndex: 2,
        opacity: 0.8,
      };
    }
    if (rel === 2 || rel === -3) {
      return {
        ...base,
        width: "160px",
        height: "240px",
        right: "-40px",
        left: "auto",
        transform: "translateY(-50%) scale(0.8)",
        opacity: 0.6,
        clipPath: "inset(0 0 0 40%)",
      };
    }
    return { display: "none" };
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-10 sm:py-16">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">Gallery</h2>
          <p className="text-sm sm:text-lg text-font_color max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
            Discover tailored categories designed to simplify your search, explore diverse options,
            and find exactly what you need effortlessly
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative h-[240px] sm:h-[340px] md:h-[460px] overflow-hidden">
            {gallery.map((item, index) => (
              <div
                key={item.id}
                style={getImageStyle(index)}
                onClick={() => setActiveIndex(index)}
                className="group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable={false}
                />
              </div>
            ))}

            {/* Navigation Buttons - hide on mobile */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white p-3 sm:p-4 rounded-full shadow-xl hover:scale-110 transition"
              aria-label="Previous"
            >
              <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white p-3 sm:p-4 rounded-full shadow-xl hover:scale-110 transition"
              aria-label="Next"
            ><FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === activeIndex
                  ? "bg-teal-500 scale-110 sm:scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                  }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-4 sm:mt-6 text-gray-500 font-medium text-sm sm:text-base">
            {activeIndex + 1} / {gallery.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Gallery);
