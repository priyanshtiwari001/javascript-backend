//how urnary opertor works

let a = 10; // 10 11 12
let b = a++; // 10 11
let c = a++ + ++b; // 11 + 11 = 22
//console.log(a, b, c);

let d = 2; // 3
let e = d++; // 2 3
let f = d * e++; //3*2
console.log(d, e, f);
