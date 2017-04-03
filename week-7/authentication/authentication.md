# Authentication

## What is it?
In the realm of the web,
authentication is **the process of verifying the identity an individual, usually using a password.**

## Hashing
### Hashing a password

![password_hash](https://github.com/FACN1/research/raw/master/week-7/authentication/password_hash.gif)

### Checking the password:

![password_check](https://github.com/FACN1/research/raw/master/week-7/authentication/password_check.gif) "Password check"

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

- If a database is hacked (which should always be assumed - data breaches happen all the time), then if passwords are stored in plaintext, crackers can publish all the passwords on the internet, and anyone can try using the same passwords on other websites that the user uses, such as emails.
  - However, if passwords are sufficiently hashed, and sensitive data such as credit card details is well encrypted, then the data is less useful for crackers. 

**Compute Time**
- The longer it takes to calculate the hash of a password, the better. This is because if a database is compromised, a cracker will try to brute force passwords to get the original password.
- A cryptographic hash such as SHA-1 can be tried 10,000s of times a second or more; however, if bcrypt is used, only a few passwords could be tested each second (assuming a normal computer is used for brute forcing)





## Example
See the example server ([link])(). It uses:

Bcrypt:
- Library to help hash passwords and compare
- Includes useful methods such as:
  - bcrypt.hash(raw_data, salt, cb)
  - bcrypt.compare(raw_data, encrypted_data, cb)

hapi-auth-basic:
- Basic hapi authentication plugin
- Creates a basic authentication scheme
- Is outdated as it uses a pop-up to request username and password

## Links
- [Brian Krebs article on Password Security](https://krebsonsecurity.com/2012/06/how-companies-can-beef-up-password-security/)
