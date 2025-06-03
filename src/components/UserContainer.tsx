"use client";

import { Button } from "@telegram-apps/telegram-ui";
import { useState, useMemo, useEffect } from "react";
import { initDataState } from "@telegram-apps/sdk-react";
import { useTranslations } from "next-intl";
import Icon from "@/helpers/Icon";
import { Link } from "./Link/Link";
import { useUsersStore } from "@/store/usersStore";

function getUserName(user: any): string {
  const firstName = user?.first_name || "";
  const lastName = user?.last_name || "";
  return `${firstName} ${lastName}`.trim() || "User";
}

function generateInitDataString(initData: Record<string, any>): string {
  const params: Record<string, string> = {};

  // Add auth_date as Unix timestamp
  if (initData.auth_date) {
    const date = new Date(initData.auth_date);
    params.auth_date = Math.floor(date.getTime() / 1000).toString();
  }

  // Add user object, stringified and URL-encoded
  if (initData.user) {
    params.user = encodeURIComponent(JSON.stringify(initData.user));
  }

  // Add other optional fields if they exist
  if (initData.query_id) {
    params.query_id = initData.query_id;
  }
  if (initData.chat_type) {
    params.chat_type = initData.chat_type;
  }
  if (initData.chat_instance) {
    params.chat_instance = initData.chat_instance;
  }

  if (initData.hash) {
    params.hash = initData.hash;
  }

  if (initData.start_param) {
    params.start_param = initData.start_param;
  }
  if (initData.can_send_after) {
    params.can_send_after = initData.can_send_after.toString();
  }

  // Generate query string
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

const UserContainer = () => {
  const [tgName, setTgName] = useState<string>("");
  const [telegramInitData, setTelegramInitData] = useState<string>("");
  const { currentUser, initUser, fetchCurrentUser, loading, error } =
    useUsersStore();
  const initData = initDataState();

  // const initData = {
  //   auth_date: "2025-06-02T18:08:34.000Z",
  //   chat_type: "sender",
  //   chat_instance: "429265275021731092",
  //   hash: "97088b095cb395e4036676a542589bed66f9da536b820f3f846fce3d4951cea2",
  //   signature:
  //     "RfETYsJ-eD5c7JEuR_WiN4jVZ6YW2aHpeeC9rxxasj2qAZoUa4mSQNSmdnw-0n_xviAIcgDxJS1ogOIxzxE9AA",
  //   user: {
  //     allows_write_to_pm: true,
  //     first_name: "Igor",
  //     id: 498708603,
  //     last_name: "",
  //     language_code: "en",
  //     photo_url:
  //       "https://t.me/i/userpic/320/MiY4_ZdJgOn3W03eZ6zRrqksE8L38BuU9GhV265M2LU.svg",
  //     username: "igoora",
  //   },
  // };

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

  useEffect(() => {
    const initializeUser = async () => {
      const telegramInitData = generateInitDataString(initData || {});
      console.log("telegramInitData:", telegramInitData);
      console.log("initData:", initData);
      setTelegramInitData(telegramInitData);

      if (!currentUser && telegramInitData) {
        try {
          await initUser(telegramInitData);
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
  }, [currentUser, initUser, fetchCurrentUser]);

  return (
    <section className="mb-4 text-mainText">
      {/* {initData && (
        <div className="p-4 border rounded-md bg-gray-50 mb-4">
          <h4 className="text-lg font-semibold mb-2">InitData Debug Info:</h4>
          <pre className="text-xs whitespace-pre-wrap break-all">
            {JSON.stringify(initData, null, 2)}
          </pre>
        </div>
      )} */}
      telegramInitData:{telegramInitData}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
