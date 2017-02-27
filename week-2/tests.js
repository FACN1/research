function add(a,b){
  return a+b;
}

function multiply(a,b){
  return a*b;
}

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

var x=5, y=4, z=42, j=400, k=0;

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
