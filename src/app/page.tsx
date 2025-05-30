"use client";

import UserContainer from "@/components/UserContainer";
import Search from "@/components/Search/Search";
import { Page } from "@/components/Page";
import clsx from "clsx";
import LoyaltyProgram from "@/components/LoyaltyProgram";
import TopProducts from "@/components/TopProducts";
import Review from "@/Pages/main/Review";
import Banners from "@/Pages/main/Banners";
import Links from "@/Pages/main/Links/Links";
import Social from "@/Pages/main/Social";

export default function Home() {
  return (
    <Page back={false}>
      <div className={clsx("max-w-container mx-auto flex flex-col")}>
        <UserContainer />
        <Search />
        <LoyaltyProgram />
        <TopProducts />
      </div>
      <Review />
      <div className={clsx("max-w-container mx-auto flex flex-col")}>
        <Banners />
        <Links />
        <Social />
      </div>
    </Page>
  );
}
