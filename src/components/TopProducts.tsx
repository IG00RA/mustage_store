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

const TopProducts = () => {
  const t = useTranslations("TopProducts");
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

  const products = [
    {
      id: 1,
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 2,
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по> 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 3,
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 4,
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
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
        </div>
      </div>
      <ul
        className={`transition-opacity duration-300 ease-in-out ${
          isListVisible ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        } ${
          viewMode === "grid"
            ? "grid grid-cols-2 gap-y-4 gap-x-0"
            : "flex flex-col gap-4"
        }`}
      >
        {products.map((product, index) => (
          <li
            key={product.id}
            className={`relative flex flex-col ${
              viewMode === "grid" && index % 2 === 0
                ? "pr-2 border-fake-right"
                : "pl-2"
            } ${
              viewMode === "grid" &&
              Math.floor(index / 2) < Math.floor((products.length - 1) / 2)
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
                    src={product.image}
                    alt={product.alt}
                    width={56}
                    height={56}
                    sizes="100vw"
                  />
                  <Image
                    src={product.flag}
                    className="absolute bottom-[-1px] right-[-2px]"
                    alt={product.alt}
                    width={25}
                    height={18}
                    sizes="100vw"
                  />
                </div>
              )}
              {viewMode === "grid" && (
                <div className="flex gap-2">
                  {isImageVisible && (
                    <div className="shrink-0 relative w-[52px] h-[52px] transition-opacity duration-300 ease-in-out">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        width={52}
                        height={52}
                        sizes="100vw"
                      />
                      <Image
                        src={product.flag}
                        className="absolute bottom-[-1px] right-[-2px]"
                        alt={product.alt}
                        width={25}
                        height={18}
                        sizes="100vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-col ml-auto">
                    <div className="flex mb-[5px] gap-1 items-center">
                      <span className="block text-mainText text-[16px] font-bold leading-[120%] line-through">
                        {product.originalPrice}
                      </span>
                      <span className="block text-mainText text-[14px] font-normal leading-[120%]">
                        {product.discountedPrice}
                      </span>
                    </div>
                    <div className="flex items-end flex-col">
                      <span className="block text-mainText text-[12px] font-normal leading-[120%]">
                        {t("inStock")}
                      </span>
                      <span className="block text-mainText text-[12px] font-bold leading-[120%]">
                        {product.stock}
                        {t("pis")}
                      </span>
                    </div>
                  </div>
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
                {product.title}
              </p>
            </div>
            <div
              className={`flex gap-4 justify-between  ${
                viewMode === "grid" ? "mb-1" : "mb-4"
              }`}
            >
              <Button
                className="bg-[rgba(0,122,255,0.03)] text-accentText"
                after={<FaChevronRight size={16} color="#007aff" />}
                mode="bezeled"
                size="s"
              >
                {t("btn")}
              </Button>
              {viewMode === "list" && (
                <div className="flex flex-col">
                  <div className="flex mb-[6px] gap-1 items-center">
                    <span className="block text-mainText text-[18px] font-bold leading-[120%] line-through">
                      {product.originalPrice}
                    </span>
                    <span className="block text-mainText text-[16px] font-normal leading-[120%]">
                      {product.discountedPrice}
                    </span>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <span className="block text-mainText text-[12px] font-normal leading-[120%]">
                      {t("inStock")}
                    </span>
                    <span className="block text-mainText text-[12px] font-bold leading-[120%]">
                      {product.stock}
                      {t("pis")}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`flex ${
                viewMode === "grid"
                  ? "flex-col gap-2 mb-4"
                  : "justify-between gap-4 mb-6"
              }`}
            >
              <div className="flex gap-2 items-center">
                <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
                  <Icon name="icon-Bookmark" width={24} height={24} />
                </button>
                <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
                  <GoBell size={20} className="text-iconsBack" />
                </button>
                {viewMode === "grid" && (
                  <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
                    <Icon name="icon-shopping-basket" width={24} height={24} />
                  </button>
                )}
              </div>
              <div className="flex gap-2 items-center">
                <Button
                  mode="filled"
                  size="m"
                  className={`${viewMode === "grid" ? "flex-1" : ""}`}
                >
                  {t("btnBye")}
                </Button>
                {viewMode === "list" && (
                  <Button className="text-accentText" mode="bezeled" size="m">
                    {t("btnCart")}
                  </Button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProducts;
