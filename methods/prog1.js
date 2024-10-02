// // we can add functions as properties on objects.
// // We call them methods

// const math = {
//   multiply: function (x, y) {
//     return x * y;
//   },
//   divide: function (x, y) {
//     return x / y;
//   },
//   square: function (x) {
//     return x * x;
//   },
// };

// console.log(math.divide(2,3))

const math = {
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
  square(x) {
    return x * x;
  },
};

console.log(math.multiply(2, 3));
