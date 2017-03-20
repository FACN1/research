var http = require('http');

var server = http.createServer();


const validateAge = (age) => {
  if (!age){
    return new Error('No input given')
  } else if (!Number.isInteger(age)) {
    return new Error("Age should be an integer")
  } else if (age<16||age>80){
    return new Error("Age not within 16-80")
  }
   else {
    return "Congrats you remmember your age"
  }
}


const validateName = (name) => {
  if (!name){
    return new Error("No input given")
  } else if (typeof(name) !== "string"){
    return new Error("the input is not a string")
  } else if (name.length<2){
    return new Error("the input must be at least 2 letters")
  }else {
    return "Great job you typed your name"
  }
}


module.exports = {
  validateName,
  validateAge
}
