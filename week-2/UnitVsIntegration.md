# Unit vs Integration Testing

## Contents
- [Intro](#intro)
- [Unit Testing](#unit-testing)
- [Integration Testing](#integration-testing)
- [Resources](#resources)

## Intro
- Unit testing is focused on individual methods and functions, and getting very specific on on how each of them perform in isolation.
- Integration testing is more focused on how different parts of the app work together, and even the app as a whole. With web apps it may require things such as automating user interaction with the browser, or creating a database, so often you need a slightly more sophisticated test setup.

## Unit Testing
- Used to test relatively small, isolated pieces / units of code
- The tests should be narrow in scope, and easy to write and execute
- They should be pure - external dependencies are "mocked" or "stubbed out"
- Written by and for the programmer to identify bugs early in the development cycle

Pros | Cons
------------ | -------------
Fast to write | Frustrating/time consuming
Very fast to run | Do not test the real-life functionality of the application
Encourage good development practice (e.g. TDD) |
Pick up bugs instantly |
Save a lot of time in the future |

## Integration Testing
- Larger scale tests, carried out to test how different parts of the system work together
- Might cover the whole application, but can also be used on a smaller scale (for example anything that makes use of an external resource like a database)
- Usually carried out by a test team _after_ unit testing and _before_ system testing

### Integration Testing Approaches

#### Big Bang
All components are integrated together at once, and then tested.

Pros | Cons
------------ | -------------
Convenient for small systems | Fault Localization is difficult.
 | Some interferences could be easily missed.
 | Testing teams have to wait for all modules to complete.
 | Doesn't put preference on high priority modules.

#### Incremental Testing
In this approach, testing is done by joining two or more modules that are logically related. Then the other related modules are added and tested for the proper functioning. Process continues until all of the modules are joined and tested successfully.
This process is carried out by using dummy programs called Stubs and Drivers. Stubs and Drivers do not implement the entire programming logic of the software module but just simulate data communication with the calling module.

Stub: Is called by the Module under Test.

Driver: Calls the Module to be tested.

Incremental Testing is completed either:
- Bottom Up, or
- Top Down

Pros | Cons
------------ | -------------
Easier Fault Localization | Bottom down emphasizes smaller modules
Don't have to wait for all modules to finish | Needs many stubs
Top down tests critical modules first | Early prototype not possible

### Integration Testing Example

[Reference](http://www.guru99.com/integration-testing.html)

#### Testing Plan:
First determine the Integration Test Strategy that could be adopted and later prepare the test cases and test data accordingly.

Study the Architecture design of the Application and identify the Critical Modules. These need to be tested on priority.

Obtain the interface designs from the Architectural team and create test cases to verify all of the interfaces in detail. Interface to database/external hardware/software application must be tested in detail.

#### Scenario:
Application has 3 modules say 'Login Page', 'Mail box' and 'Delete mails' and each of them are integrated logically.

Here do not concentrate much on the Login Page testing as it's already been done in Unit Testing. But check how it's linked to the Mail Box Page.

Similarly Mail Box: Check its integration to the Delete Mails Module.

Test Case ID | Test Case Objective | Test Case Description | Expected Result
------------ | ------------------- | --------------------- | ---------------
  1 | Check the interface link between the Login and Mailbox module |	Enter login credentials and click on the Login button |	To be directed to the Mail Box
  2 | Check the interface link between the Mailbox and Delete Mails Module | From Mail box select an email and click delete button | Selected email should appear in the Deleted/Trash folder

### Resources
- [Workshop by Mavis](https://github.com/FACN1/research/blob/UnitvIntegration/week-2/UnitvIntWorkshop.md) on basic unit and integration testing.
- DWYL [tutorial for Nightwatch.js](https://github.com/dwyl/learn-nightwatch) which can run automated browser tests.
- [Short video](https://www.youtube.com/watch?v=0GypdsJulKE) explaining unit vs integration testing.
- Youtube video - ["What is Integration Testing?"](https://www.youtube.com/watch?v=QYCaaNz8emY).
