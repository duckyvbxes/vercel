const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 30 },
    type: { type: String, enum: ['suggestion', 'bug'], required: true },
    position: { type: Number, default: 0 },
    discordChannel: { type: String },
    requiredRoles: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
});

const Settings = mongoose.model('Category', categorySchema);

module.exports = Settings;