# Making a request from a server

### Why?
Often you might want to keep API requets kept on the server side. Here are a few reasons why:

- To keep API keys (or other similar security information) securely hidden away in the server, rather than on the client-side.

- To minimise the amount of DOM rendering coming back to the browser.

### What?


[Mikael Roger's Request Module](https://www.sitepoint.com/making-http-requests-in-node-js/) appears to be one of the most commonly used third-party modules used for making server-side requests.

``` request ``` allows you to make all types of HTTP requests, including ``` GET``` , ``` POST``` , ``` PUT``` , and ``` DELETE``` . Its flexibility makes the ``` request```  module ideal for interacting with RESTful APIs. You can install request using the following npm command:

``` js
npm install request
```

### How?


### npm modules for making requests

### example
[Here's our demo!](../server-request-demo)
### further links
