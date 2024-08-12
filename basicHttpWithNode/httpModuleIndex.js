const http = require('http'); // require the http module

const PORT = 3000;
// using the createServer function we can actually create a basic http server using http module
// this fun returns a server object and takes a callback as a argument
//! This function creates a server object but not start the server

const server = http.createServer( function listner(request,response){
    /** 
     * 
     *  request --> we will able to get details of upcoming request. --> object
     *  response -->  we will be able to configure what response we need to send for incoming http request --> object
    */
    
    // this callback is a kind of listner function that is going to collect
    //  every http request that we will make to our server
if(request.url == '/home'){
  // this block when exceuted when /home block we trigger
  // if we want to send the request in chunk by chunk so in http module we have a method for that response.write() that do the same but to end the resullt we need to add respnse.end() at last to see the result
  response.write("First response");
  response.write("First response");
  response.end("welcome to home")
}

//! how we can send a html file on this setup?
console.log('Incoming request detial -->', request);
console.log('Response object details -->',response);
  console.log('Request recieved!!')

});


server.listen(PORT,function exect(){
    // once we successfully boot up the sever on the given port, this callback will be exceuted.
    console.log(`Server is up and running on the ${PORT}`)
})



//** 127.0.0.1 --> this is a loop back through which we can communicate to our own machine 
// When we call locahost it alwasy do a get request.
// also called socket address


