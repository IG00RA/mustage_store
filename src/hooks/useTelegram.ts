import { TelegramWebApp } from "@/types/telegram";
import { useEffect, useState } from "react";

export function useTelegram(): TelegramWebApp | null {
  const [tg, setTg] = useState<TelegramWebApp | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      setTg(window.Telegram.WebApp as TelegramWebApp);
    }
  }, []);

  return tg;
}
