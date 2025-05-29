"use client";

import Header from "@/components/Sections/Header";
import UserContainer from "@/components/Sections/UserContainer";
import Search from "@/components/Search/Search";
import { Page } from "@/components/Page";
import { useState } from "react";
import clsx from "clsx";
import LoyaltyProgram from "@/components/Sections/LoyaltyProgram";
import TopProducts from "@/components/Sections/TopProducts";
import Review from "@/components/Sections/Review";
import Banners from "@/components/Sections/Banners";
import Links from "@/components/Sections/Links/Links";
import Social from "@/components/Sections/Social";
import Footer from "@/components/Sections/Footer";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsedFooter, setIsCollapsedFooter] = useState(false);

  return (
    <Page back={false}>
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        className={clsx("transition-padding duration-300 ease-in-out", {
          "pb-16": isCollapsedFooter,
          "pb-[108px]": !isCollapsedFooter,
        })}
      >
        <div
          className={clsx(
            "max-w-container mx-auto flex flex-col bg-background transition-padding duration-300 ease-in-out",
            {
              "pt-16": isCollapsed,
              "pt-[108px]": !isCollapsed,
            }
          )}
        >
          <UserContainer />
          <Search />
          <LoyaltyProgram />
          <TopProducts />
        </div>
        <Review />
        <div
          className={clsx(
            "max-w-container mx-auto flex flex-col bg-background"
          )}
        >
          <Banners />
          <Links />
          <Social />
        </div>
      </main>
      <Footer
        isCollapsed={isCollapsedFooter}
        setIsCollapsed={setIsCollapsedFooter}
      />
    </Page>
  );
}
