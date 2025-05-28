"use client";

import Hero from "@/components/Sections/Hero";
import Header from "@/components/Sections/Header";
import UserContainer from "@/components/Sections/UserContainer";
import Search from "@/components/Search/Search";
import { Page } from "@/components/Page";
import { useState } from "react";
import clsx from "clsx";
import LoyaltyProgram from "@/components/Sections/LoyaltyProgram";
import TopProducts from "@/components/Sections/TopProducts";
import Review from "@/components/Sections/Review";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Page back={false}>
      <div
        className={clsx(
          "max-w-container mx-auto flex flex-col bg-background transition-padding duration-300 ease-in-out",
          {
            "pt-16": isCollapsed,
            "pt-[108px]": !isCollapsed,
          }
        )}
      >
        <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <UserContainer />
        <Search />
        <LoyaltyProgram />
        <TopProducts />
        <Review />
        {/* <Hero /> */}
      </div>
    </Page>
  );
}
