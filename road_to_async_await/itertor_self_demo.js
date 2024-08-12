function fetchNextElement(arr) {
  let idx = 0;

  function next() {
    if (idx == arr.length) {
      return { value: undefined, done: true };
    }
    const nextElement = arr[idx];
    idx++;
    return { value: nextElement, done: false };
  }

  return { next };
}

//let assume someone created the fetchNextElement function so we are just using
const autoFetcher = fetchNextElement([99, 11, 22, 33, 0, 12]); //
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());

// broswer example

let arr = [1, 2, 5, 4, 37];

let iterator = arr[Symbol.iterator];

console.log(iterator.next());

// every itertor give you next() function. calling the next function give you next function

/* 
Itertor{

value: return next value
done: indictor that tell us whether all element are consumed or not
next: function()


}

*/
