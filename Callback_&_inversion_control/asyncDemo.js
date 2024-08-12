function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 1000000000; i++) {
    //some tasks
  }
  console.log("loops end");
}
function timeConsumingByRuntimeFeature0() {
  console.log("starting timer0");
  setTimeout(function exec0() {
    console.log("completed the timer0");
    for (let i = 0; i < 1000000000; i++) {
      //some tasks
    }
  }, 5000); // 5 sec timer
  console.log(" timer ends here0");
}
function timeConsumingByRuntimeFeature1() {
  console.log("starting timer1");
  setTimeout(function exec1() {
    console.log("completed the timer1");
  }, 0); // 0 sec
  console.log(" timer ends here1");
}
function timeConsumingByRuntimeFeature2() {
  console.log("starting timer2");
  setTimeout(function exec2() {
    console.log("completed the timer2");
  }, 200); // 2ms timer
  console.log(" timer ends here2");
}
console.log("Hello!");

timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();

console.log("bye");
