const http = require('http');
const users = require('./static.js');
const fs = require('fs');
const dynamic = require('./dynamic.js');
const qs = require('querystring');


const handler = (request, response) => {
  const endpoint = request.url.split('/')[1];

  if (endpoint === '') {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if(error) {
        console.log(error);
        return;
      } else {
        response.end(file);
      }
    });
  } else if (endpoint === "users") {
    // TASK 1: replace the 3 lines below below with your own function that gets data from your database
    // const output = JSON.stringify(users);
    dynamic.getData((err, res) => {
      if(err) {
        console.log(err);
        return;
      }
      var output = JSON.stringify(res);
      console.log(output);
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(output);
    });
  } else if (endpoint === "create-user") {
      if (request.method === "POST") {
        var requestText = '';
        request.on('data', (data) => {
          requestText += data;
        })
        request.on('end', () => {
          var formData = qs.parse(requestText);
          console.log(requestText);
          console.log(formData.name, formData.location);
          dynamic.postData({
            'username': formData.name,
            'location': formData.location
          }, (err, res) => {
            if (err) {
              response.writeHead(500, {'content-type': 'text/plain'});
              response.write('Error 500 - Internal Server Error :O');
              response.end();
              return;
            }
            response.writeHead(200, {'content-type': 'text/plain'});
            response.write('OK 200 - Data posted');
            response.end();
          })


        })
      }
  } else {
    const fileName = request.url;
    const fileType = request.url.split(".")[1];
    response.writeHead(200, {"Content-Type": "text/" + fileType});
    fs.readFile(__dirname + "/../public" + fileName, function(error, file) {
      if(error) {
        console.log(error);
        return;
      } else {
        response.end(file);
      }
    });
  }
};

module.exports = handler;
