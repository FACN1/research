# hapi-auth-cookie

## Cookies, local storage, session storage...???
### Cookies:
- stored in the browser
- sent to the server with each request
- usually intended to be read by the server, but can also be read by the browser
- some people may block them
- can't store lots of data
- if you want to store more data, you could store an id in a cookie and the data in a database

### local storage:
- stored in the browser
- never seen by the server
- no expiration date
- previously didn't have full browser support, but now does

### session storage: (basically the same as local storage but it expires)
- stored in the browser
- never seen by the server
- expires when the browser is closed (i.e. browser session not site session)

### example
- Storing the items in a person's shopping cart: cookies,local storage, store in a database, or something else?

### links
http://stackoverflow.com/questions/3220660/local-storage-vs-cookies

## Cookies in Hapi
- it's easy to set cookies (see below)
- see the docs: https://hapijs.com/tutorials/cookies?lang=en_US
- see the cookies on the server from inside the headers of the request

### To configure a cookie:
```javascript
server.state(name, options)
```
where name is a string, the name of the cookie

### Setting a cookie:
```javascript
reply('Hello').state('data', { firstVisit: false });
```
where 'data' is the name of the cookie

### Clearing a cookie:
```javascript
reply('Hello').unstate('data');
```

## hapi-auth-cookie
https://github.com/hapijs/hapi-auth-cookie

Workshop from master ref week 7:

https://github.com/SavageWilliam/hapi-auth-cookie-ws

## Links
Hapi cookies- https://hapijs.com/tutorials/cookies?lang=en_US

Thanks for reading.
