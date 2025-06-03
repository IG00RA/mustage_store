"use client";

import { Button } from "@telegram-apps/telegram-ui";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { GoBell } from "react-icons/go";
import Icon from "@/helpers/Icon";
import showImg from "@/img/icons/show-img.svg";
import hideImg from "@/img/icons/hide-img.svg";
import facebook from "@/img/social/facebook.svg";
import flag from "@/img/flags/ua.svg";
import { useStore } from "@/store";

const Products = () => {
  const t = useTranslations("Products");
  const [isListVisible, setIsListVisible] = useState<boolean>(true);
  const [isImageVisible, setIsImageVisible] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const { products, categories } = useStore();

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

  const groupedProducts = categories.map((category) => ({
    category,
    products: products.filter(
      (product) => product.account_category_id === category.account_category_id
    ),
  }));

  return (
    <section className="mb-6 border-b border-solid border-[rgba(0,0,0,0.10)]">
      <div className="flex justify-between items-center pl-3 pb-4">
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
      {groupedProducts.map(({ category, products }) => (
        <div
          id={`${category.account_category_id}`}
          key={category.account_category_id}
          className={`transition-opacity duration-300 ease-in-out ${
            isListVisible ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          } `}
        >
          <h2 className="text-[14px] font-semibold text-mainText mb-4 text-center leading-[150%] px-6 py-3 rounded-[12px] bg-[rgba(112,117,121,0.15)] uppercase">
            {category.account_category_name}
          </h2>
          <ul
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-2 gap-y-4 gap-x-0"
                : "flex flex-col gap-4"
            }`}
          >
            {products.map((product, index) => (
              <li
                key={`${category.account_category_id}-${product.account_category_id}-${index}`}
                className={`relative flex flex-col ${
                  viewMode === "grid" && index % 2 === 0
                    ? "pr-2 border-fake-right"
                    : "pl-2"
                } ${
                  viewMode === "grid" &&
                  Math.floor(index / 2) < Math.floor((products.length - 1) / 2)
                    ? "border-b border-solid border-[rgba(0,0,0,0.10)]"
                    : ""
                } ${viewMode === "list" ? "mb-4" : ""}`}
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
                        src={facebook}
                        alt={"Facebook logo"}
                        width={56}
                        height={56}
                        sizes="100vw"
                      />
                      <Image
                        src={flag}
                        className="absolute bottom-[-1px] right-[-2px]"
                        alt={"Flag icon"}
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
                            src={facebook}
                            alt={"Facebook logo"}
                            width={52}
                            height={52}
                            sizes="100vw"
                          />
                          <Image
                            src={flag}
                            className="absolute bottom-[-1px] right-[-2px]"
                            alt={"Flag icon"}
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
                  className={`flex gap-4 justify-between ${
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
                        <Icon
                          name="icon-shopping-basket"
                          width={24}
                          height={24}
                        />
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
                      <Button
                        className="text-accentText"
                        mode="bezeled"
                        size="m"
                      >
                        {t("btnCart")}
                      </Button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Products;
