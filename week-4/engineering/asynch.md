# Asynchronous Functions

*A process in a multitasking system whose execution can proceed independently, "in the background ". Other processes may be started before the asynchronous process has finished.*

While the above definition is technically correct, it is not very helpful or explanatory. It is easier to use examples.


### Asynchronous function:

```js
function asyncDouble (number, callback) {
  setTimeout(function () {
    if (typeof number !== 'number') {
      callback(new TypeError('Expected number'));
    }
    else {
      callback(null, number);
    }
  }, 10);
}
```
So above we have made an Asynchronous function - it won't run the moment it is called, but only after 10 milliseconds, at which point, as you can see the callback function is called.

After the ```asyncDouble``` function is called our code can carry on, and not have to wait for the 10 seconds it takes for it to happen.

```js
var x=1
console.log(x);
asyncDouble(x, function(err,n){
    if (err){
        console.log(err);
        return;
    }
    else{
        var result = n*2;
        console.log(result);
    }
})
console.log(x)
```

If you run this code, we will get
```js
$1
$1
//wait 10ms
$2
```

#### **Callback funtions**

Callback function are what you pass to the Asynchronous function to be *called back* later.

The first function should be an Error object (error first callbacks). If no error happens, the first argument should be null.

The callback function should then check if error exists, and if not, then carry on.

This is useful because it means as soon as an error appears, instead of just carrying on the code, we return back to the previous function.

If we were to use *throw* and *catch* error handling with Asynchronous function we sometimes get unexpected results:

```js
try {
    setTimeout(function () {
        throw new Error("Uh oh!");
    }, 2000);
} catch (e) {
    console.log("I caught the error: " + e.message);
}
```

If you ran this you might expect to get ```I caught the error: Uh oh!``` but what actually happens is the setTimeout happens and the try is successful, and then 2 seconds later the error is thrown and not caught.

**NB** It is useful to pass error objects, as above, and not just strings and JS engine can give you more information.


### Bibliography / Useful links

http://callbackhell.com/

https://blog.risingstack.com/node-hero-async-programming-in-node-js/

http://blog.gvm-it.eu/post/22040726249/callback-conventions-in-nodejs-how-and-why

http://www.informit.com/articles/article.aspx?p=2102373&seqNum=3
