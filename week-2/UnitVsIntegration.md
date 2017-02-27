# Unit vs Integration Testing

### Unit Testing
- Used to test relatively small pieces / units of code
- The tests should be narrow in scope, and easy to write and execute
- They should be pure - outside dependencies are "mocked" or "stubbed out"
- Written by and for the programmer to identify bugs early in the development cycle

### Integration Testing
- Larger scale tests, carried out to demonstrate that different pieces of the system work together
- Might cover the whole application, but can also be used for smaller scale tests, for example anything that uses a resource like a database or queue
- Usually carried out by a test team _after_ unit testing and _before_ system testing

## What are the pros and cons?

### Unit Tests:
Pros | Cons
------------ | -------------
Fast to write | Frustrating/time consuming
Very fast to run | Do not test the real-life functionality of the application
Encourage good development practice (e.g. TDD) |
Pick up bugs instantly |
Save a lot of time in the future |

### Integration Tests:
Pros | Cons
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

## Examples

### Resources
- [Short example](https://www.youtube.com/watch?v=0GypdsJulKE)
- ["What is Integration Testing?"](https://www.youtube.com/watch?v=QYCaaNz8emY)
