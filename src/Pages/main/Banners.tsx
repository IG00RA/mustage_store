"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banners = () => {
  return (
    <div>
      <Swiper
        spaceBetween={8}
        slidesPerView={1}
        loop={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[Pagination]}
        style={{
          paddingBottom: "48px",
          position: "relative",
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index} style={{ width: "100%" }}>
            <div
              style={{
                borderRadius: "16px",
                background: "#B5B5B5",
                width: "100%",
                height: "161px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination custom-dots"></div>
      </Swiper>
    </div>
  );
};

export default Banners;
