'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const sale = prices.map(halfPrice);
function halfPrice(number) {
  const obj = {
    price: number,
    salePrice: number / 2,
  };
  return obj;
}
console.log(sale);
const price = prices.map(stringArr);
function stringArr(number) {
  const newString = number.toString();
  const result = '$' + newString;
  return result;
}
console.log(price);
