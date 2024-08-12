// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

/* //* MINE CODE 
function download(url) {
  console.log("Starting to download data from", url);
  return new Promise(function process(reslove, reject) {
    setTimeout(() => {
      console.log("downloaded completed");
      const data = "asdfgg";
      reslove(data);
    }, 6000);
  });
}

download("xyz.com")
  .then(function processDownload(data) {
    console.log("download completed with data", data);
    return new Promise(function processWrite(reslove, reject) {
      console.log("start writing ", data, " in the file");
      setTimeout(function write() {
        const fileName = "file.txt";
        reslove(fileName);
        console.log("writing the file is completed");
      }, 4000);
    });
  })
  .then(function processUpload(fileName) {
    console.log("file is uploding in newUrl  www.upload.com");
    setTimeout(function upload() {
      console.log("file is uploaded successfully", fileName);
    }, 3000);
  });
*/

function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to download data from", url);
    setTimeout(function down() {
      console.log("Downloading completed");
      const content = "ABCDEF"; // assume dummy download content
      resolve(content);
    }, 6000);
  });
}

function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started writing a file with", data);
    setTimeout(function wrtie() {
      console.log("Completed writing the data in a file");
      const filename = "file.txt";
      resolve(filename);
    }, 5000);
  });
}

function uploadData(file, url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started uploading", file, "on", url);
    setTimeout(function up() {
      console.log("upload completed");
      const response = "SUCCESS";
      resolve(response);
    }, 2000);
  });
}

download("www.xyz.com")
  .then(function processDownload(value) {
    console.log("downloading done with following value", value);
    return writeFile(value);
  })
  .then(function processWrite(value) {
    console.log("data written in the file with name", value);
    return uploadData(value, "www.upload.com");
  })
  .then(function processUpload(value) {
    console.log("we have uploaded with", value);
  });
