const express = require('express');
const connectDB = require('./config/db');
const sleepRoutes = require('./routes/sleepRoutes');
const userRoutes = require('./routes/userRoutes'); // Add this line
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // Update with your frontend URL if different
}));

// Routes
app.use('/api/sleep', sleepRoutes); // Existing sleep routes
app.use('/api/users', userRoutes);  // Add user routes here

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
