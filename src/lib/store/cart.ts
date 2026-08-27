import { create } from "zustand";
import type { Product } from "@/lib/mock/catalog";

export type CartLine = {
  product: Product;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  add: (product: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>((set) => ({
  lines: [],
  add: (product, qty = 1) =>
    set((state) => {
      const existing = state.lines.find((l) => l.product.id === product.id);
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.product.id === product.id ? { ...l, qty: Math.min(l.qty + qty, 99) } : l,
          ),
        };
      }
      return { lines: [...state.lines, { product, qty }] };
    }),
  setQty: (id, qty) =>
    set((state) => ({
      lines:
        qty <= 0
          ? state.lines.filter((l) => l.product.id !== id)
          : state.lines.map((l) => (l.product.id === id ? { ...l, qty: Math.min(qty, 99) } : l)),
    })),
  remove: (id) => set((state) => ({ lines: state.lines.filter((l) => l.product.id !== id) })),
  clear: () => set({ lines: [] }),
}));

export const DELIVERY_FEE = 2;

export function cartSubtotal(lines: CartLine[]) {
  return lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
}

export function cartCount(lines: CartLine[]) {
  return lines.reduce((sum, l) => sum + l.qty, 0);
}
