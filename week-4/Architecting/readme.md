####Seperation of Concerns
##Separation of Concerns
  Separation of Concerns (SoC) is a design principle to separate/break a piece of software into distinct sections that do not overlap in functionality or might do but as little as possible.
  It is for software maintainability, as it aims to increase the effectiveness of the piece of software and allow code reuse.
  If SoC is not applied, it would be difficult to modify, test, or debug the code.
  Separation of concerns is achieved through modularity.
  If we need to change the interface of a web page, we should not need to change the business logic of the software.

#Example on SoC:
 HTML, CSS and JavaScript: HTML defines the page structure while CSS defines how the page is presented and JavaScript defines how the content interacts with the user.

###Front End vs Back End
##Front end (or the presentation layer) handles:
* accessibility concerns
* asynchronous requests
* web languages like HTML, CSS and JavaScript
* libraries like JQuery

##Back end (or the data access layer) handles:
* the business logic
* data storage and administration
* security concerns
* scalability

Note: There are some crossovers between front end and back end development, as some presentation work is done on the server


###Server vs. Client Side
##Client side validation and server side validation
In the Client Side Validation you can provide a better user experience by responding quickly at the browser level.
When you perform a Client Side Validation, all the user inputs validated in the user's browser itself.
Client Side validation does not require a round trip to the server
In the Server Side Validation,the input submitted by the user is sent to the server and validated using one of server
side scripting languages such as ASP.Net, PHP etc. After the validation process on the Server Side, the feedback is sent back to the client by a new dynamically generated web page.
It is better to validate user input on Server Side because you can protect against the malicious users,
who can easily bypass your Client Side scripting language and submit dangerous input to the server.

##Server-side templating and Client-side templating
Server-side templating means that the content gets rendered, that is the resulting HTML code from the server
While Client-side templating means the resulting HTML gets rendered in the browser through the use of Javascript libraries.


Alternative backend technologies:
PHP - one of the most popular language for web development, its pre-installed in almost all hosting services and has a syntax very similar to C and JAVA.
Python - it uses a simplar syntax than PHP and its designed to have a very readable code and for that reason is very recommended to learn programming. (it was chosen by google to develop their services).
Ruby on Rails - is designed to be a fun language, as it focuses on simplicity and productivity with an elegant syntax. everything in it is an object and thats interesting because it encourage the programmer to think this way when developing.
Pros and Cons of using Node.js:
Pros	Cons
Uses JS, which is easy to learn.	Doesn’t provide scalability. One CPU is not going to be enough; the platform provides no ability to scale out to take advantage of the multiple cores commonly present in today’s server-class hardware.
Asynchronous event driven IO helps concurrent request handling.	Dealing with relational database is a pain if you are using Node.
Share the same piece of code with both server and client side.	Every time using a callback end up with tons of nested callbacks.
npm, the Node packaged modules has already become huge, and still growing.	Without diving in depth of JavaScript if someone starts Node, he may face conceptual problem.
Active and vibrant community, with lots of code shared via github, etc.	Node.js is not suited for CPU-intensive tasks. It is suited for I/O stuff only (like web servers).
You can stream big files.
Node vs Browser:
Because we are writing JavaScript for different purposes, and in different environments Node does not have a predefined window object like in the browser, because it does not need to deal with functions and Node does not have the document object because it does not have to render anything in the page, unlike in the browser, where the document is a predefined global variable, where the html is rendered. Node processes request objects while browsers process response objects "require" object is predefined in Node which is used to include modules in the application. Whereas browsers don't have "require" predefined
