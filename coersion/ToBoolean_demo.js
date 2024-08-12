console.log(!0);
// 0 -> falsy value
// ToBoolean(0) -> false
// !false -> true

console.log(!-4);
// -4 -> truthy value
// Toboolean(4) -> true
// !true -> false

console.log(!{});

// {} -> truthy
// Toboolean({}) -> true
// !true -> false

console.log(!console.log()); // return console.log(!undefined)
console.log(!console.log(0));

console.log(null == false); // false
console.log(null == true);  // false

// Why ?

// Type coercion makes false = +false = 0, but this doesn’t happen with null as null is only comparable with undefined and is not coerced to 1 or +0.