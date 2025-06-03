"use client";

import { useTranslations } from "next-intl";
import React from "react";

const TableSection = () => {
  const t = useTranslations("LoyaltyTable");

  const levelsData = [
    {
      level: {
        level: t("level_0.level"),
        price: t("level_0.price"),
      },
      discount: t("discount_0"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_1.level"),
        price: t("level_1.price"),
      },
      discount: t("discount_1"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_2.level"),
        price: t("level_2.price"),
      },
      discount: t("discount_2"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_3.level"),
        price: t("level_3.price"),
      },
      discount: t("discount_3"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_4.level"),
        price: t("level_4.price"),
      },
      discount: t("discount_4"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_5.level"),
        price: t("level_5.price"),
      },
      discount: t("discount_5"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_6.level"),
        price: t("level_6.price"),
      },
      discount: t("discount_6"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_7.level"),
        price: t("level_7.price"),
      },
      discount: t("discount_7"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_8.level"),
        price: t("level_8.price"),
      },
      discount: t("discount_8"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_9.level"),
        price: t("level_9.price"),
      },
      discount: t("discount_9"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_10.level"),
        price: t("level_10.price"),
      },
      discount: t("discount_10"),
      bonus: t("bonuses_unavailable"),
    },
    {
      level: {
        level: t("level_11.level"),
        price: t("level_11.price"),
      },
      discount: t("discount_max"),
      bonus: t("bonuses_available"),
    },
  ];

  return (
    <section className="text-mainText mt-4 pb-4">
      <div className="flex justify-between mb-4 gap-2">
        <div className="flex flex-1 max-w-[calc(50%-4px)] flex-col px-6 pt-5 rounded-[12px] bg-[rgba(112,117,121,0.15)]">
          <h3 className="text-sm font-medium leading-normal">
            {t("levels_statuses")}
          </h3>
          <h3 className="text-sm font-medium leading-normal">{t("buySum")}</h3>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-sm font-medium leading-normal text-center px-6 py-2 rounded-[12px] bg-[rgba(112,117,121,0.15)]">
            {t("bonuses")}
          </h3>
          <div className="flex gap-2">
            <h3 className="flex-1 text-sm font-medium leading-normal text-center py-2 rounded-[12px] bg-[rgba(112,117,121,0.15)]">
              {t("sales")}
            </h3>
            <h3 className="flex-1 text-sm font-medium leading-normal text-center py-2 rounded-[12px] bg-[rgba(112,117,121,0.15)]">
              {t("optPrices")}
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {levelsData.map((row, index) => (
          <React.Fragment key={index}>
            <div className="col-span-2 pl-6 pr-2 py-2 rounded-[12px] border border-[rgba(112,117,121,0.15)]">
              <p className="text-base font-medium leading-normal">
                {row.level.level}
              </p>
              <p className="text-base font-medium leading-normal">
                {row.level.price}
              </p>
            </div>
            <p className="flex items-center justify-center text-base font-bold leading-normal col-span-1 p-2 rounded-[12px] border border-[rgba(112,117,121,0.15)]">
              {row.discount}
            </p>
            <p
              className="flex items-center justify-center text-center text-xs font-bold leading-normal col-span-1 p-2 rounded-[12px] border border-[rgba(112,117,121,0.15)] break-words hyphens-auto"
              lang="ru"
            >
              {row.bonus}
            </p>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default TableSection;
