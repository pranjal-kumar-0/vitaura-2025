import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import BMW from "./images/bmw.png";
import JSP from "./images/jsp50logo.png";
import BrandHouseIMG from "./images/brandhouse.png";
import SmaaashIMG from "./images/smaaash.png";
import ChennaiShoppingMallIMG from "./images/chennaiShoppingMall.png";
import KpIMG from "./images/kp.png";
import Asus from "./images/asus-logo-white.png"
import "./style.css";

const SponsorsSection = () => {
  return (
    <section className="flex flex-col items-center pt-[15rem] w-full">
      <div className="mb-16 text-center">
        {/* Center the heading */}
        <h1 className="font-fluxbox font-extrabold mb-0">
          <span className="bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent bg-clip-text text-3xl lg:text-8xl md:text-5xl ">
            POWERED
          </span>
          <span className="text-3xl lg:text-8xl md:text-5xl"> </span>
          <span className="bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text text-3xl lg:text-8xl md:text-5xl "> BY
          </span>
        </h1>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={7000}
        loopedSlides={5}
        centeredSlides={false}
        className="w-full"
        allowTouchMove={false}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
        }}
      >
        {/* Sponsor Logos */}
        <SwiperSlide className="flex items-center justify-center h-[150px]">
          <img
            src={BMW}
            alt="Sponsor 1"
            className="max-h-[150px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px]">
          <img
            src={JSP}
            alt="Sponsor 2"
            className="max-h-[150px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px]">
          <img
            src={BrandHouseIMG}
            alt="Sponsor 3"
            className="max-h-[150px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px]">
          <img
            src={SmaaashIMG}
            alt="Sponsor 4"
            className="max-h-[150px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px]">
          <img
            src={ChennaiShoppingMallIMG}
            alt="Sponsor 5"
            className="max-h-[150px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px]">
          <img
            src={KpIMG}
            alt="Sponsor 6"
            className="max-h-[150px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[150px]">
          <img
            src={Asus}
            alt="Sponsor 7"
            className="max-h-[150px] object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SponsorsSection;
