# Code Coverage

### What is code coverage ?

- Simply put, code coverage is a way of ensuring that your tests are actually testing your code. Coverage will tell you how much of your code you exercised by running the test.


### Istanbul installation :

   1. It's prefered to install istanbul as a "devDependencies" in the project :  

    `npm i istanbul --save-dev`

 2 . go to the `package.json`
    - add this line to the package.json  
    `"coverage": "istanbul cover ./test.js",`

    ##### Example :
    ``` javascript
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "coverage": "istanbul cover ./test.js",
      "start": "node server.js"
    },
    ```

    3 . you can run the coverage using this command in your terminal :

    `npm run coverage`

-------------------------------------------------------------------------------

###### Detailed guide on istanbul : [here](https://github.com/dwyl/learn-istanbul#what)
