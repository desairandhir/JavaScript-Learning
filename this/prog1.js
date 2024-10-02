// const cat = {
//   name: "Billa",
//   color: "gray",
//   breed: "scottish fold",
//   meow() {
//     // console.log("MEOW MEOW MEOW");
//     console.log(`my cat ${this.name} which is ${this.color} ${this.breed} says meow`);
//   },
// };

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount += 1;
    return "EGG";
  },
};
