const obj = { a: 1, b: 2 };
let arr = [];
const toArray = (obj) => {
  arr = Object.entries(obj);
  return arr;
};
console.log(toArray(obj));
