export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export const localeFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
});
