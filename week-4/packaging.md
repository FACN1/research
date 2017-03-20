# Packaging

### What is a dependency?
Dependencies can be categorized in a number of ways based on conditions like completion and initiation of tasks, relationship of tasks to the project and the company and the reason for the existence of the dependency.

A dependency is typically a library, framework or component, usually provided by a third party and upon which your website’s functionality depends. It could be a simple date-conversion library or an entire framework.

we can define a process for managing the various libraries, frameworks and components on which a particular code base depends. This dependency-management process is often controlled with a central tool that keeps track of the versions of the packages required by a project.


### Why might you want to use a dependency in your project, rather than writing the code from scratch?
* It serves as documentation for what packages your project depends on.
* It allows you to specify the versions of a package that your project can use using semantic versioning rules.
* Makes your build reproducible which means that its way easier to share with other developers.

They are needed to create large agile organizations with cross-functional teams

In real world projects—especially software projects—teams usually rely on other pieces of work being finished/started before they can do their own work. So even if you’re lucky enough to be a part of a project with no dependencies, chances are some other project will depend on your team’s work to achieve their goals.


### What have traditionally been some of the issues with managing dependencies?
In a world without cross-team dependencies projects:
* would exist in isolation, and requirements would remain constant
* wouldn't need help from an internal teams or outside vendors
* wouldn't be affected by business changes.
* program managers(PMs) would have a much easier life.

##### in reality: PMs spend a lot of time and energy in dealing with complex dependencies by:
* thinking about how to predict dependencies
* tactics to reduce their impact, how to resolve them
* recognizing what features they should look for in a dependency management tool.

???
Why do cross-team dependencies matter?
We interviewed over ten program managers who lead a sizable number of teams in their organizations aiming to find out the top reasons programs fail. 80% of them included “dependency management” as important job at a high level to make the program successful. Missed or incomplete understanding of dependencies across teams and third parties is an important one. At the same time, dependencies also matter at team level. Dependencies may hurt agile team’s accountability of getting things done at the end of the sprint or iteration.


## NPM:
 * What is a package manager?

   - A package manager is a tool that allows you to manage all of your libraries in a meaningful and logical manner.

   - Packages contain metadata, such as the software's name, description, version number, vendor and a list of dependencies necessary for the software to run properly.

   - Package managers are designed to eliminate the need for manual installs and updates.
   - packages: collections of files that are bundled together and can be installed and removed as a group.

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
      var hapi = require('hapi')
      ```


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
    "mypackage" : "^1.0.2",
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


## Package files:
 * Where does NPM install packages?

  - Global libraries
    - You can run `npm list -g` to see where global libraries are installed.
    - On Unix systems they are normally placed in `/usr/local/lib/node or /usr/local/lib/node_modules`
    - Windows XP - `%USERPROFILE%\Application Data\npm\node_modules`
    - Windows 7 - `%AppData%\npm\node_modules`
    - Windows 10 - `C:\Users\{YOUR USERNAME HERE}\AppData\Roaming\npm;C:\Program Files\nodejs`

  - Non-global libraries
    - Non-global libraries are installed the `node_modules` sub folder in the folder you are currently in.

    - You can run `npm list` to see the installed non-global libraries for your current location.  

 *  Why is it important to make sure that installed packages aren't included in your repositories?

   - You are not going to make changes to the files of the installed packages so you dont need to track them and

   - you dont want to upload them to github cause its pointless.
   - For example, have you ever made a pull from a repository, only to find 10 minutes later that a particular library has stopped working because another developer upgraded a dependency without telling you? If your dependencies are all checked into source control, then it’s perfectly conceivable that, when pulling the latest updates from your repository, you might not notice that a dependency has been updated. In contrast, a dependency-management tool requires you to execute a specific command to update your dependencies, which will (hopefully) provide clear feedback on which libraries have changed. This makes it harder to miss a change to one of your dependencies, which mitigates the chance of an error.

 * How do you prevent Git from including these files in your repository?
    * git ignore
      - A .gitignore file can be used to tell git which files to ignore.
E.g. create a .gitignore file in the repository and add to it:
 ``` bash
 .gitignore
node_modules
```
