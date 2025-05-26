"use client";

import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import UserContainer from "@/components/UserContainer/UserContainer";
import Search from "@/components/Search/Search";
import { Page } from "@/components/Page";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Page back={false}>
      <div
        className={clsx(
          "flex flex-col bg-background transition-padding duration-300 ease-in-out",
          {
            "pt-14": isCollapsed,
            "pt-[100px]": !isCollapsed,
          }
        )}
      >
        <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <UserContainer />
        <Search />
        <Hero />
      </div>
    </Page>
  );
}
