const mongoose = require('mongoose');

const sleepSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  sleep_struggles_duration: { type: String, required: true },
  bed_time: { type: String, required: true },
  wake_time: { type: String, required: true },
  total_sleep_hours: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sleep', sleepSchema);
