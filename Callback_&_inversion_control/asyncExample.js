//? Exmaple 1
// console.log("Hello World");
// setTimeout(function exec() {
//   console.log("time ends here");
// }, 0);
// console.log("Bye");

//? Exmaple 2
// console.log("Hello World");
// setTimeout(function exec() {
//   console.log("time ends here");
// }, 0);
// for (let i = 0; i < 10000; i++) {
//   //some task
// }
// console.log("Bye");

//? Example 3
console.log("Hello World");
setTimeout(function exec() {
  for (let a = 1; a <= 3; a++) {
    console.log("time ends here");
  }
}, 0);
for (let i = 0; i < 10000; i++) {
  //some task
}
console.log("Bye");
