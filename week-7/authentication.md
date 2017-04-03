# Authentication

## What is it?

## How to implement it in Hapi

## Hashing
### What is it?
- A hash function will take an input of any size, and give an output of fixed size, which is like a fingerprint. It should be mathematically irreversible (can't get a password from a hash). Theoretically, the chance of a hash collision (two inputs/passwords with the same output/hash) is very small, so two outputs of a hash function can be compared to determine if two files or strings are identical.

**Types of hash**
- A cryptographic hash, such as md5, SHA-1, SHA-256, etc is designed to be as fast as possible.
- However, a password hash (such as bcrypt, PBKDF2) is designed to take as long as possible.
  - This also means that password hashing should always be run asynchronously.

**Salting**

- While hashing functions are one-way (can't be reversed), crackers can have pre-calculated enormous amounts of input/output pairs - these are called rainbow tables.
- a salt is generally a random string of characters to add complexity
- bcrypt generates a unique salt for each user, and adds this salt


### Why is it useful?

**Compute Time**
- The longer it takes to calculate the hash of a password, the better. This is because if a database is compromised, a cracker will try to brute force passwords to get the original password.
- A cryptographic hash such as SHA-1 can be tried 10,000s of times a second or more; however, if bcrypt is used, only a few passwords could be tested each second (assuming a normal computer is used for brute forcing)


## Example
Using Bcrypt and hapi-auth-basic

## Links
- [Brian Krebs article on Password Security](https://krebsonsecurity.com/2012/06/how-companies-can-beef-up-password-security/)
