#Example Workshop

1. QUnit Documentation has a good frame for the html:

      ```html
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
      <script src="https://code.jquery.com/qunit/qunit-2.1.1.js"></script>
      <script src="tests.js"></script>
    </body>
    </html>
    ```

3. Within the tests.js file we can now create some functions:

    ```js
    function add(a,b){
      return a+b;
    }

    function multiply(a,b){
      return a*b;
    }
    ```

4. And then below these we can create some Unit tests:

    ```js
    QUnit.test("test add",function(assert){
      assert.equal(add(4,5),9,"4+5=9")
      assert.equal(add(4,4),8,"4+4=8")
      assert.equal(add(42,400),442,"42+400=442")
      assert.equal(add(0,0),0,"0+0=0")
    })

    QUnit.test("test multiply",function(assert){
      assert.equal(multiply(4,5),20,"4*5=9")
      assert.equal(multiply(4,4),16,"4+4=8")
      assert.equal(multiply(42,400),16800,"42*400=16800")
      assert.equal(multiply(0,0),0,"0*0=0")
    })
    ```

5. The functions are pure functions and don't rely on global variables, so they should pass these unit tests:

     *They work independently exactly as we want them to*

6. Open index.html in chrome to check this.

7. So now we want to make a quick, very simple integration test, first, create some global variables:

    ```js
    var x=5, y=4, z=42, j=400, k=0;

    ```
    
8. Then add some tests, that both use these variables and also mix the add and multiply functions together:

    ```js
    QUnit.test("Integration", function(assert){
      assert.equal(add(x,y),9,"4+5=9")
      assert.equal(add(y,y),8,"4+4=8")
      assert.equal(add(z,j),442,"42+400=442")
      assert.equal(add(k,k),0,"0+0=0")
      assert.equal(multiply(x,y),20,"4*5=9")
      assert.equal(multiply(y,y),16,"4+4=8")
      assert.equal(multiply(z,j),16800,"42*400=16800")
      assert.equal(multiply(k,k),0,"0*0=0")
      assert.equal(multiply(add(2,1),add(3,2)),15,"multiply with two add arguments")
      assert.equal(add(multiply(2,4),multiply(3,5)),23, "Add with two multiply arguments")


    })

    ```
    
9. Refresh your index.html and you should see our functions pass the integration tests!

10. For an example of Unit testing something that hasn't been built with TDD see [this guide from smashingMagazine](https://www.smashingmagazine.com/2012/06/introduction-to-javascript-unit-testing/).
