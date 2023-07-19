export const numberToDenomination = (number) => {
  const denominations = [
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" },
  ];

  for (let i = 0; i < denominations.length; i++) {
    if (number >= denominations[i].value) {
      const formattedNumber = (number / denominations[i].value).toFixed(1);
      return `${formattedNumber}${denominations[i].symbol}`;
    }
  }

  return number.toString();
};
