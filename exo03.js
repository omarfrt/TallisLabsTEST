const cars = [
  {
    stories: 3,
    door: "orangered",
  },
  {
    stories: 5,
    door: "blue",
  },
  {
    stories: 18,
    door: "blue",
  },
];
const countByValue = (door) => {
  let res = [];
  cars.forEach(function (a) {
    if (!this[a.door]) {
      this[a.door] = {
        door: a.door,
        stories: 0,
      };
      res.push(this[a.door]);
    }
    this[a.door].stories += a.stories;
  }, []);
  return res.find((houses) => houses.door === door);
};
console.log(countByValue("blue"));
