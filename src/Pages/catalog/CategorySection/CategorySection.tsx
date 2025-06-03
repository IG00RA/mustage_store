"use client";

import { Button } from "@telegram-apps/telegram-ui";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Icon from "@/helpers/Icon";
import Image from "next/image";
import showImg from "@/img/icons/show-img.svg";
import hideImg from "@/img/icons/hide-img.svg";
import facebook from "@/img/social/facebook.svg";
import { Link } from "@/components/Link/Link";
import { useStore } from "@/store";

const CategorySection = () => {
  const t = useTranslations("CategorySection");
  const [isListVisible, setIsListVisible] = useState(true);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [viewMode, setViewMode] = useState("list");
  const { categories } = useStore();

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

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(link);
    if (targetElement) {
      const offset = 80;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

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
      <ul
        className={`transition-opacity duration-300 ease-in-out gap-2 ${
          isListVisible
            ? "opacity-100 pb-6"
            : "opacity-0 h-0 overflow-hidden pb-2"
        } ${viewMode === "grid" ? "grid grid-cols-2" : "flex flex-col"}`}
      >
        {categories.map((category) => (
          <li key={category.account_category_id}>
            <Link
              href={`#${category.account_category_id}`}
              className={`flex gap-3 items-center p-4 border rounded-[16px] border-solid border-[rgba(0,0,0,0.10)]`}
              onClick={(e) =>
                handleScroll(e, `${category.account_category_id}`)
              }
            >
              {isImageVisible && (
                <Image
                  src={facebook}
                  alt={"Facebook logo"}
                  width={48}
                  height={48}
                  sizes="100vw"
                />
              )}
              <p className={`text-[12px] text-mainText font-bold`}>
                {category.account_category_name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategorySection;
