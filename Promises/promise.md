### Promise

- it enchances the readibility of code.
- it solves th problem of Iversion of control(IOC).
- In JS, promises are special type of objects that get you return immediately when we call them.
- Promises acts as a placeholder(a value will come till yet you can stay behalf of me) for the data , we hope to get back sometime in future.
- in these promise object, we can attact the functionality, we want the execute once the feature task is done.
- once the future task is done, then the promise will give automically exceute the attached functionality.

- To understand promise better you should know below points:

  - **How we can create the promise?**
    - creating of a promise object is Synchronous is nature.
    - promise have two properties insise promise when we call -> state,value
      Promises property have have 3 states:
      1. Pending - when we create the promise object this is a deafault state. It represents the _work in progess_
      2. fullfilled - if operation is successufully.
      3. rejected - if operation is successufully.
    - [syntax of promise](./syntaxPromise.js)
    - whenever in implemenation of exectuor callback , you call the reslove function, the promise goes to a fullfilled state. or if you call the reject function, the promise goes return the rejected state or if you dont call anything, promise alway return the pending state.
    - With what ever argument we called get assigned to value property.
    - [Casses of promises](./example1.js)
  - _Quick Summary_

    - at a time, when the constuctor genrates a new Promise object , It also generates a pair of function called resloved and reject.
    - Generally the executor callback wraps somes async / sync function.
    - the exectuor is a sync function

  - **How we can consume the promise?**
    - \*At any point of tine, if event loop have a choose to pick from macrotask queue/callback queue or microtask queue
