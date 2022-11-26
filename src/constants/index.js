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
  { period: 'Weekly', numberOfPayments: 52 },
  { period: 'Forthnitely', numberOfPayments: 26 },
  { period: 'Monthly', numberOfPayments: 12 },
  { period: 'Annualy', numberOfPayments: 1 },
];

export const TAB_LIST_MAP = [{ tabText: 'Income Details' }, { tabText: 'Income' }];

export const IncomeTypeEnum = Object.freeze({
  GROSS: 'Gross Income',
  NET: 'Net Income',
});
