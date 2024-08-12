function download(url) {
  console.log("started downloading content form ", url);
  return new Promise(function exec(reslove, reject) {
    setTimeout(function time() {
      console.log("Downloading will start after 5s");
      const content = "ABCDEF";
      reslove(content);
      reslove(content);
    }, 5000);
  });
}

//*     PROMISE CHAINING
x = download("www.xyz.com").then(function fullfillHandler1(value) {
  console.log("downloaded content from the url is1 ", value);
  return "new promise object";
});
y = x.then(function fullfillHandler2(value) {
  console.log(
    `.then promise return a  ${value} that introduce a concept of promise chaining`
  );
  return " RAM RAM";
});

y.then(function fullfillHandler3(value) {
  console.log(`${value} sareyeine`);
});
// the .then is also return a New promise object that call immediately
