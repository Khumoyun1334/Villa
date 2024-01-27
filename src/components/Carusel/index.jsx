import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Carusel() {
  return (
    <>
      <Swiper
        loop={true}
        className="swiper-my "
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="Bag h-[100vh] py-[170px] px-[300px]">
            <div className=" bg-white border w-[18%] flex justify-center gap-[6px] p-2 px-3">
              <p className="font-semibold  text-[17px] "> Torndodo,</p>
              <span className=" text-[17px] text-[#f35525] font-semibold">
                Canada
              </span>
            </div>
            <div className="mt-7">
              <p className=" text-[55px] uppercase font-bold text-white">
                Hurry! <br /> Get the Best <br /> Villa for you
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Bag2 h-[100vh] py-[170px] px-[300px]">
            <div className=" bg-white border w-[18%] flex justify-center gap-[6px] p-2 px-3">
              <p className="font-semibold  text-[17px] "> Torndodo,</p>
              <span className=" text-[17px] text-[#f35525] font-semibold">
                Canada
              </span>
            </div>
            <div className="mt-7">
              <p className=" text-[55px] uppercase font-bold text-white">
                Hurry! <br /> Get the Best <br /> Villa for you
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Bag3 h-[100vh] py-[170px] px-[300px]">
            <div className=" bg-white border w-[18%] flex justify-center gap-[6px] p-2 px-3">
              <p className="font-semibold  text-[17px] "> Torndodo,</p>
              <span className=" text-[17px] text-[#f35525] font-semibold">
                Canada
              </span>
            </div>
            <div className="mt-7">
              <p className=" text-[55px] uppercase font-bold text-white">
                Hurry! <br /> Get the Best <br /> Villa for you
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
