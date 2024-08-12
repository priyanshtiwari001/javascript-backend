//CASE 1
/*
{
  let x = 10;
  console.log(x);
}
//console.log(x); // as let is the block scope

//CASE 2
function fun() {
  console.log(y); // Cannot access 'y' before initialization but in VAR we can get undefined
  let y = 8;
  console.log(y);
}
fun();

//CASE 3

// we can redeclare the var variable as a same name but cant possible in let

var x = 1; // will not throw the error
var x = 3;

//let z = 8; //will  throw the error
let z = 11;

// TEMPORAL DEAD Zone

{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}

{
  // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
}
*/

function test() {
  var foo = 33;
  console.log(this.foo);
  if (foo) {
    console.log(this.foo);
    let foo = foo + 55; // ReferenceError
  }
}
test();
