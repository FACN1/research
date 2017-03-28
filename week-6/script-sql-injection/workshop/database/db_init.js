const fs = require('fs');

const dbConnection = require('./db_connection');

// const sql = fs.readFileSync(`${__dirname}/db_init.sql`).toString();

fs.readFile(__dirname + '/db_init.sql', (err, file) => {
  if (err) throw err;
  dbConnection.query(file.toString(), (err2, res) => {
    console.log(err2);
    if (err2) throw err2;
    console.log("Users table created with result: ", res);
  });
})
