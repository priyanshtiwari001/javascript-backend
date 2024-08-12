//? **********CASE 1************
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
  return new Promise(function executor(reslove, reject) {
    for (let i = 0; i < 100000000; i++) {} //* as creating of promise is a sync in nature so it will execute the for loop until it completed after that it will read from next line of code
    let num = getRandomInt(10);
    if (num % 2 == 0) {
      //if no is even
      reslove(num);
    } else {
      //if no is odd
      reject(num);
    }
  });
}

//? **********CASE 2************

function createPromiseWithTimeout() {
  return new Promise(function executor(reslove, reject) {
    setTimeout(function () {
      //* as setimeout is async so we get promise as pending until time is completed.
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        //if no is even
        reslove(num);
      } else {
        //if no is odd
        reject(num);
      }
    }, 4000);
  });
}

//? **********CASE 3************
//* the state of the promise only change if we call the reslove or reject the state otherwise it will remain always in pending state.
function createPromiseWithNoResloveAndReject() {
  return new Promise(function executor(reslove, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        //if no is even
        console.log("fullfilling");
        return num;
      } else {
        //if no is odd
        console.log("rejecting");
        return num;
      }
    }, 4000);
  });
}

//? **********CASE 4************

//* once we reslove or reject OR once we update the state of the promise it will never updated again.
function createPromiseWithMoreThanOneResloveAndReject() {
  return new Promise(function executor(reslove, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        //if no is even
        console.log("fullfilling");
        reslove(num);
        console.log("reloving again");
        reslove(10);
        return num;
      } else {
        //if no is odd
        console.log("rejecting");
        reject(num);
        console.log("rejecting again");
        reject(10);
        return num;
      }
    }, 4000);
  });
}

// //?case 3

// function getSumOfTwoNumber(a, b) {
//   return a + b;
// }

// function createPromise(c, d) {
//   return new Promise(function (reslove, reject) {
//     let num = getSumOfTwoNumber(c, d);
//     if (num > 10) {
//       reslove(num);
//     } else {
//       reject(num);
//     }
//   });
// }
