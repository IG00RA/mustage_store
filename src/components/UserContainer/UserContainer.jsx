"use client";

import { useTelegram } from "@/hooks/useTelegram";
import { useEffect, useState } from "react";

const UserContainer = () => {
  const [tgName, setTgName] = useState("");
  const tg = useTelegram();

  useEffect(() => {
    if (tg?.initDataUnsafe?.user) {
      setTgName(tg.initDataUnsafe.user.first_name);
      console.log("Користувач Telegram:", tg.initDataUnsafe.user.first_name);
    }
  }, [tg]);

  return (
    <div className="self-stretch pb-[24px] ml-[18px] mr-[18px]">
      <div className="flex flex-col self-stretch mb-[16px]">
        <span className="text-[#292929] text-[16px] font-bold text-center mb-[16px]">
          {`Welcome, ${tgName}!`}
        </span>
        <div className="flex flex-col items-start self-stretch">
          <div className="flex flex-col items-center self-stretch bg-[#FFFFFF] p-[12px] mb-[12px] rounded-[16px] border-[1px] border-solid border-[#0000001A]">
            <div className="flex flex-col items-center mb-[16px]">
              <span className="text-[#292929] text-[12px] font-bold mb-[4px]">
                {"Ваш баланс"}
              </span>
              <div className="flex items-center pr-[4px]">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/o6w6mjl4_expires_30_days.png"
                  }
                  className="w-[24px] h-[24px] mr-[8px] object-fill"
                />
                <span className="text-[#292929] text-[24px] font-bold">
                  {"$145.45"}
                </span>
              </div>
            </div>
            <div className="flex items-start self-stretch">
              <button
                className="flex flex-1 items-center bg-[#007AFF] text-left pt-[8px] pb-[8px] mr-[8px] rounded-[20px] border-0"
                onClick={() => alert("Pressed!")}
              >
                <span className="text-[#FFFFFF] text-[14px] font-bold ml-[31px] mr-[9px]">
                  {"Пополнить"}
                </span>
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/hk4atzb7_expires_30_days.png"
                  }
                  className="w-[16px] h-[16px] mr-[31px] rounded-[20px] object-fill"
                />
              </button>
              <div className="flex flex-1 flex-col items-start bg-[#4378FF1A] pt-[8px] pb-[8px] rounded-[20px]">
                <span className="text-[#007AFF] text-[14px] font-bold ml-[40px] mr-[40px]">
                  {"Заработать"}
                </span>
              </div>
            </div>
          </div>
          <span className="text-[#007AFF] text-[12px]">
            {"Как сэкономить?"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
