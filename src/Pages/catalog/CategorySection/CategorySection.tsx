"use client";

import { Button } from "@telegram-apps/telegram-ui";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Icon from "@/helpers/Icon";
import Image from "next/image";
import { GoBell } from "react-icons/go";

import uaFlag from "@/img/flags/ua.svg";
import facebook from "@/img/social/facebook.svg";
import showImg from "@/img/icons/show-img.svg";
import hideImg from "@/img/icons/hide-img.svg";

const CategorySection = () => {
  const t = useTranslations("CategorySection");
  const [isListVisible, setIsListVisible] = useState(true);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [viewMode, setViewMode] = useState("list");

  const toggleListVisibility = () => {
    setIsListVisible((prev) => !prev);
  };

  const toggleImageVisibility = () => {
    setIsImageVisible((prev) => !prev);
  };

  const setGridView = () => {
    setViewMode("grid");
  };

  const setListView = () => {
    setViewMode("list");
  };

  const categories = [
    {
      id: 1,
      title: "Кинги",

      image: facebook,
      alt: "Facebook logo",
    },
    {
      id: 2,
      title: "Самореги",

      image: facebook,
      alt: "Facebook logo",
    },
    {
      id: 3,
      title: "Автореги",

      image: facebook,
      alt: "Facebook logo",
    },
    {
      id: 4,
      title: "Кинги с 2БМ",

      image: facebook,
      alt: "Facebook logo",
    },
  ];

  return (
    <div className="mb-6 border-b border-solid border-[rgba(0,0,0,0.10)]">
      <div className="flex justify-between items-center pt-6 pl-3 pb-4">
        <Button
          className="text-[rgba(0,0,0,0.80)] border-[1px] border-solid border-[#0000000D] transition-all duration-300"
          before={
            <Icon
              name={isListVisible ? "icon-hide" : "icon-show"}
              width={19.5}
              height={15}
            />
          }
          mode="outline"
          size="s"
          onClick={toggleListVisibility}
        >
          {t(isListVisible ? "hideBtn" : "showBtn")}
        </Button>
        <div className="flex items-center gap-3">
          <button type="button" onClick={toggleImageVisibility}>
            <Image
              src={isImageVisible ? showImg : hideImg}
              alt={isImageVisible ? "Hide image icon" : "Show image icon"}
              width={24}
              height={24}
              sizes="100vw"
            />
          </button>
          <button type="button" onClick={setGridView}>
            <Icon
              name={viewMode === "grid" ? "icon-grid-fill" : "icon-grid"}
              width={24}
              height={24}
            />
          </button>
          <button type="button" onClick={setListView}>
            <Icon
              name={
                viewMode === "list" ? "icon-grid-list" : "icon-grid-list-emp"
              }
              width={24}
              height={24}
            />
          </button>
          <button type="button">
            <Icon name="icon-filter" width={24} height={24} />
          </button>
        </div>
      </div>
      <ul
        className={`transition-opacity duration-300 ease-in-out ${
          isListVisible ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        } ${
          viewMode === "grid"
            ? "grid grid-cols-2 gap-y-4 gap-x-0"
            : "flex flex-col"
        }`}
      >
        {categories.map((category, index) => (
          <li
            key={category.id}
            className={`relative flex flex-col ${
              viewMode === "grid" && index % 2 === 0
                ? "pr-2 border-fake-right"
                : "pl-2"
            } ${
              viewMode === "grid" &&
              Math.floor(index / 2) < Math.floor((categories.length - 1) / 2)
                ? "border-b border-solid border-[rgba(0,0,0,0.10)]"
                : ""
            } ${viewMode === "list" ? "mb4" : ""}`}
            style={{
              borderBottom:
                viewMode === "list" ? "1px solid rgba(0, 0, 0, 0.10)" : "",
            }}
          >
            <div
              className={`flex gap-4 ${
                viewMode === "grid" ? "flex-col mb-3" : "mb-4"
              }`}
            >
              {isImageVisible && viewMode === "list" && (
                <div className="shrink-0 relative w-[56px] h-[56px] transition-opacity duration-300 ease-in-out">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    width={56}
                    height={56}
                    sizes="100vw"
                  />
                </div>
              )}
              {viewMode === "grid" && (
                <div className="flex gap-2">
                  {isImageVisible && (
                    <div className="shrink-0 relative w-[52px] h-[52px] transition-opacity duration-300 ease-in-out">
                      <Image
                        src={category.image}
                        alt={category.alt}
                        width={52}
                        height={52}
                        sizes="100vw"
                      />
                    </div>
                  )}
                  <p
                    className="text-[14px] text-mainText leading-[150%] font-normal overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {category.title}
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySection;
