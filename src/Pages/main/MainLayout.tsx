"use client";

import Header from "@/components/Header";
import { PropsWithChildren, useState } from "react";
import clsx from "clsx";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: PropsWithChildren) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsedFooter, setIsCollapsedFooter] = useState(false);

  return (
    <>
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        className={clsx(
          "bg-background transition-padding duration-300 ease-in-out",
          {
            "pb-8": isCollapsedFooter,
            "pb-[80px]": !isCollapsedFooter,
            "pt-16": isCollapsed,
            "pt-[108px]": !isCollapsed,
          }
        )}
      >
        {children}
      </main>
      <Footer
        isCollapsed={isCollapsedFooter}
        setIsCollapsed={setIsCollapsedFooter}
      />
    </>
  );
}
