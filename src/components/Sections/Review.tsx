"use client";

import { Button } from "@telegram-apps/telegram-ui";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Icon from "@/helpers/Icon";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import uaFlag from "@/img/flags/ua.svg";
import facebook from "@/img/social/facebook.svg";
import { GoBell } from "react-icons/go";

const Review = () => {
  const [level, setLevel] = useState<string>("1");
  const [status, setStatus] = useState<string>("“Нулевый”");
  const [discount, setDiscount] = useState<string>("1");
  const [nextLevel, setNextLevel] = useState<string>("154");

  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(
    null
  );

  const t = useTranslations("Review");

  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        <Button
          className="text-[rgba(0,0,0,0.80)] border-[1px] border-solid border-[#0000000D]"
          before={<Icon name="icon-hide" width={19.5} height={15} />}
          mode="outline"
          size="s"
        >
          {t("hideBtn")}
        </Button>
        <Button
          className="bg-[rgba(0,122,255,0.03)]  text-accentText"
          mode="bezeled"
          size="s"
        >
          {t("viewAll")}
        </Button>
      </div>
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
        onSwiper={(swiper: SwiperInstance) => setSwiperInstance(swiper)}
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
      <Button className="w-[100%]" mode="filled" size="s">
        {t("makeReview")}
      </Button>
    </div>
  );
};

export default Review;
