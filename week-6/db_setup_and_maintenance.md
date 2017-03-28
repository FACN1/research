# Database setup and maintenance

## Build Scripts
### Why?
- store clear records of changes to the database
- database tables/data can be reproduced easily (e.g. for development)
- more readable/explicit

## pg_dump
Can be used to automatically create a database 'dump', a file which can be used to reproduce the database in its current state.
```bash
# to store the database in its current state in a database file
# outfile can be a .pgsql file
pg_dump dbname > outfile


# to restore a database from a database file.
# dbname must be a (empty) database which already exists
psql dbname < infile
```

## Example
Download the sql script file, then:
```bash
# -f executes commands from file, then exits
psql -f <filename>
```
