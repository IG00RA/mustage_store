"use client";

import { Page } from "@/components/Page";
import Search from "@/components/Search/Search";
import TopProducts from "@/components/TopProducts";
import CategorySection from "@/Pages/catalog/CategorySection/CategorySection";
import Products from "@/Pages/catalog/ProductsList/ProductsList";
import clsx from "clsx";
import uaFlag from "@/img/flags/ua.svg";
import facebook from "@/img/social/facebook.svg";
import RatingBar from "@/components/Rating/Rating";

export default function CatalogPage() {
  const products = [
    {
      id: 1,
      category: "ФБ КИНГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 2,
      category: "ФБ САМОРЕГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по> 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 3,
      category: "ФБ АВТОРЕГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 4,
      category: "ФБ КИНГИ С 2БМ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 1,
      category: "ФБ КИНГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 2,
      category: "ФБ САМОРЕГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по> 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 3,
      category: "ФБ АВТОРЕГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 4,
      category: "ФБ КИНГИ С 2БМ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 1,
      category: "ФБ КИНГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 2,
      category: "ФБ САМОРЕГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по> 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 3,
      category: "ФБ АВТОРЕГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 4,
      category: "ФБ КИНГИ С 2БМ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 1,
      category: "ФБ КИНГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 2,
      category: "ФБ САМОРЕГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по> 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 3,
      category: "ФБ АВТОРЕГИ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
    {
      id: 4,
      category: "ФБ КИНГИ С 2БМ",
      title:
        "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории",
      originalPrice: "$12.99",
      discountedPrice: "$9.99",
      stock: 599,
      image: facebook,
      flag: uaFlag,
      alt: "Facebook logo",
    },
  ];
  const categories = [
    {
      id: 1,
      title: "Кинги",
      category: "ФБ КИНГИ",
      image: facebook,
      alt: "Facebook logo",
      link: "king",
    },
    {
      id: 2,
      title: "Самореги",
      category: "ФБ САМОРЕГИ",
      image: facebook,
      alt: "Facebook logo",
      link: "self-reg",
    },
    {
      id: 3,
      title: "Автореги",
      category: "ФБ АВТОРЕГИ",
      image: facebook,
      alt: "Facebook logo",
      link: "auto-reg",
    },
    {
      id: 4,
      title: "Кинги с 2БМ",
      category: "ФБ КИНГИ С 2БМ",
      image: facebook,
      alt: "Facebook logo",
      link: "king2",
    },
  ];

  return (
    <Page>
      <div
        className={clsx(
          "max-w-container mx-auto flex flex-col bg-background transition-padding duration-300 ease-in-out"
        )}
      >
        <Search />
        <TopProducts />
        <CategorySection categories={categories} />
        <Products products={products} categories={categories} />
      </div>
    </Page>
  );
}
