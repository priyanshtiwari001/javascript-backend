function* fetchNextElement() {
  const x = 10;
  yield 11; // stopped the execution and comeback at there position when it was started
  console.log("entering after a yield");
  const y = x + (yield 30); // as yield so it will stop the execution and back to LINE 13
  console.log("value of  y is ", y);
}

console.log("start");
const iter = fetchNextElement(); // immediately back
console.log("called generator");
console.log("first", iter.next());
console.log("second", iter.next()); // start the execution where it was left that means it will start from LINE 3
console.log("third", iter.next(17)); //* as it will start execute where it left and also we pass a value there in LINE 5 (yield 30== 17)so (y=x+17)
//console.log('third', iter.next(17));
