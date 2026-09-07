import { create } from "zustand";
import type { Product } from "../types/product";

type ProductsStore = {
  favorites: Product[];

  addFavorite: (product: Product) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

export const useProductsStore = create<ProductsStore>((set, get) => ({
  favorites: [],

  addFavorite: (product) =>
    set((state) => {
      const alreadyFavorite = state.favorites.some(
        (item) => item.id === product.id
      );

      if (alreadyFavorite) {
        return state;
      }

      return {
        favorites: [...state.favorites, product],
      };
    }),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (product) => product.id !== id
      ),
    })),

  isFavorite: (id) =>
    get().favorites.some(
      (product) => product.id === id
    ),
}));