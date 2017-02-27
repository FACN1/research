/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore if */
if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs'); // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  var getChange = require('./change.js'); // load our getChange method
}


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
