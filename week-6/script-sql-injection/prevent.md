- **Constrain and sanitize input data.** Check for known good data by validating for type, length, format, and range. This should be done server side as well as client side
- **Use type-safe SQL parameters for data access.** You can use these parameters with stored procedures or dynamically constructed SQL command strings.
  - Parameter collections such as SqlParameterCollection provide type checking and length validation.
  - If you use a parameters collection, input is treated as a literal value, and SQL Server does not treat it as executable code.
  - An additional benefit of using a parameters collection is that you can enforce type and length checks. Values outside of the range trigger an exception. This is a good example of defense in depth.
- **Use an account that has restricted permissions** in the database. Ideally, you should only grant execute permissions to selected stored procedures in the database and provide no direct table access.
- **Avoid disclosing database error information.** In the event of database errors, make sure you do not disclose detailed error messages to the user.

*Conventional security measures, such as the use of Secure Socket Layer (SSL) and IP Security (IPSec), do not protect your application from SQL injection attacks.*

## Parametizing ##

When we do pg.query we can do it in 3 different ways:
  - text
  - parameterised
  - prepared

### Text queries ###

These a fast and flexible, but the most vulnerable to attack.

```SQL
query("INSERT INTO table (col1, col2) VALUES ('"+var1+"', '"+var2+"')")
```

### Param queries ###

These pass the arguments to queries before they are passed to SQL

```SQL
query("INSERT INTO table (col1, col2) VALUES ($1,$2)", [var1,var2])
```

Parameterised queries in postgres are parsed, analysed, rewritten, and planned before each execution, so they provide safety but not speed.

http://www.technicalkeeda.com/nodejs-tutorials/how-to-prevent-sql-injection-in-nodejs

https://github.com/brianc/node-postgres/wiki/Parameterized-queries-and-Prepared-Statements
