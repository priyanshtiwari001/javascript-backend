//* CASE 1
{
  var x = 100; // treats as a global scope.
  console.log(x);
}
console.log(x);

//* CASE 2

// function fun() {
//   var y = 200; // treats as a functional scope.
//   console.log(y);
// }
// console.log(y);

//* CASE 3

{
  console.log(z); // why do we get undefined? -> due to lexical scoping
  var z = 300;
}
console.log(z);

//* CASE 4

if (true) {
  var a = 400;
}
if (false) {
  var b = 500;
}

console.log(a);
console.log(b);

//* CASE 5
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  //console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();

//
