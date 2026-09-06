import { create } from "zustand";
import type { Product } from "../types/product";

type FavoritesStore = {
  favorites: Product[];

  addFavorite: (product: Product) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],

  addFavorite: (product) =>
    set((state) => ({
      favorites: [...state.favorites, product],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((product) => product.id !== id),
    })),

  isFavorite: (id) =>
    get().favorites.some((product) => product.id === id),
}));