import { create } from "zustand";
import { products as initialProducts } from "@/data/products";
import { topProducts as initialTopProducts } from "@/data/products";
import { categories as initialCategories } from "@/data/categories";
import { Product } from "@/types/product";
import { Category } from "@/types/category";

interface StoreState {
  products: Product[];
  topProducts: Product[];
  categories: Category[];
  setProducts: (products: Product[]) => void;
  setTopProducts: (products: Product[]) => void;
  setCategories: (categories: Category[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  products: initialProducts,
  topProducts: initialTopProducts,
  categories: initialCategories,
  setProducts: (products) => set({ products }),
  setTopProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
}));
