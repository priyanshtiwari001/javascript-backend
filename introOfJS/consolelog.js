console.log('hello');
console.log('world');
// so above consoles gives the output in new line.
console.log(null, undefined, 23, 'hello world', { priyanshu: 343 });

//below two statements return the value into one one without space btw them. and they are belong to nodejs so if we try to do that in the browser then we get Error.
process.stdout.write('Hello');
process.stdout.write('world');
console.log();

let a = Math.floor(5 / 3);
console.log(a);
