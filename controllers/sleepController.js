const Sleep = require('../models/Sleep');

// POST /api/sleep-assessment
exports.submitSleepAssessment = async (req, res) => {
  try {
    const { user_id, sleep_struggles_duration, bed_time, wake_time, total_sleep_hours } = req.body;

    const sleepData = new Sleep({
      user_id,
      sleep_struggles_duration,
      bed_time,
      wake_time,
      total_sleep_hours
    });

    await sleepData.save();
    return res.status(201).json({ message: "Sleep assessment saved successfully!" });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to save sleep data' });
  }
};

// GET /api/sleep-assessment/:userId
exports.getSleepAssessment = async (req, res) => {
  try {
    const userId = req.params.userId;
    const sleepData = await Sleep.findOne({ user_id: userId });

    if (!sleepData) {
      return res.status(404).json({ message: 'No sleep data found for this user' });
    }

    return res.status(200).json(sleepData);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch sleep data' });
  }
};
