# Packaging

## NPM:
 * What is package manager?

   - A package manager is a tool that allows you to manage all of your libraries in a meaningful and logical manner.

   - Packages contain metadata, such as the software's name, description, version number, vendor and a list of dependencies necessary for the software to run properly.

   - Package managers are designed to eliminate the need for manual installs and updates.

 * How does it help with dependencies?

   - Without package management, users must ensure that all of the required dependencies for a piece of software are installed and up-to-date, compile the software from the source code, and manage configuration for each piece of software.


 * package.json

   - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project, license information, even configuration data.


 * `npm init`

   - This will ask you a bunch of questions, and then write a package.json for you.

   - It attempts to make reasonable guesses about what you want things to be set to, and then writes a package.json file with the options you've selected.

 * How to use an installed package in your code?

   - for example if you are creating a Node.js module you can require it :

     ``` js
      var hapi = require('hapi')```

## npm install
running npm install with no arguments will install the dependencies specified in the package.json file. You will usually do this when you clone someone's project.
```bash
npm install
# or shorthand:
npm i
```

##### Install and list as a dependency:
```bash
npm install lubespackage --save
npm install lubespackage -S
```
For packages which you are required for your project to run.


##### Install and list as a development dependency:
```bash
npm install lubespackage --save-dev
npm install lubespackage -D
```
For packages which might be used in development but not required for the project to run- e.g. unit testing packages, minifier packages.

##### Install globally:
```bash
npm install lubespackage -g
```
Generally you would install globally packages you intend to use in the command line or which are not specific to how your project functions. Nodemon is a good example.

It is generally a __bad idea__ to install other packages globally, because if you use these packages in your project they __will not__ be listed in the dependencies in your package.json file.

__N.B.__ If you get a permission error when trying to install a package globally, check out this [walkthrough](https://docs.npmjs.com/getting-started/fixing-npm-permissions) to fix the issue.

##### Package Versions
You might see something like this in the package.json file:
```js
{ "dependencies" :
  {
    "mypackage" : ">=1.0.2",
    "yourpackage" : ">1.0.2 <=2.3.4",
    "ourpackage" : "2.0.1",
    "xxx" : "<1.0.0 || >=2.3.1 <2.4.5"
  }
}
```
Or this in install instructions:
```bash
npm install lubespackage@1.0.1 --save
```

These show version numbers of packages. More info [here](https://docs.npmjs.com/files/package.json#dependencies).

##### Further info:
- npm docs for install- [link](https://docs.npmjs.com/cli/install)
