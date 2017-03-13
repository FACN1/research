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
      var hapi = require('hapi')
      ```


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

 * How do you prevent Git from including these files in your repository?
    * git ignore
      - A .gitignore file can be used to tell git which files to ignore.
E.g. create a .gitignore file in the repository and add to it:
 ``` bash
 .gitignore
node_modules
```
