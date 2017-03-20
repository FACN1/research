const got = require('got');
const fs = require('fs');
const http = require('http');

const PORT = 4000;

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/images/logos/ps_logo2.png'
}

var request = http.get(options, function(res){
  var imagedata = ''
  res.setEncoding('binary')

  res.on('data', function(chunk){
      imagedata += chunk
  })

  res.on('end', function(){
    fs.writeFile('img.jpg', imagedata, 'binary', function(err){
      if (err) throw err
      console.log('File saved.')
    })
  })
})

got.stream('https://unsplash.it/600/800/?random').pipe(fs.createWriteStream('img.jpg'));

function handleRequest(req, res) {
  if(req.url === "/"){
    fs.readFile('./img.jpg', function(err, data) {
      if(err) {
        console.log(err);
        return;
      }
      res.writeHead(200, {"content-type": 'image/jpg'});
      res.end(data);
    })

  } else {
    res.writeHead(404, {"content-type": "text/plain"});
    res.end("page not found..");
  }
}

var server = http.createServer(handleRequest);

server.listen(PORT);
