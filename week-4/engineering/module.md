## 1- Modules: Why is it a good idea to modularise your code?

 #### Good modularization makes building and packaging for the browser easy, it makes testing easier and it defines how maintainable the code is. It is the linchpin that makes it possible to write testable, packagable and maintainable code.

  ### We want to solve three problems:

  * Privacy: we want more granular privacy than just global or local to the current closure.

  * Avoid putting things in the global namespace just so they can be accessed.

  * We should be able to create packages that encompass multiple files and directories and be able to wrap full subsystems into a single closure.

## -2 What are ```require``` and ```module.exports```?

  #### CommonJS modules. CommonJS is the module format that Node.js uses natively. A CommonJS module is simply a piece of JS code that does two things:

   * it uses require() statements to include dependencies.

   * it assigns to the exports variable to export a single public interface.

    * The ```module.exports``` object is created by the Module system. Sometimes this is not acceptable; many want their module to be an instance of some class. To do this, assign the desired export object to module.exports.

    ######  For example suppose we were making a module called a.js:

  ```js
  const EventEmitter = require('events');

  module.exports = new EventEmitter();

  // Do some work, and after some time emit
  // the 'ready' event from the module    itself.
  setTimeout(() => {
  module.exports.emit('ready');
  }, 1000);
  ```
  ###### hen in another file we could do

  ```js
  const a = require('./a');
  a.on('ready', () => {
    console.log('module a is ready');
  });
  ```
  * When there are circular ```require()``` calls, a module might not have finished executing when it is returned.


  ### a.js:
  ```js
  console.log('a starting');
  exports.done = false;
  const b = require('./b.js');
  console.log('in a, b.done = %j', b.done);
  exports.done = true;
  console.log('a done');
  ```

  ### b.js:
  ```js
  console.log('b starting');
  exports.done = false;
  const a = require('./a.js');
  console.log('in b, a.done = %j', a.done);
  exports.done = true;
  console.log('b done');
  ```
