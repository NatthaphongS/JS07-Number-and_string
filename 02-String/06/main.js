function extractCurrencyValue(dollar, rate) {
  const dollarValue = dollar.slice(1);
  return `THB${dollarValue * rate}`;
}

console.log(extractCurrencyValue("$120", 30));
