## What Is Code Injection?
- When code is inserted / injected into a vulnerable computer program, usually with the aim of doing something malicious.
- Code injection can take many forms - this README briefly covers SQL and HTML Script injection.

## SQL Injection
- SQL code is inserted via web page inputs, and used to _read_ or _modify_ values in a website's database.

#### Simple Example
- User and password information is taken from a form and used to build an SQL query which returns information, as long as the usernames and passwords match.
```sql
SELECT UserList.SensitiveInfo
FROM UserList
WHERE UserList.Username = 'username'
AND UserList.Password = 'password'
```

- An SQL query can be used to fake a password match, getting access to the data without needing the correct password. In the example below the AND condition evaluates to TRUE since 1 = 1, and the sensitive info is returned.
```html
PASSWORD:
    password' OR '1'='1
```
```sql
SELECT UserList.SensitiveInfo
FROM UserList
WHERE UserList.Username = 'username'
AND UserList.Password = 'password' OR '1'='1'
```

- As well as accessing information, SQL injections can be used to delete / corrupt data on the database. Here the user is able to execute a `DROP TABLE` statement on the database.
```html
PASSWORD:
    '; DROP TABLE UserList;--
```
```sql
SELECT UserList.SensitiveInfo
FROM UserList
WHERE UserList.Username = 'username'
AND UserList.Password = ''; DROP TABLE UserList;--'
```

## HTML Script Injection
- Also known as XSS (Cross-Site Scripting).
- Similar to SQL injection, but with script tags instead.

```html
SEARCH:
  <script>alert('boo')</script>
```

## References
- https://en.wikipedia.org/wiki/Code_injection
- https://www.w3schools.com/sql/sql_injection.asp
