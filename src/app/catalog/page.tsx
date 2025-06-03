"use client";

import { Page } from "@/components/Page";
import Search from "@/components/Search/Search";
import TopProducts from "@/components/TopProducts";
import CategorySection from "@/Pages/catalog/CategorySection/CategorySection";
import Products from "@/Pages/catalog/ProductsList/ProductsList";
import clsx from "clsx";

export default function CatalogPage() {
  return (
    <Page>
      <div
        className={clsx(
          "max-w-container mx-auto flex flex-col bg-background transition-padding duration-300 ease-in-out"
        )}
      >
        <Search />
        <TopProducts />
        <CategorySection />
        <Products />
      </div>
    </Page>
  );
}
