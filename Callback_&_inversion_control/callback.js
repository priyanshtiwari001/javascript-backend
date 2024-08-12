// here setTimeout is a HOF
// fun -> is a callback

setTimeout(function fun() {
  console.log("line will execute after 10 sec");
}, 10000);
