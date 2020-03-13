import numeral from "numeral";

export function formatShortNumber(value) {
  return numeral(value).format("0a");
}

export function formatMoney(value) {
  return numeral(value).format("$ 0,0.00");
}
