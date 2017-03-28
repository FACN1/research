const dbConnection = require('../database/db_connection');

const getData = (cb) => {
  dbConnection.query(`SELECT * FROM users`,
  (err, res) => {
    if(err) {
      cb(err);
      return;
    }
    cb(null, res.rows);
    console.log(res.rows);
  });
};

const postData = (values, cb) => {
  /*
   * '); DROP TABLE users; --
   */
  dbConnection.query(`INSERT INTO users (name, location) VALUES ($1, $2)`, [values['username'], values['location']],  // USE THIS OR SOMETHING SIMILAR LIKE PREPARED STATEMENTS
  // COMMENT LINE ABOVE AND UNCOMMENT LINE BELOW TO SWITCH BETWEEN GOOD AND BAD
  // dbConnection.query(`INSERT INTO users (name, location) VALUES ('` + values['username'] + `', '` + values['location'] + `')`, // THIS CAN BE SQL INJECTED. NEVER DO THIS WITH UNESCAPED (alphanumeric whitelisted) USER INPUT
  (err, res) => {
    if(err) {
      cb(err);
      console.log(err);
      return;
    }
    cb(null, res.rows);
    console.log(res.rows);
  });
};

// const postData = (values, cb) => {
//   // '); DROP TABLE users; --
//   let un = values['username'];
//   let loc = values['location'];
//   dbConnection.query('INSERT INTO users (name, location) VALUES ($1, $2)', [values['username'], values['location']]);
//   // dbConnection.query(`INSERT INTO users (name, location) VALUES ('` + values['username'] + `', '` + values['location'] + `')`,
//   // (err, res) => {
//   //   if(err) {
//   //     cb(err);
//   //     console.log(err);
//   //     return;
//   //   }
//   //   cb(null, res.rows);
//   //   console.log(res.rows);
//   // });
// };



module.exports = {
  getData: getData,
  postData: postData
};
