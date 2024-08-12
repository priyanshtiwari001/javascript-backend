### Scopes

- ## What do you mean by the word scope?
  - in simple word, scope is simply means where to look for something or Scope determines the accessibility (visibility) of variables or expressions.
- AS a programmer, what we are looking for?
  - we are looking for variable and function
- In js, we have more an less three types of scopes.

  - Global,Function,block scopes

- **Global Scope**

  - If a var is present in global scope then it is accessible from everywhere from the Js file.
  - [File](./GlobalScopeDemo.js)
  - _How we define the varibale in global scope?_
    - there are many way,
      1.  to declare/define outside in any function or block.

- **Function Scope**

  - When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.
  - [File](./FunctionScopedemo.js)

- **Block scope**

  - in JS, we can use the pair of curly braces to declare/define a block(collection of statement).
  - if a var/fun can be only accesscible from inside the block then it will be having the block scope.
  - [File](./blockScopeDemo.js)

---

#### What is th difference between let,var,const?

- [**VAR**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
  - whenever, we use var anywhere inside the a function, the variable gets by default function scope.
  - if it is used outside the function, no matter if it is enclosed in a block or not, it will give the variable global scope.
  - [File](./varDemo.js)
  - we cannot use the the default behaviour of var with "use strict"
  ***
- [**Let**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

  - we can re-initial the value in let variable. Whenever we initials the variable with let, it always gets the scope of enclosing block or block scope.
  - if we declare let outside the block, then it doesn't get complete global scope.
  - _If we initials the variable with let outside any block, then it will not accessible completedly in the gobal scope but if we do with VAR it will do_
  - [File](./letDemo.js)
  - **Temporal dead zone** - A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the place where the variable is declared and initialized.
  - inside TDZ, value has not been initialized to the variable and if we try with LET it will throw refernceError. but in case of VAR, we get undefined
  - Value is initialized with value when the code is reaches where the variable is declared.
  - The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position)

- _Comparation between **var** and **let**_ ::

  - let declaration are scoped to block as well as function.
  - let can only accessible after the declaration is reached(temporal dead zone). for this reason, it is also called the non-hoisted.
  - let cannot redeclared by with same name in same scope.
  - let begins declarations, not statements. That means you cannot use a lone let declaration as the body of a block (which makes sense, since there's no way to access the variable).
  - eg : if (true) let a = 1; // Error

  ***

  - [**Const**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
    - The const declaration creates block-scoped constants, much like variables declared using the let keyword.

- The value of a const can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration).
- However, if a constant is an object or array, its properties or items can be updated or removed.
  **Properties of Const**

  - Cannot be reassigned.
  - It’s Block Scope
  - It can be assigned to the variable on the declaration line.
  - It’s a Primitive value.
  - The property of a const object can be changed but it cannot be changed to a reference to the new object
  - The values inside the const array can be changed, it can add new items to const arrays but it cannot reference a new array.
  - Re-declaring of a const variable inside different block scopes is allowed.
  - Cannot be Hoisted.
  - Creates only read-only references to value.

- **Strict mode**("use strict")
  - JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript.
- Strict mode makes several changes to normal JavaScript semantics:
  - Eliminates some JavaScript silent errors by changing them to throw errors.
  - Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
  - Prohibits some syntax likely to be defined in future versions of ECMAScript.
- auto-global is not possible in strict mode

#### How Javascript parses the code??[(jonas)https://medium.com/@obrm770/javascript-under-the-hood-8cec84bbfd64]

- as we know that js is not the interpreted. it definitly hybrid i.e complier + interpeter.
- whenever we tried to execute the js code, JS first parses the whole code in the parsing phase it assign the scopes to the variable/function.once that done ,then it reads and then executes the code.

- so every variable in your code will be used one of the following ways:

  1. either it will be getting the value assign i.e it is used as a target[x] (x=10)
  2. or it will used to reterive a value i.e it use as a source[x treats as a source]. (y=20 +x)

- What JS does is,

  - it will start the parsing phase. Outside everything, it maintain global scope but when a moment, it goes to functional scope, it starts maintaining scope of that function also.

- In pharsing phase,
  - JS looks for formal declearation only(_when we define the variable using let/const/var or also when initials function declared_)
  - in this phase, we only allocates the scopes.
  - the moment when we go to the function, we maintain the new scope as well that is function scope.
- In Execution phase,

  - we assign the value to the variable and auto-global is also happens in exceution phase
  - **auto-globals**-
    - In JS,if we keep searching the scopes of the variable in outer scopes and no-where find it, we automatically consider in the global-scope.
    - This happens during execution phase.
    - It works as only target refers

- Undefined vs undeclared

  - undefined is the variable state when the scope is already know about it but in the execution phase , we have not allocated his value.
  - undeclare is the variable state when we never formally declared the a variable and before assign it a value so that it has chase to become auto-global.
  - [File](./autoGlobal.js)

  - Hoisting
    - Having the access of variable or function before declaring.
    - It is a direct consequence of lexical parsing that happened in JS due to which we are able to access some function or variable before declaring them which gives us a notion that they moved up in the file

- IIFE(Immediately invoke function expression)
  - IIFE are functions that can be stated as expressions or normal declarations and use the anonymous property of the function expression to execute its code. If you want to execute a function immediately after the declaration, use IIFE. This is executed by wrapping the anonymous function in parentheses and ending it with a semicolon:

#### Function Expression

Functions are essential building blocks in JavaScript, they are packed with logic for performing tasks. A function can be likened to a procedure that performs a task or calculates a value. However, for this procedure to be considered as a function, it needs to take some input and return an output.

Refer this [Different Ways to Declare Functions - Beginner JavaScript - Wes Bos](https://wesbos.com/javascript/02-functions/different-ways-to-declare-functions)

**different ways a function can be declared in JavaScript:**

- Function Expression
  - A function can be declared using a function expression. It is declared quite differently from the general syntax because it uses a variable to denote the name of the function. This variable comes before the keyword `function`.
- Anonymous Functions
  - Anonymous function declaration allows function names to appear hidden in the declaration itself. In the general function declaration syntax, the function name is attached to the function keyword, but an anonymous function is declared using only the function keyword and a parenthesis.
- **Immediately Invoked Function Expression**
  - IIFE are functions that can be stated as expressions or normal declarations and use the anonymous property of the function expression to execute its code. If you want to execute a function immediately after the declaration, use IIFE. This is executed by wrapping the anonymous function in parentheses and ending it with a semicolon:
- Constructor Functions
- Getter Functions
- Hoisting
- Arrow Functions

  - This is a feature available in the ES6 version of JavaScript and as such has not stayed in the space for as long as the other features in the function declaration. It is generally a cleaner way of creating JavaScript functions and it is similar to the function expression.

- [file](./functionExpression.js)
