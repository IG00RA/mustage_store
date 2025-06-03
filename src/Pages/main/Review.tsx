"use client";

import { Button } from "@telegram-apps/telegram-ui";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Icon from "@/helpers/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Review = () => {
  const t = useTranslations("Review");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleContentVisibility = () => {
    setIsContentVisible((prev) => !prev);
  };

  return (
    <section
      className=" pb-2 mb-6"
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
      }}
    >
      <div className="flex justify-between items-center pb-4 max-w-container mx-auto pl-3">
        <Button
          className="text-[rgba(0,0,0,0.80)] border-[1px] border-solid border-[#0000000D] transition-all duration-300"
          before={
            <Icon
              name={isContentVisible ? "icon-hide" : "icon-show"}
              width={19.5}
              height={15}
            />
          }
          mode="outline"
          size="s"
          onClick={toggleContentVisibility}
        >
          {t(isContentVisible ? "hideBtn" : "showBtn")}
        </Button>
        <Button
          className="bg-[rgba(0,122,255,0.03)] text-accentText"
          mode="bezeled"
          size="s"
        >
          {t("viewAll")}
        </Button>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isContentVisible ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <Swiper
          spaceBetween={8}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `
                <span class="${className} w-3 h-3 rounded-full transition ${
                currentSlide === index
                  ? "bg-accentText w-4 h-4 mt-[48px]"
                  : "bg-gray-300 mt-[50px]"
              }"></span>
              `;
            },
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          modules={[Pagination]}
          style={{
            paddingBottom: "48px",
            position: "relative",
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index} style={{ width: "173px" }}>
              <div
                style={{
                  borderRadius: "16px",
                  background: "#B5B5B5",
                  width: "173px",
                  height: "198px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination custom-dots"></div>
        </Swiper>
        <div className="max-w-container mx-auto pb-4">
          <Button className="w-[100%]" mode="filled" size="s">
            {t("makeReview")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Review;
