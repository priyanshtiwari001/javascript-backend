function fetchData(url) {
  return new Promise(function (reslove, reject) {
    console.log("start downloading here", url);
    setTimeout(function () {
      let data = "dummy data";
      console.log("download completed");
      reslove(data);
      //console.log(" A download completed");
    }, 7000);
  });
}

console.log("Start");
let promiseObj = fetchData("skfbjkdjbfv");
promiseObj.then(function A(value) {
  console.log("value is", value);
});
console.log("end");
