"use client";

import { Button } from "@telegram-apps/telegram-ui";

import { useState, useMemo, useEffect } from "react";
import { initDataState, type User } from "@telegram-apps/sdk-react";
import { useTranslations } from "next-intl";
import Icon from "@/helpers/Icon";
import RatingBar from "@/components/Rating/Rating";

const LoyaltyProgram = () => {
  const [level, setLevel] = useState<string>("1");
  const [status, setStatus] = useState<string>("“Нулевый”");
  const [discount, setDiscount] = useState<string>("1");
  const [nextLevel, setNextLevel] = useState<string>("154");

  const t = useTranslations("LoyaltyProgram");

  return (
    <div
      className="pt-[24px] pb-[24px]"
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
      }}
    >
      <h2 className="px-3 text-mainText text-[14px] font-medium leading-[150%]">
        {t("loyaltyProgram")}
      </h2>
      <div className="self-stretch pt-[8px] pb-[8px]">
        <div className="self-stretch mb-[16px]">
          {/* <RatingBar rating={1.7} /> */}
          <div className="self-stretch">
            <div className="flex flex-col items-start self-stretch mb-[8px]">
              <div className="flex items-start self-stretch mb-[8px]">
                <div className="flex shrink-0 items-center pr-[4px] mr-[16px]">
                  <span className="text-[#292929] text-[12px] mr-[9px]">
                    {t("level")}
                  </span>
                  <span className="text-[#292929] text-[14px] font-bold">
                    {level}
                  </span>
                </div>
                <div className="flex shrink-0 items-center pr-[3px]">
                  <span className="text-[#292929] text-[12px] mr-[10px]">
                    {t("status")}
                  </span>
                  <span className="text-[#292929] text-[14px] font-bold">
                    {status}
                  </span>
                </div>
              </div>
              <div className="flex items-center pr-[3px]">
                <span className="text-[#292929] text-[12px] mr-[9px]">
                  {t("discount")}
                </span>
                <span className="text-[#292929] text-[14px] font-bold">
                  {discount}%
                </span>
              </div>
            </div>
            <div className="flex items-start self-stretch">
              <span className="text-[#292929] text-[12px] w-[216px] mr-[8px]">
                {t("nextLevel")}
              </span>
              <span className="text-[#292929] text-[14px] font-bold mt-[11px]">
                ${nextLevel}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end self-stretch">
          <button
            className="flex items-center bg-[#007AFF] text-left pt-[8px] pb-[8px] pl-[12px] pr-[12px] rounded-[20px] border-0"
            onClick={() => alert("Pressed!")}
          >
            <span className="text-[#007AFF] text-[14px] font-bold mr-[9px]">
              {t("btn")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
