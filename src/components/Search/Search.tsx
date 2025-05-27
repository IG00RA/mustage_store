"use client";

import Icon from "@/helpers/Icon";
import { useTranslations } from "next-intl";

const Search = () => {
  const t = useTranslations("Search");

  return (
    <div className="flex items-center gap-2 bg-background p-4 rounded-[12px] border-[1px] border-solid mb-6 border-[#0000001A]">
      <Icon name="icon-search" width={20} height={20} />
      <input
        placeholder={t("placeholder")}
        // value={input1}
        // onChange={(event) => onChangeInput1(event.target.value)}
        className="flex-1 text-mainText placeholder-[#A1ACB0] bg-transparent text-[16px] border-0 outline-none"
      />
    </div>
  );
};

export default Search;
