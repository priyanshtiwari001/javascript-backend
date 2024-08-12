function process() {
  let u = 0;
  function innerProcess() {
    u += 1;
    return i;
  }
  return innerProcess; // here i m not calling the innerprocess
}

let res = process();

console.log(res);
