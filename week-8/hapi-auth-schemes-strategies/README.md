# Hapi Auth Schemes and Strategies

## SCHEMES

A scheme is a general type of authentication. Basic authentication and Digest authentication are different types of authentication, and in hapi each would be a different scheme. You can think of a scheme as a template for authentication. A scheme isn’t used directly to authenticate users, instead you create a specific strategy from the scheme. You can use recognized schemes or create your own.

Recognized authentication schemes:
```
The general HTTP authentication framework is used by several authentication schemes. Schemes can differ in security strength and in their availability in client or server software.

The most common authentication scheme is the "Basic" authentication scheme which is introduced in more details below. IANA maintains a list of authentication schemes, but there are other schemes offered by host services, such as Amazon AWS. Common authentication schemes include:

- Basic (base64-encoded credentials. See below for more information.),
- Bearer (bearer tokens to access OAuth 2.0-protected resources),
- Digest (only md5 hashing is supported in Firefox, see bug 472823 for SHA encryption support),
- HOBA (HTTP Origin-Bound Authentication, digital-signature-based),
- Mutual (AWS4-HMAC-SHA256 (see AWS docs).
```
## STRATEGIES

A strategy is a configured instance of a scheme with an assigned name. Strategies exist so you can use the same scheme several times, in a slightly different way. For instance, might decide to you want use basic authentication in your app. For some routes you might wish to validate a user’s passwords against a value in a database and for some other routes, you might wish to check the password against a value stored in a text file. In this case you can create 2 different strategies from the scheme. The scheme to strategy relationship is described visually below:

![Scheme vs Strategy](https://i.stack.imgur.com/3bKsB.png)

credit [@Matt Harrison](http://stackoverflow.com/users/1402929/matt-harrison)

Example

validate function, apply to multiple routes with hapi
