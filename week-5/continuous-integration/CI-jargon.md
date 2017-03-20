## Continuous Integration

Quality assurance (QA) is a way of preventing mistakes or defects in manufactured products and avoiding problems when delivering solutions or services to customers, much of your CI depends on the nature of your setup and team

Continuous Integration (CI) is the process of automating the build and testing of code every time a team member commits changes to version control. CI encourages developers to share their code and unit tests by merging their changes into a shared version control repository after every small task completion. Committing code triggers an automated build system to grab the latest code from the shared repository and to build, test, and validate the full master branch (also known as the trunk or main).

Automating your build, test and deploy processes can alleviate much of the headaches and problems commonly happening on projects. Having a reliable method of doing things, and integrating changes more frequently ensures that errors can be found sooner than later. Having a blocking issue that appeared right on the demo as the result of some part of the code you implemented a few months earlier and haven’t had a proper chance to test against other parts of your system is not a pleasant event at all.

Typically CI server uses a version control system like Subversion or Git or any other to pull your project files. It monitors your project’s repository and on the successful commit it pulls the changes and performs the tasks you defined previously for that project. Upon completion of the tasks, CI server sends feedback to the relevant project members with the details of the build. Checking out the latest version of your project, running the build scripts, running the tests, and sending notifications are the most basic functionalities of the CI servers. Besides these, features like code analysis, code coverage, code quality reports, agent pooling, pipelines, build comparisons, IDE integration, third party tools support and many others make the CI servers very flexible and comfortable to use.

CI emerged as a best practice because software developers often work in isolation, and then they need to integrate their changes with the rest of the team’s code base.  Waiting days or weeks to integrate code creates many merge conflicts, hard to fix bugs, diverging code strategies, and duplicated efforts.  CI requires the development team’s code be merged to a shared version control branch continuously to avoid these problems.

CI keeps the master branch clean. Teams can leverage modern version control systems such as Git to create short-lived feature branches to isolate their work.  A developer submits a “pull request” when the feature is complete and, on approval of the pull request, the changes get merged into the master branch.  Then the developer can delete the previous feature branch.  Development teams repeat the process for additional work.  The team can establish branch policies to ensure the master branch meets desired quality criteria.

Teams use build definitions to ensure that every commit to the master branch triggers the automated build and testing processes.  Implementing CI this way ensures bugs are caught earlier in the development cycle, which makes them less expensive to fix.  Automated tests run for every build to ensure builds maintain a consistent quality.\



## Benefits of Continuous Integration
Using the CI approach can be beneficial for any team or project. Benefits include:

As a result projects with Continuous Integration tend to have dramatically less bugs, both in production and in process. However I should stress that the degree of this benefit is directly tied to how good your test suite is. You should find that it's not too difficult to build a test suite that makes a noticeable difference. Usually, however, it takes a while before a team really gets to the low level of bugs that they have the potential to reach. Getting there means constantly working on and improving your tests.

**Reduced integration risk:** Projects more often than not include multiple people working on the separate tasks or parts of the code. When the time comes to merge all of the separate parts of the project there is a great risk of bugs appearing and software not working as planned. Depending on how bad the problem really is, debugging and solving the issue can be really painful and can potentially mean a lot of changes to the code. Integrating on a daily basis or even more frequently can help finding these problems and solving them while they are not as hazardous.

**Higher code quality:** Not having to worry about the problems, and focusing more on the functionality of the code results in a higher quality product.

**The code in version control works:** If you have committed something that breaks the build, you and your team get the notice immediately and the problem is fixed before anyone else pulls the “broken” code.

**Reduced friction between team members:** Having the impartial system in place reduces the frequency of quarrels between team members.

**The quality of life improvement for testers:** Having different versions and builds of the code can help isolate and trace bugs efficiently, and it makes life easier for the QA team.

**Less time deploying:** Deploying projects can be very tedious and time-consuming, and automating that process makes perfect sense.

Increased confidence and morale. People that don’t work for fear of breaking something, are more likely to produce better results and can focus their energy and concentration on producing instead of worrying about potential consequences of their actions.


**Efficiency and relevancy:** It helps prevent long integration problems from cropping up at release when everyone tries to make incompatible versions work together. And when changes are always made to the freshest code base rather than obsolete code
This way you know at all times where you are, what works, what doesn't, it becomes easier to predict how long it will take to do things, and easy to see how far you are through the process. The result is that you get rid of putting yourself in a complete blind spot right at one of tensest parts of a project. this is useful even if you're one of the rare cases of people who aren't already late.


**Makes Bugs dramatically easier to find and remove:** Bugs mess up schedules and reputations and get in the way of the work on progress making it harder to get the rest of the software working correctly.

CI doesn't get rid of bugs, but it does make dramatically easier to find and remove. In this respect it's rather like self-testing code. If you introduce a bug and detect it quickly it's far easier to get rid of. Since you've only changed a small bit of the system, you don't have far to look. Since that bit of the system is the bit you just worked with, it's fresh in your memory - again making it easier to find the bug. You can also use diff debugging - comparing the current version of the system to an earlier one that didn't have the bug.

Bugs are also cumulative. The more bugs you have, the harder it is to remove each one. This is partly because you get bug interactions, where failures show as the result of multiple faults - making each fault harder to find. It's also psychological - people have less energy to find and get rid of bugs when there are many of them - a phenomenon that the Pragmatic Programmers call the Broken Windows syndrome.
