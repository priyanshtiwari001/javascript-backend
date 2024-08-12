console.log(12 - 4); // as both are already a number so no coversion will occur . it subtracts.
console.log(undefined - 3);
// as undefined is not a vaild number so  we make it undergo ToNumber() abstract operation .
// ToNumber(undefined) -> NaN
// NaN -2 -> any number goes with NaN operation it results > NaN
// NaN - 2 -> NaN

console.log(null - 5);
//null is not a valid number so we make it undergo ToNumber() abstract operation.
// toNumber(null) -> +0
// 0 - 5 -> -5

console.log('123' - 3);
// '123' is a string number, so it undergo ToNumber() abstract operation.
// ToNumber('123') -> 123
// 123 - 3 > 120

console.log('12de' - 3);
// '12de' is a string, so it undergo ToNumber() abstract operation.
// ToNumber('12de') -> NaN coz this string cannot be parsed as a Number.
// NaN - 3 -> NaN

//console.log(123 - Symbol(30)); // TypeError

console.log(122 - true);
// true is a boolean, so it undergo ToNumber() abstract operation
// ToNumber(true) > +1;
//123 - 1 -> 122

console.log('0xf' - 1);
// '0xf' is a string,  but in starting we have '0x' which denotes the start of the hexadecimal,
// so if we can convert this string into a vaild hexaDecimal then  it would undergo ToNumber() abstract operation.
// ToNumber('0xf') -> 15
// 15-1 > 13

console.log('0xz' - 1);
// '0xz' is starting with 0x so it denotes hexadecimal but z is not a hexadecimal no.
// ToNumber('0xz') -> NaN
// NaN - 1 -> NaN

console.log('0o11' - 1);
// '0o11' is a vaild octal decimal no.
// ToNumber('0o11') -> 9
// 9 - 1 -> 8
