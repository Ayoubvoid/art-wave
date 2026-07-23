export const STORE_CURRENCIES = ["USD", "EUR", "GBP", "MAD"] as const;

export type StoreCurrency = (typeof STORE_CURRENCIES)[number];
