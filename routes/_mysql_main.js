// routes/users.js
const express = require('express');
const MysqlDB = require('../DB/mysql');
const mysql = require('mysql2');


const router = express.Router();


// GET users
router.get("/users", (req, res) => {
    try {
        MysqlDB.query("SELECT * FROM users", (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json(result);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
});

// POST user
router.post("/users", (req, res) => {
    try {
        const { name, email } = req.body;
        MysqlDB.query(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            [name, email],
            (err, result) => {
                if (err) return res.status(500).json({ error: err });
                res.json({ message: "✅ User is added", id: result.insertId });
            }
        );
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }

});


module.exports = router;

