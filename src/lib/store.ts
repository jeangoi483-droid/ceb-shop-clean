import { create } from "zustand";

interface CartState {
  cart: any[];
  addToCart: (item: any) => void;
}

export const useCart = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
}));
