// write your code here
var http = require('http');

//create a server object:
http.createServer(function (request, response) {
  response.writeHead(200,{'Content-Type':'text/plain'}); //write a response to the client
  response.end("Hello World"); //end the response
}) 
.listen(8080,'127.0.0.1'); //the server object listens on port 8080
console.log('Server is running at port # 8080');