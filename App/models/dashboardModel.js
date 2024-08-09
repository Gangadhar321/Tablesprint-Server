const mongoose = require('mongoose');

const DashboardSchema = new mongoose.Schema({
  title: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Dashboard', DashboardSchema);
