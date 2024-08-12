let value = 'hello' + {};
let value1 = {} + 'hello'; // it will throw the error in browser console as when we have the first line is an object then javascript start treats as a code block(collection of statement)
/*
To slove the above problem :
let value2 = ({}) + 'hello';
*/
let value2 = {} + 'hello';
console.log(value); ////hello[object Object]
console.log(value1); // NaN
console.log(value2);
