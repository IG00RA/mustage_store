"use client";

import { Button } from "@telegram-apps/telegram-ui";
import { useState, useMemo, useEffect } from "react";
import {
  useRawLaunchParams,
} from "@telegram-apps/sdk-react";
import { useTranslations } from "next-intl";
import Icon from "@/helpers/Icon";
import { Link } from "./Link/Link";
import { useUsersStore } from "@/store/usersStore";

function filterInitData(initDataValue: string): string {
  if (!initDataValue || typeof initDataValue !== "string") {
    return "";
  }

  const marker = "&tgWebAppVersion";
  const index = initDataValue.indexOf(marker);
  if (index === -1) {
    return initDataValue;
  }

  const result = initDataValue.substring(0, index);
  return result;
}

const UserContainer = () => {
  const { currentUser, initUser, fetchCurrentUser, loading, error } =
    useUsersStore();
  const initDataRaw = useRawLaunchParams();
  const initDataValue = filterInitData(
    initDataRaw.replace(/^tgWebAppData=/, "")
  );

  const t = useTranslations("User");

  const userName = useMemo(() => {
    if (currentUser) {
      return `${currentUser.first_name} ${currentUser.last_name}`.trim();
    }
    return "User";
  }, [currentUser]);

  useEffect(() => {
    const initializeUser = async () => {
      if (!currentUser && initDataValue) {
        try {
          await initUser(initDataValue);
        } catch (err) {
          console.error("Failed to initialize user:", err);
        }
      } else if (!currentUser) {
        console.warn("No telegramInitData, attempting to fetch current user");
        fetchCurrentUser().catch((err) =>
          console.error("Failed to fetch current user:", err)
        );
      }
    };

    initializeUser();
  }, [currentUser, initDataValue]);

  return (
    <section className="mb-4 text-mainText">
      <h3 className="text-mainText text-4 font-semibold text-center mb-4">
        {t("welcome")} {userName}!
      </h3>
      <div className="flex flex-col items-center p-4 mb-3 rounded-[16px] border-[1px] border-solid border-[#0000001A]">
        <span className="text-mainText text-3 font-medium mb-1 text-center">
          {t("balance")}
        </span>
        <div className="flex items-center gap-2 justify-center mb-4">
          <Icon name="icon-Wallet" width={24} height={24} color="black" />
          <span className="text-mainText text-[24px] font-bold">
            ${currentUser?.balance || "0"}
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
    </section>
  );
};

export default UserContainer;
