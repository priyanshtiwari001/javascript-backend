// Inversion of control- we dont have the control of what other function is working
function download(url, cb) {
  console.log("started downloading content form ", url);
  setTimeout(function exec() {
    console.log("Downloading will start after 5s");
    const content = "ABCDEF";
    // cb(content, url);
    //cb(content, url);
  }, 5000);
}

download("www.zzz.com", function processDownload(value) {
  console.log(`Download content from url is ${value}`);
});
