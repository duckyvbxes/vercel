const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  accentColor: { type: String, default: '#5e99ff' },
  name: { type: String, default: 'Plex Tracker' },
  logo: { type: String },
  favicon: { type: String },
  updatedAt: { type: Date, default: Date.now }
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;