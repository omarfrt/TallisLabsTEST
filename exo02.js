const arr = [
  [1, 2],
  [3, 4],
];
const flat = (arr) => [].concat(...arr);

console.log(flat(arr));

const flat2 = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (!Array.isArray(current)) {
      res.push(current);
      continue;
    }
    for (let j = 0; j < current.length; j++) {
      res.push(current[j]);
    }
  }
  return res;
};

console.log(flat2(arr));
