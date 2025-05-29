"use client";

import UserContainer from "@/components/Sections/UserContainer";
import Search from "@/components/Search/Search";
import { Page } from "@/components/Page";
import clsx from "clsx";
import LoyaltyProgram from "@/components/Sections/LoyaltyProgram";
import TopProducts from "@/components/Sections/TopProducts";
import Review from "@/components/Sections/Review";
import Banners from "@/components/Sections/Banners";
import Links from "@/components/Sections/Links/Links";
import Social from "@/components/Sections/Social";

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
