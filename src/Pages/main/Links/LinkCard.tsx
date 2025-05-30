"use client";

import { TbArrowUpRight } from "react-icons/tb";
import { useState, MouseEvent } from "react";
import clsx from "clsx";

type LinkCardProps = {
  text: string;
  href: string;
  fullWidth?: boolean;
};

type Ripple = {
  x: number;
  y: number;
  id: number;
};

export const LinkCard = ({ text, href, fullWidth = false }: LinkCardProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple: Ripple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, ripple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600);
  };

  return (
    <li className={clsx(fullWidth ? "w-full" : "w-[calc(50%-4px)]")}>
      <a href={href} className="block w-full">
        <div
          onClick={handleClick}
          className="relative overflow-hidden rounded-[16px] bg-[#EFEFF4] hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-colors duration-300 flex flex-col justify-between p-4 w-full h-[119px] cursor-pointer group"
        >
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute bg-gradient-to-r from-blue-400 to-purple-500 opacity-40 rounded-full animate-ripple"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 200,
                height: 200,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
          <TbArrowUpRight
            size={24}
            color="black"
            className="ml-auto transition-transform duration-300 group-hover:rotate-90"
          />
          <span className="text-mainText text-[14px] font-medium max-w-[70%]">
            {text}
          </span>
        </div>
      </a>
    </li>
  );
};
