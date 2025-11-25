"use client";

import { Image } from "@/lib/DummyData";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

/* ---------------------------
   TYPES
--------------------------- */

export type Product = {
  id: string;
  name: string;
  price: number;
  image?: Image[];
};

export type CartItem = Product & {
  quantity: number;
};

interface CartState {
  showCart: boolean;
  setShowCart: (value: boolean) => void;

  cartItems: CartItem[];
  totalPrice: number;
  totalQuantities: number;

  qty: number;
  incQty: () => void;
  decQty: () => void;

  onAdd: (product: Product, quantity: number) => void;
  onRemove: (product: Product) => void;
  toggleCartItemQuantity: (id: string, type: "inc" | "dec") => void;
  clearCart: () => void;
}

/* ---------------------------
   ZUSTAND STORE
--------------------------- */

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      showCart: false,
      setShowCart: (value: boolean) => set({ showCart: value }),

      cartItems: [],
      totalPrice: 0,
      totalQuantities: 0,

      qty: 1,
      incQty: () => set((state) => ({ qty: state.qty + 1 })),
      decQty: () =>
        set((state) => ({ qty: state.qty > 1 ? state.qty - 1 : 1 })),

      onAdd: (product: Product, quantity: number) => {
        const items = get().cartItems;
        const existing = items.find((item) => item.id === product.id);

        let totalPrice = get().totalPrice + product.price * quantity;
        let totalQuantities = get().totalQuantities + quantity;

        if (existing) {
          const updatedItems = items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
          set({ cartItems: updatedItems, totalPrice, totalQuantities });
        } else {
          const newItem: CartItem = { ...product, quantity };
          set({
            cartItems: [...items, newItem],
            totalPrice,
            totalQuantities,
          });
        }

        toast(`Product ${product.name} added to cart.`)
      },

      onRemove: (product: Product) => {
        const items = get().cartItems;
        const item = items.find((i) => i.id === product.id);
        if (!item) return;

        const updatedItems = items.filter((i) => i.id !== product.id);
        const totalPrice = get().totalPrice - item.price * item.quantity;
        const totalQuantities = get().totalQuantities - item.quantity;

        set({ cartItems: updatedItems, totalPrice, totalQuantities });
      },

      toggleCartItemQuantity: (id: string, type: "inc" | "dec") => {
        const items = get().cartItems;
        const updatedItems = items.map((item) => {
          if (item.id !== id) return item;

          const newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
          if (newQty < 1) return item;

          let totalPrice = get().totalPrice;
          let totalQuantities = get().totalQuantities;

          if (type === "inc") {
            totalPrice += item.price;
            totalQuantities += 1;
          } else {
            totalPrice -= item.price;
            totalQuantities -= 1;
          }

          set({ totalPrice, totalQuantities });

          return { ...item, quantity: newQty };
        });

        set({ cartItems: updatedItems });
      },

      clearCart: () =>
        set({ cartItems: [], totalPrice: 0, totalQuantities: 0 }),
    }),
    {
      name: "cart-storage", 
    }
  )
);
