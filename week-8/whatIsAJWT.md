# What is a JWT?

A JSON Web Token, or JWT (commonly pronounced like the word "jot") are an important piece of information used to ensure trust and security within an application.

It is a string, with the format: ```header.payload.signature```

The **header** contains information about the JWT (similar to request/response headers).

These are created as an object and then encoded using base64 (a generic term for a number of similar encoding schemes, that encode binary data (our JSON) by treating it numerically and translating it into a base 64 representation (i.e. represented using 0-9,A-Z,a-z, + and /))

The **payload** is the actual data inside the JWT, eg: the user ID or the status of a user, again a JSON that is base64 encoded.

The **signature** is made up of a hash of: the header, the payload and a secret. The secret is just a passcode that is known by the issuer of the JWT and the app that it is connected with (these may be the same server).

## How do these all work together?

> 1. User logs into a site either using 3rd party or the app's own user/password set up.

> 2. The authentication server verifies the login and issues a JWT to the user.

> 3. The user then sends the JWT in the 'Authorization' header in requests to the app.

> 4. The app uses the signature to the verify that the JWT came from a legitimate source.

> 5. The app believes the claims in the JWT's payload (eg, that the user is an admin) and lets them do what they wanted to do.

### The header

A JSON object that contains 2 key/value pairs: *typ* which specifies what it is (JWT) in this case, and *alg* which gives the hashing algorithm for the signature. It looks like this:
```js
{
  "typ": "JWT",
  "alg": "HS256",
}
```

### The Payload

Another JSON object that can contain any number of key/value pairs with information. These are often referred to as claims. There are several different standard claims for the JWT payload, such as “iss” the issuer, “sub” the subject, and “exp” the expiration time. The size of this will affect the size of the JWT - generally this isn't an issue, but it can affect performance and latency.
```js
{
    "userId": "b08f86af-35da-48f2-8fab-cef3904660bd",
    "isAdmin": true,
}
```

### The Signature

This is different to the previous two, and is made using them, along with the secret code:
1. Take the header, base64 encode it.
2. Take the payload, base64 encode it.
3. Connect these two strings together into 1 string seperated by a full stop.
3. Using the hash algorithm specified in the header, hash the header/payload string with the secret code.

```js
key           = 'secretkey'
unsignedToken = encodeBase64(header) + '.' + encodeBase64(payload)
signature     = HMAC-SHA256(key, unsignedToken)
```

## THE WHOLE JWT
```js
token = encodeBase64(header) + '.' + encodeBase64(payload) + '.' + encodeBase64(signature)
```

#### Useful links:

https://jwt.io/introduction/

https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec
