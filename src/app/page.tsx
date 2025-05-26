"use client";

import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import UserContainer from "@/components/UserContainer/UserContainer";
import Search from "@/components/Search/Search";
import { Page } from "@/components/Page";
export default function Home() {
  return (
    <Page back={false}>
      <div className="flex flex-col bg-[#FFFFFF]">
        <div className="flex flex-col items-center self-stretch bg-[#FFFFFF] h-[3449px]">
          <Header />
          <UserContainer />
          <Search />
          <Hero />
        </div>
      </div>
    </Page>
  );
}
