const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userID: { type: String, required: true, unique: true },
    banned: { type: Boolean, default: false },
    bannedAt: { type: Date },
    bannedBy: { type: String }
});

const User = mongoose.model('User', userSchema);
module.exports = User;