const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit:10,
  host : 'mysql',
  user : 'user',
  password : 'user',
  database : 'myapp',
});

exports.pool = pool;

