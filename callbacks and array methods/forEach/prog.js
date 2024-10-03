const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 8];

// function print(element) {
//   console.log(element);
// }
// numbers.forEach(print);

// numbers.forEach(function(el){
//     console.log(el);
// })

numbers.forEach(function (el) {
  if (el % 2 == 0) {
    console.log(el);
  }
});
