console.log('Priyanshu' + { a: 100 });

// 'Priyanshu' is already a string
// {a:100} is not a primitive, so we call toPrimitve without a hint.
// means -> numbeer
// so we first call the valueOf() {a:100} -> and it returns same object.
// we call toString() -> toString return '[object Object]' which is a sting
// 'priyanshu' + '[object Object]' -> 'priyanshu[object Object]'

console.log(10 - { a: 100 });

// 10 is already a no.
//   { a: 100 } is a object so we call the toPrimtive with hint number
// first we call valueOf -> {a:100}
// second we call toString -> '[object Object]' which is primitive
// now we call toNumber on '[object Object]' which gives NaN
// 10 -NaN -> NaN

let x = {
  a: 100,
  valueOf() {
    return x.a;
  },
};
console.log(10 - x);
