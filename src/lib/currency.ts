import { create } from "zustand";

export const CURRENCIES = {
  USD: { symbol: "$", rate: 1, locale: "en-US" },
  EUR: { symbol: "€", rate: 0.92, locale: "de-DE" },
  GBP: { symbol: "£", rate: 0.79, locale: "en-GB" },
  TZS: { symbol: "TSh ", rate: 2600, locale: "en-TZ" },
} as const;

export type CurrencyCode = keyof typeof CURRENCIES;

type CurrencyState = {
  code: CurrencyCode;
  setCode: (code: CurrencyCode) => void;
};

export const useCurrency = create<CurrencyState>((set) => ({
  code: "USD",
  setCode: (code) => set({ code }),
}));

export function formatPrice(usd: number, code: CurrencyCode) {
  const { symbol, rate } = CURRENCIES[code];
  const value = usd * rate;
  const fractionDigits = code === "TZS" ? 0 : 2;
  return `${symbol}${value.toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })}`;
}

export function usePrice() {
  const code = useCurrency((s) => s.code);
  return (usd: number) => formatPrice(usd, code);
}
