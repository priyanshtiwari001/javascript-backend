//* ONE

console.log("abc" == "345");
/*
- as both values have same type then it calls strict comparison operator.
- then it will check any one value is Number
    - if it is NUmber then return NAN.
- "abc" == NaN  ==> false
*/

//* TWO
console.log(null == undefined);
console.log(undefined == null);

//* THREE

console.log(30 == "30"); // ToNumber("30")=> 30  > 30 == 30
console.log(30 == "abc"); // ToNumber("abc")=> NaN  > 30 == NaN
console.log("45" == 65); // ToNumber("abc")=> NaN  > 30 == NaN

//* FOUR

console.log(true == "1");
console.log(false == 0);

//* FIVE

console.log("[object Object]" == { a: 10 }); // toPrimitive({a:10}) -> : hint:number -> call -> valueOf({a:10}) -> still an object -> call toString() -> [object object] ==> "463" == [object object] => false
console.log(46 == { a: 10 });

//* SIX

console.log(null == NaN);
