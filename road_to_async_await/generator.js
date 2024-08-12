function* fetchNextElement() {
  console.log("I am inside the generator function");
  yield 1; // it is simpler to return but not return. whenever js see yield it will stop the exceution and not call further
  yield 2;
  console.log("somewhere in the middle");
  yield 3;
  yield 4;
}
const iter = fetchNextElement();
//* the execution of the generator doesn't start at the time of calling the fun

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
