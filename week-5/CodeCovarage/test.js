const { validateName, validateAge } = require('./server');

const test = require('tape');

test('Testing validateName', (t) => {

  t.equal(validateName().message, 'No input given', "test input was given")
  t.equal(validateName(['not','a','strisng']).message, "the input is not a string","Tests whether it is a string");
  // t.equal(validateName("a").message, "the input must be at least 2 letters",
  // "check input length above 2")
  t.end();
  // t.equal(validateName("hiba"), 'Great job you typed your name', "the right name is inputed")
})


test('Testing validateAge', (t) => {

  t.equal(validateAge().message, 'No input given', "test it returns true on valid")
  t.equal(validateAge(10).message, "Age not within 16-80","checks if above 16")
  t.equal(validateAge(90).message, "Age not within 16-80","checks if under 80")
  t.equal(validateAge('not Integer').message, "Age should be an integer", "Check an integer is given")
  t.end();
  t.equal(validateAge(20), "Congrats you remmember your age", "the right age is inputed")
})
