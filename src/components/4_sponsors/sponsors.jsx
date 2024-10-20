import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import TataIMG from "./images/tata.png";
import BmwIMG from "./images/bmw.png";
import BrandHouseIMG from "./images/brandhouse.png";
import SmaaashIMG from "./images/smaaash.png";
import ChennaiShoppingMallIMG from "./images/chennaiShoppingMall.png";
import KpIMG from "./images/kp.png";
import "./style.css";

const SponsorsSection = () => {
  return (
    <section className="flex flex-col items-center pt-[15rem] w-full">
      <div className="mb-16 text-center">
        {/* Center the heading */}
        <h1 className="font-fluxbox text-[7rem] font-extrabold mb-0 leading-[1.1]">
          <span className="bg-gradient-to-r from-[#F50062] to-[#b700ba] inline-block text-transparent bg-clip-text text-8xl">
            POWERED
          </span>{" "}
          <span className="bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text text-8xl">
            BY
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
        <SwiperSlide className="flex items-center justify-center">
          <img src={TataIMG} alt="Sponsor 1" className="max-w-[150px] w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={BmwIMG} alt="Sponsor 2" className="max-w-[150px] w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={BrandHouseIMG} alt="Sponsor 3" className="max-w-[150px] w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={SmaaashIMG} alt="Sponsor 4" className="max-w-[150px] w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={ChennaiShoppingMallIMG} alt="Sponsor 5" className="max-w-[150px] w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={KpIMG} alt="Sponsor 6" className="max-w-[150px] w-full object-contain" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SponsorsSection;
