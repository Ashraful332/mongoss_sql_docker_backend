const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const connectDB = require('./DB/mongodb.js');
const MysqlDB = require('./DB/mysql.js');
const userRoutes = require('./routes/_users.js');
const MySQL_routes = require('./routes/_mysql_main.js');
const mysql = require('mysql2');
const apiRoutes = require('./routes/_api.js');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// connect database
connectDB();


app.get('/', (req, res) => {
  res.send('Server is running, Express 1.1!');
});

// user Routes -- mongoose
app.use('/users', userRoutes);
app.use('/sql', MySQL_routes);
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
