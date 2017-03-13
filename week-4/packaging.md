# Packaging

Dependencies: What is a dependency? Why might you want to use a dependency in your project, rather than writing the code from scratch? What have traditionally been some of the issues with managing dependencies?

NPM: What is a package manager? How does it help with dependencies? What is package.json, and what does npm init do? How do you use an installed package in your code?

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
You might see something like this in the package.json file. These show
```js
{ "dependencies" :
  {
    "foo" : "1.0.0 - 2.9999.9999",
    "bar" : ">=1.0.2 <2.1.2",
    "baz" : ">1.0.2 <=2.3.4",
    "boo" : "2.0.1",
    "qux" : "<1.0.0 || >=2.3.1 <2.4.5"
  }
}
```

##### Further info:
- npm docs for install- [link](https://docs.npmjs.com/cli/install)
- npm docs for package.json dependencies- [link](https://docs.npmjs.com/files/package.json#dependencies)


Package files: Where does NPM install packages? Why is it important to make sure that installed packages aren't included in your repositories? How do you prevent Git from including these files in your repository?
