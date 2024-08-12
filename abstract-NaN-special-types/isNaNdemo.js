let a = "10";
let b = "abc";
let c = "priyanshu";
let d = "10" - c;

console.log(isNaN(a)); //false
console.log(isNaN(b)); // true
console.log(isNaN(c));
console.log(isNaN(d));

let x = "";
console.log(typeof x == "number" && isNaN(x) ? "NaN value" : "not a NaN");

console.log(Number.isNaN(b));
