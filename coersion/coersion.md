## [Coersion](./coersion/)

[Question Pratice for Coresion](https://eishta.medium.com/javascript-tricky-questions-type-coercion-7fe47b4c488e)

Four Pillars - OOPS, COERSION, SCOPES, ASYNC NATURE

- Operations
  - 1 + 1 → 2
  - "1" + 1 → "11"
  - "1" - 1 → 0
- Javascript is not weird, it's just people have never read the documentation.
  - defined in ECMA Script

**Coersion** stands for type-interconversion. They are 2 types of type-interconversion.

    - implictly - language automatically converts.
    - explicitly - we have to manual convert.

- In other language, like java, C++ and C - _types are exist for the variable_ in which we are assigning the value.
- **In JS, types are exist for the Values not for the variable**

Let Dicuss,

## **How JS handles the coersion?**

To understand coersion, better you should know about the Abstract Operation:

- [[Abstract Operations]] [https://262.ecma-international.org/10.0/#sec-abstract-operations]

  - These are some set of algorithms, that is present in the ecmascript docs, but they are not available for usage in ecmascript i.e. we as developers cannot use these operation directly.
  - They are mentioned in the docs to help the documentation only.
  - In the ecma docs there are a lot of things that are done by the language internally. To explain these internal details of how and what language is doing, we have abstract operations mentioned in the docs.

- Abstract Operation we should know about:

  - ToPrimitive[input,preferredtype] [https://262.ecma-international.org/10.0/#sec-toprimitive]
    - toPrimitve takes an input argument and a optional preferred type.
    - this operation converts the input into non-object(primitve) type value.If it can't convert then throw error. If an argument is capable of getting converted into more than one primitive type then the function uses preferred type argument to resolved that.
    - working:
      - if preferredtype is not given, then hint = "default".
      - if preferredtype is string, then hint = "string"
      - if preferredtype is number, then hint = "number"
      - if hint is "deafult", hint = "number"
      - After that all condition , it calls OrdinaryToPrimitive
  - OrdinaryToPrimitive[input,hint] [https://262.ecma-international.org/10.0/#sec-ordinarytoprimitive]

    - OrdinaryToPrimitive is called with arguments input and hint.
    - if hint/perferred type -> "number" then input arg , we call "valueOf" function to get a no.
    - if it dont give a primitive , we can "toString" function. after that it still returning an object then we throw a error.
    - Otherwise, If hint arg -> "string", then we first call "toString" then "valueOf".after that it still returning an object then we throw a error.
    - toString() & valueOf is not a abstract operation, then we can call them.
    - by default -> toString() return - [object Object]
    - by default -> valueOf() return - same object
    - for Arrays by deafault toString() -> value without brackets.
    - for ValueOf() -> return same array

  - ToString() > [https://262.ecma-international.org/10.0/#sec-tostring]

    - we can use + operator to mimic ToString().
    - ToString operation
      1. get the values.
      1. check and coverts into ToPrimitive().
      1. after convertion, If it is string value on left side or right side
      1. then it converts both side into string and contenate the values.
      1. IF not a string, then converts into a ToNumber.
      1. then return addition of number.
    - undefined -> "undefined"
    - null -> "null"
    - Boolean -> true > "true & false > "false"
    - Symbol - > Throw typeError
    - Object - 1. check in ToPrimitve then again checck in ToString
    - Number:
      - 3.45 -> "3.45"
      - 0, -0 -> 0
      - [], [null] ,[undefined] -> ""
      - [1,2,3] -> "1,2,3"
      - [null,undefined] - ","
      - [ [],[],[] ] - ",,"
      - [,,,] - ",,"

  - ToNumber() > [https://262.ecma-international.org/10.0/#sec-tonumber]

    - We can use minus(-) operator to mimic ToNumber().
    - Subsraction operation always converts the operand into number.
    - undefined -> NaN
    - null -> +0
    - Boolean -> true > 1 and false > +0
    - Symbol - throw Error expection
    - Object - 1. check in ToPrimitve then again checck in ToNumber
    - String:
      - "abc" - 1 > NaN(for Minus Operation)
      - "0" , "0.0" , " ", [null] , [undefined] , ["0"] , [""],[] > zero
      - "22","23.5" > 22,23.5 - [1,2,3] , "." > NaN
      - '0xf' -> 14 as it denotes hexadecimal no.
      - '0o11' -> 9 as it denotes octal decimal.
      - 10 - {"A":12} > NaN ?? hint -> number then calling valueOf() if it is still an Object then call toString();

  - ToBoolean : [https://262.ecma-international.org/10.0/#sec-toboolean]

    - the ToBoolean abstract operation converts the given type to a boolean type. ToBoolean works
      differently when compared to ToString and ToNumber.
    - It maintains a list of values which recieves as an argument FALSE and everything apart from the list of values return TRUE
    - List of falsy values :- NaN,null,undefined,""(empty string),false, +0,-0 .
    - apart from the above list if we get any value it return TRUE.
    - We can Test the ToBoolean opeation by using the logical NOT opeator(!)
    - [Examples](./ToBoolean_demo.js)

- [Doubts](./doubt.js);

```
let value = 'hello' + {}; // hello[object object]
let value1 = {} + 'hello'; // NaN
```

---

#### **Q: What is the difference between ==(abstract equality comparsion) and ===(Strict equality comparsion ) operator**?

-[https://262.ecma-international.org/10.0/#sec-abstract-equality-comparison]

- Actually both == and === checks the types but the difference between is that both of them do something different after checking the type.
-
- The one difference is that

  - abstract comparsion -> do coresion if types are not same.
  - strict comparsion - do not coresion . it will do below step:
    - == does typing checking and if types are same, It calls === .
    - === checks types and if types is not same then it return false.

- Strict Equality Comparison

  - X or Y is different type , return false
  - if either is a NaN
    - it become > return false
  - if X and Y is same, return true
  - if either one is a +0,-0 then return true.
  - if it is an object then return false.
  - Other then Number then it will call the SameNonNumberValue(https://262.ecma-international.org/10.0/#sec-samevaluenonnumber)

- [Abstract Equality Comparison](../abstract-NaN-special-types/abstractEqualityDemo.js)
  - if type X or type Y have same type check.
    - then perform the strick Equality comparison.
  - if X=null or Y=undefined then return TRUE or vice-versa.
  - if X=number or Y= string then return the result of the comparison x == ToNumber(y)
  - If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y or vice-versa
  - if X = Boolean, then return ToNumber(x) == y or vice-versa
  - If X = either String, Number, or Symbol and Y=Object, return the result of the comparison x == ToPrimitive(y).
  - other than above return false.

#### NaN (not a Number)

- typeOf NaN => return Number.
- it doesn't actually mean not a number, rather than it gives a notion of an Invalid Number.
- NaN is the only value in Js that don't flow indentity property that is not equal itself.
  - NaN == NaN or NaN === NaN return False.
  - [isNaN()](../abstract-NaN-special-types/isNaNdemo.js) - to check whether a value is NaN or not. but it have some issue.
    - this isNaN function corerses(usko type check krta h) the arg before checking for NaN. Now string is not a NaN, right?? but when we converted string like "abc" to a number it become NaN, hence isNaN return true.
    - solution : [Number.isNaN()](https://262.ecma-international.org/10.0/#sec-number.isnan) as it doesn't allow coresion
