"use client";

import { Button } from "@telegram-apps/telegram-ui";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { useTranslations } from "next-intl";
import RatingBar from "@/components/Rating/Rating";

const LoyaltyProgram = () => {
  const [level, setLevel] = useState<string>("1");
  const [status, setStatus] = useState<string>("“Нулевый”");
  const [discount, setDiscount] = useState<string>("1");
  const [nextLevel, setNextLevel] = useState<string>("154");

  const t = useTranslations("LoyaltyProgram");

  return (
    <div
      className="flex pt-[24px] pb-[24px] flex-col"
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
      }}
    >
      <h2 className="px-3 text-mainText text-[14px] font-medium leading-[150%] mb-6">
        {t("loyaltyProgram")}
      </h2>
      <RatingBar rating={2.7} />

      <div className="flex mt-6 shrink-0 items-center gap-4 mb-2">
        <p className="text-mainText text-[12px] font-normal">
          {t("level")}{" "}
          <span className="text-mainText text-[14px] font-bold blok ml-1">
            {level}
          </span>
        </p>
        <p className="text-mainText text-[12px] mr-[10px]">
          {t("status")}{" "}
          <span className="text-mainText text-[14px] font-bold ml-1">
            {status}
          </span>
        </p>
      </div>
      <p className="text-mainText text-[12px] font-normal mb-2">
        {t("discount")}{" "}
        <span className="text-mainText text-[14px] font-bold blok ml-1">
          {discount}%
        </span>
      </p>
      <div className="flex shrink-0 items-center gap-[6px] mb-2">
        <p className="text-mainText text-[12px] mr-[10px] mb-2 max-w-[57%]">
          {t("nextLevel")}
        </p>
        <span className="text-mainText text-[14px] font-bold">
          ${nextLevel}
        </span>
      </div>
      <Button
        className="flex-1 ml-auto bg-[rgba(0,122,255,0.03)]  text-accentText"
        after={<FaChevronRight size={16} color="#007aff" />}
        mode="bezeled"
        size="s"
      >
        {t("btn")}
      </Button>
    </div>
  );
};

export default LoyaltyProgram;
