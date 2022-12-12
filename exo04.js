function hasValidPrice(product) {
  return product && product.price && product.price >= 0;
}

const first = hasValidPrice({ product: "Milk", price: 1.5 });
const second = hasValidPrice({ product: "Cheese", price: -1 });
const third = hasValidPrice({ product: "Eggs", price: 0 });
const fourth = hasValidPrice({ product: "Cereals", price: "3.0" });
const fifth = hasValidPrice();

console.log({
  first: first,
  second: second,
  third: third,
  fourth: fourth,
  fifth: fifth,
});
/** the fourth function returns TRUE because even though the PRICE is a string.
 * the >= operator in NodeJs turn string to number and compares.
 * and so no need to manually switch the product.price into number Number(product.price) >= 0  */
