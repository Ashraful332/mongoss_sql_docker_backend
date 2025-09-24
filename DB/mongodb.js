// config/db.js
const mongoose = require('mongoose')
require('dotenv').config();


const connectDB = async () => {
    const MongoDB_connect_url = process.env.MONGODB_KEY;

    if (!MongoDB_connect_url) {
        console.warn("⚠️ MongoDB URI not found in .env, skipping MongoDB connection.");
        return;
    }

    try {
        await mongoose.connect(MongoDB_connect_url, {
            dbName: 'Mongoose_yes',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;