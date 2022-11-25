import { TAX_BRACKETS_2023 } from '@constants';

const taxBrackets = TAX_BRACKETS_2023;

export const deriveTaxFromGross = (grossAmount, index, trackedTax) => {
  index = index || 0;
  trackedTax = trackedTax || 0;

  const currentThreshold = taxBrackets[index].threshold;
  const previousThreshold = index === 0 ? 0 : taxBrackets[index - 1].threshold;
  const currentTaxRatio = taxBrackets[index].taxRatio;

  if (grossAmount - currentThreshold > previousThreshold) {
    trackedTax += (currentThreshold - previousThreshold) * currentTaxRatio;
    index++;
    return deriveTaxFromGross(grossAmount, index, trackedTax);
  } else {
    trackedTax += (grossAmount - previousThreshold) * currentTaxRatio;
    return trackedTax;
  }
};

export const deriveTaxFromNet = (netAmount, index, trackedTax) => {
  index = index || 0;
  trackedTax = trackedTax || 0;

  const currentThreshold = taxBrackets[index].threshold;
  const previousThreshold = index === 0 ? 0 : taxBrackets[index - 1].threshold;
  const currentTaxRatio = taxBrackets[index].taxRatio;

  const bracketMaxTax = (currentThreshold - previousThreshold) * currentTaxRatio;
  const bracketMaxNet = currentThreshold - bracketMaxTax;

  if (netAmount - bracketMaxNet > 0) {
    trackedTax += bracketMaxTax;
    index++;
    netAmount = netAmount - bracketMaxNet;
    return deriveTaxFromNet(netAmount, index, trackedTax);
  } else {
    trackedTax += (netAmount / (1 - currentTaxRatio)) * currentTaxRatio;
    return trackedTax;
  }
};

export const buildIncomeData = (annualAmounts, paymentFrequency) => {
  let incomeData = [];
  function IncomeFigures(period, gross, tax, net) {
    this.period = period;
    this.gross = gross;
    this.tax = tax;
    this.net = net;
  }
  paymentFrequency.forEach(item => {
    incomeData.push(
      new IncomeFigures(
        item.period,
        annualAmounts.gross / item.numberOfPayments,
        annualAmounts.tax / item.numberOfPayments,
        annualAmounts.net / item.numberOfPayments,
      ),
    );
  });
  return incomeData;
};
