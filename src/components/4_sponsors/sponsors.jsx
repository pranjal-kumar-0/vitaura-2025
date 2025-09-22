import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import BrandHouseIMG from "./images/brandhouse.png";
import SmaaashIMG from "./images/smaaash.png";
import KpIMG from "./images/kp.png";
import Asus from "./images/asus-logo-white.png";
import "./style.css";
import Metro from "./images/metro.jpg"
import IRG from "./images/i_r_g.png"

const SponsorsSection = () => {
  return (
    <section className="flex flex-col items-center pt-[15rem] w-full">
      <div className="mb-16 text-center">
        <h1 className="font-fluxbox font-extrabold mb-0">
          <span className="bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent bg-clip-text text-3xl lg:text-8xl md:text-5xl ">
            POWERED
          </span>
          <span className="text-3xl lg:text-8xl md:text-5xl"> </span>
          <span className="bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text text-3xl lg:text-8xl md:text-5xl ">
            BY
          </span>
        </h1>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{
          delay: 0, // No delay between slides
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={3000} // Speed of the transition
        centeredSlides={false}
        className="w-full"
        allowTouchMove={false}
      >
        {/* Sponsor Logos */}
        <SwiperSlide className="flex items-center justify-center h-[150px] min-w-[33.33%]">
          <img
            src={BrandHouseIMG}
            alt="Brand House"
            className="max-h-[150px] object-contain transition-transform duration-300 hover:scale-110"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px] min-w-[33.33%]">
          <img
            src={SmaaashIMG}
            alt="Smaaash"
            className="max-h-[150px] object-contain transition-transform duration-300 hover:scale-110"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px] min-w-[33.33%]">
          <img
            src={KpIMG}
            alt="KP"
            className="max-h-[150px] object-contain transition-transform duration-300 hover:scale-110"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px] min-w-[33.33%]">
          <img
            src={Asus}
            alt="Asus"
            className="max-h-[150px] object-contain transition-transform duration-300 hover:scale-110"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px] min-w-[33.33%]">
          <img
            src={IRG}
            alt="IRG"
            className="max-h-[150px] object-contain transition-transform duration-300 hover:scale-110"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px] min-w-[33.33%]">
          <img
            src={Metro}
            alt="Metro"
            className="max-h-[150px] object-contain transition-transform duration-300 hover:scale-110"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SponsorsSection;
