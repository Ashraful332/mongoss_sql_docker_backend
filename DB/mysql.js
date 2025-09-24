const mysql = require("mysql2");
require("dotenv").config();

if (!process.env.MYSQLHOST) {
    console.warn("⚠️ MySQL config not found in .env, skipping MySQL connection.");
}

const MysqlDB = mysql.createPool({
    host: process.env.MYSQLHOST || "localhost",
    user: process.env.MYSQLUSER || "root",
    password: process.env.MYSQLPASSWORD || "",
    database: process.env.MYSQLDATABASE || "",
    port: process.env.MYSQLPORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

MysqlDB.getConnection((err, connection) => {
    if (err) {
        console.error('❌ MySQL pool connection error:', err.message);
        return;
    }
    console.log('✅ MySQL database is connect');
    connection.release();
});

module.exports = MysqlDB;

