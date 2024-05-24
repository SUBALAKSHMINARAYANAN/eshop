var mysql = require('mysql');
var util = require('util');
var pool = mysql.createPool({
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,

    host: "localhost",  
    user: "root",
    password: "",
    database: "jewelry_shop_db"  
});

  pool.getConnection((err, connection) => {
  
    console.log(err);
    if (err) 
    {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Database connection was closed.');
        }
        else if (err.code === 'ER_CON_COUNT_ERROR') {
            console.log('Database has too many connections.')
        }
        else if (err.code === 'ECONNREFUSED') {
            console.log('Database connection was refused.');
        }
        else if (connection) connection.release();
        return
    }
    else
    {
        console.log('Database connected successfully.');
    }     
});
pool.query = util.promisify(pool.query); // Magic happens here.

module.exports = pool; 