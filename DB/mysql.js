const mysql = require("mysql2");
require("dotenv").config();

const MysqlDB = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

MysqlDB.getConnection((err, connection) => {
    if (err) {
        console.error('❌ MySQL pool connection error:', err);
        return;
    }
    console.log('✅ MySQL database is connect');
    connection.release();
});

module.exports = MysqlDB;

