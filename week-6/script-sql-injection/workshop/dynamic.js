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



module.exports = getData;
