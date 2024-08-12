// function declaration
/*function funName() {
  ///
}

// FUNCTION EXPRESSION
var gun = function () {
  //implementation
};
(function () {
  //implementation
});

// PASSING FUNCTION AS A ARGUMENT

function fun() {
  console.log('Fun called');
}

var gun = function (fn) {
  console.log('inside gun');
  fn();
  console.log('leaving gun');
  console.trace(); // it is point from where function is called

gun(fun);

// Function retruning a function
function aplha() {
  console.log('aplha');

  return function Wapis() {
    console.log('wapis aagya');
  };
}
*/
// good question
// b=3
// var a=b;
(function () {
  var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
