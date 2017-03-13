## Basic Heroku Server

Heroku is a cloud application platform where you can build and deploy web apps using Node.js.

Heroku integrates with Git so you can easily deploy your application by pushing to master.

#### Before you start:

1. [Sign up](heroku.com) for an account (free)
2. Install the heroku toolbelt kit (allows you to use 'heroku' in the command line)

#### Let's do it:

- Create a folder, navigate to it, and initialize git:
```
mkdir exampleHerokuServer
cd exampleHerokuServer
git init
git add .
git commit -m "first commit"
```
- Login to heroku through your terminal, name your app and git push:
```
heroku Login
heroku create <name-of-your-app>
git push
```
- Create your server in a server.js file:

```js
var server = var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = "index.html";
  } else {
    filePath = "public" + request.url;
  }

  var absPath = "./" + filePath;
  serverWorking(response, absPath);
});
```

- Declare your dependancies:

```js
var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");
```

- Create package.JSON file:

```js
{
  "name" : "blog",
  "version" : "0.0.1",
  "description" : "My minimalistic blog",
  "dependencies" : {
    "mime" : "~1.2.7"
  }
}
```
- Run npm Install
- Load a basic HTML file:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test Server, woohoo!</title>
    </head>
    <body>
    </body>
</html>
```
- git push heroku master
- heroku open!
- your [page](https://git.heroku.com/example-server-facn1.git) should open! 
