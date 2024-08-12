console.log('Priyanshu' + 'Tiwari');

// Both are already a string,
// ToPrimitive() will also return a string
// we concatenate them

console.log(undefined + '2');

// 2 is already a string
// ToString() converts both side into string
// undefined - > "undefined"
// "undefined" + "node" -> undefined2

console.log(null + 'alert');
// as one of the string is already a string, so both them become a string.
// null -> "null"
// "null" + "alert" -> nullalert

console.log('Priyanshu' + [null, undefined]);
