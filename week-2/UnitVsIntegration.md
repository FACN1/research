# Unit vs Integration Testing

### What are the differences?

### What are the pros and cons?

### Integration Testing Approaches

  #### Big Bang
  All components are integrated together at once, and then tested.

  Pros | Cons
  ------------ | -------------
  Convenient for small systems | Fault Localization is difficult.
   | Some interferences could be easily missed.
   | Testing teams have to wait for all modules to complete.
   | Doesn't put preference on high priority modules.



  #### Incrimental Testing
  In this approach, testing is done by joining two or more modules that are logically related. Then the other related modules are added and tested for the proper functioning. Process continues until all of the modules are joined and tested successfully.
  This process is carried out by using dummy programs called Stubs and Drivers. Stubs and Drivers do not implement the entire programming logic of the software module but just simulate data communication with the calling module.

  Stub: Is called by the Module under Test.

  Driver: Calls the Module to be tested.

  Incremental Testing is completed either:
  - Bottom Up, or
  - Top Dow

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
