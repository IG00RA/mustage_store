"use client";
import { useState } from "react";
import { GoBell } from "react-icons/go";
import { FaChevronUp } from "react-icons/fa";
import Icon from "@/helpers/Icon";
import { useTranslations } from "next-intl";
import clsx from "clsx";

const Header = () => {
  const t = useTranslations("Header");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const togglePanel = () => setIsCollapsed((prev) => !prev);

  return (
    <div
      className={clsx(
        "flex flex-col self-stretch bg-[#FFFFFF] transition-transform duration-300 ease-in-out mb-[24px]",
        {
          "-translate-y-[65px]": isCollapsed,
          "translate-y-0": !isCollapsed,
        }
      )}
    >
      <div className="flex items-center self-stretch pl-[18px] pr-[18px] mb-[8px] pt-4">
        <div className="flex shrink-0 items-center gap-2">
          <Icon name="icon-logo" width={53} height={44} />
          <p className="text-[14px] max-w-[77px] font-medium">
            MUSTAGE<span className="block font-extralight">.STORE</span>
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
            <span className="text-accentText text-[12px] font-medium">UA</span>
          </button>
          <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
            <GoBell size={20} className="text-iconsBack" />
          </button>
          <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
            <Icon name="icon-Bookmark" width={24} height={24} />
          </button>
          <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
            <Icon name="icon-shopping-basket" width={24} height={24} />
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "overflow-hidden text-center justify-center text-secondText text-xs leading-tight transition-all duration-300 ease-in-out",
          {
            "max-h-6 py-1 opacity-100": isCollapsed,
            "max-h-0 py-0 opacity-0": !isCollapsed,
          }
        )}
      >
        {t("panelText")}
      </div>

      <div
        className="flex self-stretch h-[20px] object-fill bg-btnsBack justify-center items-center"
        onClick={togglePanel}
      >
        <button type="button" className="transition-transform duration-300">
          <FaChevronUp
            size={14}
            className={clsx(
              "text-iconsBack transition-transform duration-300",
              {
                "rotate-180": isCollapsed,
              }
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
