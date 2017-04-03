const fs = require('fs');

//Need to require this to split by lines
const split = require('split');

// our programm can take three flags, which are then assigned below, or default with the OR operator:
var filepath = process.argv[2]||'./test.txt'
var hwm = process.argv[3] || 100
var timeout = process.argv[4] || 500

// Create the readable stream of the filepath specified and the hwm and set the econding to utf8
var file = fs.createReadStream(filepath, {highWaterMark:hwm, encoding: 'utf8'});

//creat empty data
var data =''

//You pipe the readable stream into split which sends it back as chunks split by a new line
file.pipe(split())

//listen for error event
file.on('error', function(err) {
  console.log('Error '+err);
  return err
});

//listen for data events
file.on('data', function(bits) {

  //add new bits to the data str
  data +=bits

  //print the new bit as a string (it comes buffered)
  process.stdout.write(bits);

  //pause the reading
  file.pause();

  //set a timeout as specified by the flag (def: 500ms) to then resume the read
  setTimeout(() => {
    file.resume();
  }, timeout);
})

// listen for the end event
file.on('end', function(){
  console.log('Finished reading all of the data');
});
