function makeBetween(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetween(0, 14);
const isAdult = makeBetween(14, 40);
const isSenior = makeBetween(40, 80);

console.log(isChild(2));
