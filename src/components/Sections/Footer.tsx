"use client";

import { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import Icon from "@/helpers/Icon";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";

interface FooterProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({ isCollapsed, setIsCollapsed }) => {
  const t = useTranslations("Footer");

  const footerRef = useRef<HTMLElement | null>(null);

  const togglePanel = () => setIsCollapsed((prev) => !prev);

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!footerRef.current || !footerRef.current.contains(target)) return;

      const x =
        (e as MouseEvent).pageX ?? (e as TouchEvent).touches?.[0]?.pageX;
      const y =
        (e as MouseEvent).pageY ?? (e as TouchEvent).touches?.[0]?.pageY;

      if (x === undefined || y === undefined) return;

      const circle = document.createElement("div");
      circle.className = "click-circle";
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      document.body.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, []);
  return (
    <>
      <style jsx global>{`
        .click-circle {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          animation: circle-fade 0.6s ease-out forwards;
          z-index: 9999;
          background: radial-gradient(
            circle,
            rgba(0, 122, 255, 0.4) 0%,
            rgba(0, 122, 255, 0.2) 30%,
            rgba(0, 122, 255, 0) 100%
          );
        }

        @keyframes circle-fade {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
      `}</style>

      <footer
        ref={footerRef}
        className={clsx(
          "fixed bottom-0 left-0 w-full z-50 flex flex-col bg-background shadow-md transition-transform duration-300 ease-in-out",
          {
            "translate-y-[65px]": isCollapsed,
            "translate-y-0": !isCollapsed,
          }
        )}
      >
        <div
          className="flex self-stretch h-[20px] object-fill bg-btnsBack justify-center items-center"
          onClick={togglePanel}
        >
          <button type="button" className="transition-transform duration-300">
            <FaChevronDown
              size={14}
              className={clsx(
                "text-iconsBack transition-transform duration-300",
                {
                  "rotate-180": isCollapsed,
                }
              )}
            />
          </button>
        </div>
        <div
          className={clsx(
            "overflow-hidden text-center justify-center text-secondText text-xs leading-tight transition-all duration-300 ease-in-out",
            {
              "max-h-6 pb-2 opacity-100": isCollapsed,
              "max-h-0 pb-0 opacity-0": !isCollapsed,
            }
          )}
        >
          {t("panelText")}
        </div>
        <nav
          className={clsx("flex items-center justify-around", {
            "pacity-100": !isCollapsed,
            "opacity-0": isCollapsed,
          })}
        >
          <InlineButtonsItem
            className="flex-1 text-secondText hover:text-accentText transition-colors"
            mode="plain"
            text={t("catalog")}
          >
            <Icon name="icon-shop" width={24} height={24} />
          </InlineButtonsItem>
          <InlineButtonsItem
            className="flex-1 text-secondText hover:text-accentText transition-colors"
            mode="plain"
            text={t("support")}
          >
            <IoIosInformationCircle size={20} />
          </InlineButtonsItem>
          <InlineButtonsItem
            className="flex-1 text-secondText hover:text-accentText transition-colors"
            mode="plain"
            text={t("cabinet")}
          >
            <Icon name="icon-person" width={24} height={24} />
          </InlineButtonsItem>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
