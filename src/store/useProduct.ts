import { Product } from './../types/product'
import type { Product } from '../types/product'
import { create } from 'zustand';


type productsStore = {
    Products: Product[];
    addFavorite: (Product: Product) => void;
    removeFavorite: (id:number) => void;
    isFavorite(id: number) => boolean;

};

export const usePRoduct = create<productsStore>((set, get)=>({
  favorites: [],
  addFavorite: (product) =>
    set((state)=>{
      const alreadyExist =state.favorites.some(
        (favorites) => favorites.id === product.id
      );
      if(alreadyExist){
        return state;
      }
      return{
        favorites: [...state.favorites, product]
      };
    }),
    removeFavorite: (id)=>
      set((state)=>({
        favorites: state.favorites.filter(
          (Product) => p
        )
      }))
}))
}
