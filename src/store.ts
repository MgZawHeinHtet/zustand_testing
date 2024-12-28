import { create } from "zustand";
import { Cart } from "./types/cart";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export const useCartStore = create<Cart>((set) => ({
  cart: [],
  addItems: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  removeItems : (id)=> set((state)=> ({
    cart : state.cart.filter((_,index)=> index!= id)
  }))
}));
