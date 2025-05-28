"use client";

import { useTranslations } from "next-intl";
import Icon from "@/helpers/Icon";
import { Link } from "../Link/Link";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";

const Social = () => {
  const t = useTranslations("Social");

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="text-mainText text-[14px] font-medium leading-[150%] max-w-[125px] w-full">
          {t("social")}
        </h3>

        <div className="grid grid-cols-2 gap-2">
          <Link className="w-[72px] h-[72px]" href={"/"}>
            <InlineButtonsItem className="w-full h-full" mode="bezeled">
              <Icon name="icon-tg" width={28} height={28} />
            </InlineButtonsItem>
          </Link>
          <Link className="w-[72px] h-[72px]" href={"/"}>
            <InlineButtonsItem className="w-full h-full" mode="bezeled">
              <Icon name="icon-tiktok" width={28} height={28} />
            </InlineButtonsItem>
          </Link>
          <Link className="w-[72px] h-[72px]" href={"/"}>
            <InlineButtonsItem className="w-full h-full" mode="bezeled">
              <Icon name="icon-youTube" width={28} height={28} />
            </InlineButtonsItem>
          </Link>
          <Link className="w-[72px] h-[72px]" href={"/"}>
            <InlineButtonsItem className="w-full h-full" mode="bezeled">
              <Icon name="icon-instagram" width={28} height={28} />
            </InlineButtonsItem>
          </Link>
        </div>
      </div>
      <Link
        href="/"
        className="mb-6 text-[#707579] text-center text-3 leading-[150%] underline decoration-solid decoration-auto underline-offset-auto"
      >
        {t("policy")}
      </Link>
    </>
  );
};

export default Social;
