# BlanketJS - Research Afternoon

---

## What is it?

BlanketJS is a seamless test coverage tool for JavaScript / Node that integrates with QUnit and outputs the
coverage information directly on the page containing the test results.

In seamless test we simply mean that whatever change is being applied to a system, happens without and negative impact resulting from the integration. It is often used in the context of software and system development as well as for computer hardware


  - what is test coverage?

  is a measure - in percentage- to describe how many lines of the code are executed while testing.
  A higher code coverage has a lower chance of containing undetected software bugs compared with low code coverage

## Why is it helpful?

While other tools require additional build steps (like instrumenting the code into a separate folder),
BlanketJS integrates with Node's require() to instrument JavaScript code on the fly.
Ideally, there are tests that cover every part of the code. For some projects, it’s easy to tell when this is the case. But if you find yourself writing tests for a complex piece of code that didn’t have many or any tests beforehand, then it can be good to know exactly how much of the code is being tested and which bits still need to be exercised through tests. And this is when a code coverage tool is needed.


## WORKSHOP: Example of BlanketJS in use

#### Running BlanketJS client-side ([more information](#extra-information))
*Description:* We'll be creating the base of a simple calculator; however, we want to use TDD while developing it, to make the code easy to manage.

1. Initialise HTML page with QUnit.
- Install nodejs and npm.
- Make sure the index.html page looks like this, or use git clone and navigate to the blanketjs-example folder:

    index.html
    ```
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>QUnit Example</title>
        <link rel="stylesheet" href="https://code.jquery.com/qunit/qunit-2.1.1.css">
    </head>

    <body>
        <div id="qunit"></div>
        <div id="qunit-fixture"></div>
        <!-- Load the QUnit Testing Framework from CDN - this is the important bit ... -->
        <script src="https://code.jquery.com/qunit/qunit-1.18.0.js"></script>
        <!-- Load Blanket.js from CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/blanket.js/1.1.4/blanket.js"></script>    <script src="main.js"></script>
        <script src="main.js" data-cover></script>
        <script src="test.js"></script>
    </body>

    </html>
    ```

    main.js
    ```
    function calculatorAdd(a, b) {
        return a + b;
    }

    ```

    test.js
    ```
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    QUnit.test("calculatorAdd should do: a + b = output", function(assert) {
        var input = calculatorAdd(1, 1);
        var output = 2;
        assert.equal(/*input*/ calculatorAdd(1, 1), /*output*/ 2, "1 + 1 should equal 2");

        // Random testing:
        var i = 0;
        for (i=0; i<10; i++) {
            var randomInts = [];
            randomInts[0] = getRandomInt(2, 100);
            randomInts[1] = getRandomInt(2, 100);
            var randomTotal = randomInts[0] + randomInts[1];
            assert.equal(/*input*/ randomInts[0]+randomInts[1], /*output*/ randomTotal, randomInts[0] + " + " + randomInts[1] + " should equal: " + randomTotal);
        }
    });

    QUnit.test("Test random function", function(assert) {
        assert.equal(/*input*/ getRandomInt(1, 1),/*output*/ 1, "Random value between 1 and 1 should equal 1");
    })
    ```

- Run these commands, by copy/pasting into Terminal (make sure you're in the right directory!):

    ```
    # The first command will initialise Node Package Manager.
    # Press enter for each prompt for now
    npm init

    # The next command installs a simple HTTP server
    # The purpose of this is because Chrome blocks some
    # functionality for local files (such as file://Desktop, etc)
    # ↓

    npm install live-server --save-dev

    # The next command will run the folder as a NodeJS server
    # ↓

    node_modules/.bin/live-server --port=8000

    ```
- Open your browser and navigate to the URL
    ```
    http://127.0.0.1:8000/?coverage
    # It's worth noting that you have to include the ?coverage at the
    # end of the URL for BlanketJS to be enabled.
    ```

- If you create a new function in main.js for subtraction, then check the code coverage, you will see that the code coverage is no longer 100%, since you haven't created a test for it.


#### Running BlanketJS server-side ([more information](#extra-information))

1. Continuing from the previous, required, steps:
- Run these commands in Terminal (make sure you're cd location is right):
    ```

    # Below commands will install mocha and BlanketJS with Node Package Manager
    npm install mocha -g # Install globally
    npm install blanket --save


    # Below command will make a test directory
    mkdir test

    # Below command will make a new server-side/node test file.
    touch test.js
    ```

- Open the test/test.js file in Atom, and add this code:
    ```
    function calculatorAdd(a, b) {  // This should be in another file, but would need module.exports, so left here for simplicity
        return a + b;
    }


    describe('Calculator addition function', function() {
        it('should return sum of input', function() {
            calculatorAdd(1, 1).should.equal(2);
            calculatorAdd(5, 6).should.equal(11);
        });
    });
    ```
- Run this in Terminal, to run the tests in the command line:
    ```
    mocha --require blanket
    ```
(note - not working yet - no time left to debug)






### Extra information

Client-side means anything that happens purely inside the web browser.

Server-side means the website is generated externally (on another computer/server).


#### Some of the code used is from: https://github.com/dwyl/learn-tdd

---
### Credit:
- Code used as reference for example: https://github.com/dwyl/learn-tdd
