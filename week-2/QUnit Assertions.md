# Research-27.2

### async()
  -


### equal()
  -The equal assertion uses the simple comparison operator (==) to compare the actual and     
   expected arguments. When they are equal, the assertion passes; otherwise, it fails.

  -equal( actual, expected [, message ] )

   Example :
``` javascript

    QUnit.test( "a test", function( assert ) {
      assert.equal( 1, "1", "String '1' and number 1 have the same value" );
    });
```



### deepEqual()
   -The ``deepEqual()`` assertion can be used just like equal() when comparing the value of       
    Aobjects, such that ``{ key: value }`` is equal to ``{ key: value }``.

  -DeepEqual( actual, expected [, message ] )

   Example :
``` javascript

Unit.test( "deepEqual test", function( assert ) {
var obj = { foo: "bar" };

assert.deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );
});
```


###  notDeepEqual()
   -The ``notDeepEqual()`` assertion can be used just like equal() when comparing the value
    of objects, such that ``{ key: value }`` is equal to ``{ key: value }``.

   -notDeepEqual( actual, expected [, message ] )

    Example :
``` javascript
QUnit.test( "notDeepEqual test", function( assert ) {
var obj = { foo: "bar" };

assert.notDeepEqual( obj, { foo: "bla" }, "Different object, same key, different value, not equal" );
});
```



### expect()
   -To ensure that an explicit number of assertions are run within any test, use
    ``assert.expect( number )`` to register an expected count. If the number of assertions
    run does not match the expected count, the test will fail.

Example :

``` javascript
QUnit.test( "a test", function( assert ) {
  assert.expect( 2 );

  function calc( x, operation ) {
    return operation( x );
  }

  var result = calc( 2, function( x ) {
    assert.ok( true, "calc() calls operation function" );
    return x * x;
  });

  assert.equal( result, 4, "2 squared equals 4" );
});
```

## notPropEqual()

Uses strict equal operator ```(!==)``` to compare the actual and expected arguments as Objects regarding only their properties but __not__ their constructors.

When they aren't equal, the assertion passes; otherwise, it fails. When it fails, both actual and expected values are displayed in the test result, in addition to a given message.

``` equal() ``` can be used to test equality.

``` propEqual() ``` can be used to test strict equality of an Object properties.

- The below assertion tests if the values of two objects are identical. If the two objects' properties are identical, then the test will fail. If there is any difference in the property values between the two objects, then the test pass.

``` javascript
QUnit.test( "notPropEqual test", function( assert ) {
  function Foo( x, y, z ) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

    var foo = new Object();
    foo.a = 1;
    foo.b = 2;
    var bar = {a: 1, b: 3};
  assert.notPropEqual( foo, bar, "Properties values are strictly compared." );
});

```

## notStrictEqual()

- Uses strict not equals ``` (!==) ``` to test whether two elements are different in both value and type.


- This will pass

``` javascript

QUnit.test( "a test", function( assert ) {
  assert.notStrictEqual( 1, "1", "String '1' and number 1 have the same value but not the same type" );
});

```
- But this will fail, because the two arguments are of both same value and type.

``` javascript

QUnit.test( "a test", function( assert ) {
  assert.notStrictEqual( 1, 1, "String '1' and number 1 have the same value but not the same type" );
});

```


## ok()

- Tests whether the argument is true. As long as the value passed to the assertion returns as true (or truthy), the test will pass.

``` javascript
QUnit.test( "ok test", function( assert ) {
  assert.ok( true, "true succeeds" );
  assert.ok( "non-empty", "non-empty string succeeds" );

  assert.ok( false, "false fails" );
  assert.ok( 0, "0 fails" );
  assert.ok( NaN, "NaN fails" );
  assert.ok( "", "empty string fails" );
  assert.ok( null, "null fails" );
  assert.ok( undefined, "undefined fails" );
});
```

## propEqual()

- The propEqual() assertion provides strictly (===) comparison of Object properties. Unlike deepEqual(), this assertion can be used to compare two objects made with different constructors and prototype.

``` strictEqual() ``` can be used to test strict equality.

``` notPropEqual() ``` can be used to explicitly test strict inequality of Object properties.

``` javascript

QUnit.test( "propEqual test", function( assert ) {
  function Foo( x, y, z ) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  Foo.prototype.doA = function () {};
  Foo.prototype.doB = function () {};
  Foo.prototype.bar = 'prototype';

  var foo = new Foo( 1, "2", [] );
  var bar = {
    x : 1,
    y : "2",
    z : []
  };
  assert.propEqual( foo, bar, "Strictly the same properties without comparing objects constructors." );
});
```

## strictEqual()

- The strictEqual() assertion provides the most rigid comparison of type and value with the strict equality operator ```(===)```.

``` javascript
QUnit.test( "strictEqual test", function( assert ) {
  assert.strictEqual( 1, 1, "1 and 1 have the same value and type" );
});
```



#### Useful Links:

[List of QUnit Assertions](https://api.qunitjs.com/category/assert/)
