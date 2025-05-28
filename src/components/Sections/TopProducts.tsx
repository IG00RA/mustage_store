"use client";

import { Button } from "@telegram-apps/telegram-ui";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Icon from "@/helpers/Icon";
import Image from "next/image";

import uaFlag from "@/img/flags/ua.svg";
import facebook from "@/img/social/facebook.svg";
import { GoBell } from "react-icons/go";

const TopProducts = () => {
  const [level, setLevel] = useState<string>("1");
  const [status, setStatus] = useState<string>("“Нулевый”");
  const [discount, setDiscount] = useState<string>("1");
  const [nextLevel, setNextLevel] = useState<string>("154");

  const t = useTranslations("TopProducts");

  return (
    <>
      <div className="flex justify-between items-center pt-6 pl-3 pb-4">
        <Button
          className="text-[rgba(0,0,0,0.80)] border-[1px] border-solid border-[#0000000D]"
          before={<Icon name="icon-hide" width={19.5} height={15} />}
          mode="outline"
          size="s"
        >
          {t("hideBtn")}
        </Button>
        <div className="flex items-center gap-3">
          <button type="button">
            <Icon name="icon-image" width={24} height={24} />
          </button>
          <button type="button">
            <Icon name="icon-grid" width={24} height={24} />
          </button>
          <button type="button">
            <Icon name="icon-grid-list" width={24} height={24} />
          </button>
        </div>
      </div>
      <ul>
        <li
          className="flex flex-col mb-4"
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
          }}
        >
          <div className="flex mb-4 gap-4">
            <div className="shrink-0 relative w-[56px] h-[56px]">
              <Image
                src={facebook}
                alt={"Facebook logo"}
                width={56}
                height={56}
                sizes="100vw"
              />
              <Image
                src={uaFlag}
                className="absolute bottom-[-1px] right-[-2px]"
                alt={"Facebook logo"}
                width={25}
                height={18}
                sizes="100vw"
              />
            </div>
            <p
              className="text-[14px] text-mainText leading-[150%] font-normal overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
            >
              [UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 -
              30 минут! Рандом друзей; 2FA; Много действий вне ФБ.
              Интересы.Категории[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов!
              Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий
              вне ФБ. Интересы.Категории
            </p>
          </div>
          <div className="flex mb-4 gap-4 justify-between">
            <Button
              className="bg-[rgba(0,122,255,0.03)]  text-accentText"
              after={<FaChevronRight size={16} color="#007aff" />}
              mode="bezeled"
              size="s"
            >
              {t("btn")}
            </Button>
            <div className="flex flex-col">
              <div className="flex mb-[6px] gap-1 items-center">
                <span className="blok text-mainText text-[18px] font-bold leading-[120%] line-through">
                  $12.99
                </span>
                <span className="blok text-mainText text-[16px] font-normal leading-[120%]">
                  $9.99
                </span>
              </div>
              <div className="flex gap-[6px] items-center">
                <span className="blok text-mainText text-[12px] font-normal leading-[120%]">
                  {t("inStock")}
                </span>
                <span className="blok text-mainText text-[12px] font-bold leading-[120%]">
                  599{t("pis")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex mb-6 gap-4 justify-between">
            <div className="flex gap-2 items-center">
              <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
                <Icon name="icon-Bookmark" width={24} height={24} />
              </button>
              <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
                <GoBell size={20} className="text-iconsBack" />
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <Button mode="filled" size="m">
                {t("btnBye")}
              </Button>
              <Button className="text-accentText" mode="bezeled" size="m">
                {t("btnCart")}
              </Button>
            </div>
          </div>
        </li>
        <li
          className="flex flex-col  mb-4"
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
          }}
        >
          <div className="flex mb-4 gap-4">
            <div className="shrink-0 relative w-[56px] h-[56px]">
              <Image
                src={facebook}
                alt={"Facebook logo"}
                width={56}
                height={56}
                sizes="100vw"
              />
              <Image
                src={uaFlag}
                className="absolute bottom-[-1px] right-[-2px]"
                alt={"Facebook logo"}
                width={25}
                height={18}
                sizes="100vw"
              />
            </div>
            <p
              className="text-[14px] text-mainText leading-[150%] font-normal overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
            >
              [UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 -
              30 минут! Рандом друзей; 2FA; Много действий вне ФБ.
              Интересы.Категории[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов!
              Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий
              вне ФБ. Интересы.Категории
            </p>
          </div>
          <div className="flex mb-4 gap-4 justify-between">
            <Button
              className="bg-[rgba(0,122,255,0.03)]  text-accentText"
              after={<FaChevronRight size={16} color="#007aff" />}
              mode="bezeled"
              size="s"
            >
              {t("btn")}
            </Button>
            <div className="flex flex-col">
              <div className="flex mb-[6px] gap-1 items-center">
                <span className="blok text-mainText text-[18px] font-bold leading-[120%] line-through">
                  $12.99
                </span>
                <span className="blok text-mainText text-[16px] font-normal leading-[120%]">
                  $9.99
                </span>
              </div>
              <div className="flex gap-[6px] items-center">
                <span className="blok text-mainText text-[12px] font-normal leading-[120%]">
                  {t("inStock")}
                </span>
                <span className="blok text-mainText text-[12px] font-bold leading-[120%]">
                  599{t("pis")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex mb-6 gap-4 justify-between">
            <div className="flex gap-2 items-center">
              <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
                <Icon name="icon-Bookmark" width={24} height={24} />
              </button>
              <button className="flex flex-col shrink-0 bg-btnsBack rounded-[10px] border-0 w-10 h-10 items-center justify-center">
                <GoBell size={20} className="text-iconsBack" />
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <Button mode="filled" size="m">
                {t("btnBye")}
              </Button>
              <Button className="text-accentText" mode="bezeled" size="m">
                {t("btnCart")}
              </Button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default TopProducts;
