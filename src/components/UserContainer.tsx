"use client";

import { Button } from "@telegram-apps/telegram-ui";

import { useState, useMemo, useEffect } from "react";
import { initDataState, type User } from "@telegram-apps/sdk-react";
import { useTranslations } from "next-intl";
import Icon from "@/helpers/Icon";
import { Link } from "./Link/Link";

function getUserName(user: User): string {
  const firstName = user?.first_name || "";
  const lastName = user?.last_name || "";
  return `${firstName} ${lastName}`.trim() || "User";
}

const UserContainer = () => {
  const [tgName, setTgName] = useState<string>("");
  const [balance, setBalance] = useState<string>("145.45");

  const initData = initDataState();

  const t = useTranslations("User");

  const userName = useMemo(() => {
    if (initData?.user) {
      return getUserName(initData.user);
    }
    return "User";
  }, [initData]);

  useEffect(() => {
    setTgName(userName);
  }, [userName]);

  return (
    <div className="mb-4">
      <h3 className="text-mainText text-4 font-semibold text-center mb-4">
        {t("welcome")} {tgName}!
      </h3>
      <div className="flex flex-col items-center p-4 mb-3 rounded-[16px] border-[1px] border-solid border-[#0000001A]">
        <span className="text-mainText text-3 font-medium mb-1 text-center">
          {t("balance")}
        </span>
        <div className="flex items-center gap-2 justify-center mb-4">
          <Icon name="icon-Wallet" width={24} height={24} color="black" />
          <span className="text-mainText text-[24px] font-bold">
            ${balance}
          </span>
        </div>
        <div className="flex gap-2 justify-between items-center w-[100%]">
          <Button
            className="flex-1"
            after={<Icon name="icon-Pluse" width={16} height={16} />}
            mode="filled"
            size="s"
          >
            {t("btnAdd")}
          </Button>
          <Button className="flex-1 text-accentText" mode="bezeled" size="s">
            {t("btnEarn")}
          </Button>
        </div>
      </div>
      <Link href={"/"}>
        <span className="text-accentText text-3 underline decoration-solid font-normal">
          {t("howSave")}
        </span>
      </Link>
    </div>
  );
};

export default UserContainer;
