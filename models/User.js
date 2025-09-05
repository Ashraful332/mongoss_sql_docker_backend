    // models/User.js
    // const express = require('express');
    const mongoose = require('mongoose')
    

    const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    });

    const User = mongoose.model('User', UserSchema);
    // export default User; # module js
    module.exports = User; // common js