**Instructions**
1. Create a basic Node project with some tests:
    - Create a basic server in "server.js"
    - *(might need to have server.listen in another file for tests to work, or have router in another file)*
    - Run `npm init`
    - Run `npm install tape shot tap-spec --save-dev`
    - Create a "tests.js" file
    - Import the tape and shot module into the tests file
    - Test the server.js router method (import it first)
    - Setup the `npm run test` script in `package.json`
- Sign into Travis with GitHub
- Go to your Travis [profile](https://travis-ci.org/profile)
- Click Sync account in top right
- Toggle the GitHub repository you want continuous integration enabled on
- Push some changes to your tests or code to a branch other than master on GitHub
- Create a Pull Request for the branch, and you should get a link to the tests and see a colour code:
    - Yellow means test is running, you may need to wait a few minutes
    - Red means a test(s) failed. Do not merge the code to `master`: request a code review
    - Green means tests passed: it should be ok to merge to master, but check the code anyway


### Resources
- [**Travis** - Getting Started](https://travis-ci.org/getting_started)
- [**GitHub:** dwyl/learn-travis](https://github.com/dwyl/learn-travis)
