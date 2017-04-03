# Authentication

## What is it?
In the realm of the web,
authentication is **the process of verifying the identity an individual, usually using a password.**

## Hashing
What is it and why is it useful?

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
