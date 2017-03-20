//Require the file system module
var fs = require('fs');


//Create a writeable stream (i.e. a stream we can write to, which will go to ./out.txt)
var file = fs.createWriteStream('./out.txt');

//Process.stdin (opposite of process.stdout) is a readable stream, that reads data that we input into the terminal

//So here when we read data from process.stdin.on we write that data to our file, the writable stream we created
process.stdin.on('data', function(data) {
  file.write(data);
});

//When the readable stream ends, we close the writeable stream
process.stdin.on('end', function() {
  file.end();
});

//Resume the incoming data stream after a pause
process.stdin.resume();
