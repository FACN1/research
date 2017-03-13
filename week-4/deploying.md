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

### Environment Variables
- Useful for storing sensitive data like API keys, passwords and other sensitive information - or indeed any data which changes between development environments (testing / production code vs. public code for example)
- Sensitive data should never be uploaded to Github on a public repo - there are various programs which constantly scan Github looking for access keys to a range of APIs and other services - see [here](https://gitleaks.com/)
- Environment variables are instead stored as **key-value pairs** on the local system (the **environment**) where the app is being run, and are made accessible from within the code itself

#### printenv
- You can see your environment variables by typing `printenv` into your console
- You can add a new key-value pair to this list from the command line using `export HELLO=WORLD`
- To remove this key-value pair you can type `unset HELLO`
- Note environment variables must follow a naming convention - **all caps and snake case** (words separated by underscores) - for example `export DATABASE_HOST=localhost`
- Variables set in this way are **temporary**, and will only remain active as long as the current terminal window is open

#### process.env
- Node.js gives you access to these environment variables on the `process.env` global object
- You can access each individual value on this object using standard dot notation, for example `process.env.USER`

#### DWYL env2 Module
- DWYL has created a Node.js module which loads environment variables from a `.env` file to the global `process.env` object for you
- You can save this module to your project's `package.json` file using `npm install env2 --save`
- The format for the `.env` file is as follows:

  ```
  export DB_HOST=127.0.0.1
  export DB_PORT=9200
  export DB_USER=anon
  export DB_PASS=password
  ```

- These files should be located in the **root directory** of the project, and must be added to the `.gitignore` file which prevents them from being uploaded to Github
- To load these variables from the `.env` file into the `process.env` object, add the following line to your script / module:

  ```js
  const env = require('env2')('./path-to-your/.env')
  ```

- The data in the `.env` file will now be automatically stored in the `process.env` object as key-value pairs, and can be accessed from anywhere within that script / module:

  ```js
  console.log(process.env.DB_HOST);
  ```
