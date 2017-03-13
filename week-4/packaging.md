https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-4/research-afternoon.md

Topic 3: Packaging



### What is a dependency?
A project dependency is the logical, constraint based or preferential relationship between two activities or tasks such that the completion or the initiation of one is reliant on the completion or initiation of the other.
Dependencies can be categorized in a number of ways based on conditions like completion and initiation of tasks, relationship of tasks to the project and the company and the reason for the existence of the dependency.

A dependency is typically a library, framework or component, usually provided by a third party and upon which your website’s functionality depends. It could be a simple date-conversion library or an entire framework.
As you can imagine, a typical website depends on several libraries, each of which provides prebuilt functionality on which to base your code. These elements are an integral part of the website’s code base; as a result, it’s critical that all developers work with an identical set of these dependencies at all times.
To facilitate this, we can define a process for managing the various libraries, frameworks and components on which a particular code base depends. This dependency-management process is often controlled with a central tool that keeps track of the versions of the packages required by a project.


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



### NPM: What is a package manager?
As the name suggest, package managers manage packages

packages: collections of files that are bundled together and can be installed and removed as a group.

A package manager keeps track of what software is installed on your computer, and allows you to easily install new software, upgrade software to newer versions, or remove software that you previously installed.






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






### Why is it important to make sure that installed packages aren't included in your repositories?


???
For example, have you ever made a pull from a repository, only to find 10 minutes later that a particular library has stopped working because another developer upgraded a dependency without telling you? If your dependencies are all checked into source control, then it’s perfectly conceivable that, when pulling the latest updates from your repository, you might not notice that a dependency has been updated. In contrast, a dependency-management tool requires you to execute a specific command to update your dependencies, which will (hopefully) provide clear feedback on which libraries have changed. This makes it harder to miss a change to one of your dependencies, which mitigates the chance of an error.
