export const TAX_BRACKETS_2023 = [
  { threshold: 11000, taxRatio: 0.1 },
  { threshold: 44725, taxRatio: 0.12 },
  { threshold: 95375, taxRatio: 0.22 },
  { threshold: 182100, taxRatio: 0.24 },
  { threshold: 231250, taxRatio: 0.32 },
  { threshold: 578125, taxRatio: 0.35 },
  { threshold: Number.POSITIVE_INFINITY, taxRatio: 0.37 },
];

export const PAYMENT_FREQUENCY_MAP = [
  { period: 'weekly', numberOfPayments: 52 },
  { period: 'forthnitely', numberOfPayments: 26 },
  { period: 'monthly', numberOfPayments: 12 },
  { period: 'annualy', numberOfPayments: 1 },
];

// const INCOME_TYPE_MAP = {
//   initial: null,
//   gross: 'gross',
//   net: 'net',
// };

export const TAB_LIST_MAP = [{ text: 'Income Details' }, { text: 'Income' }];
