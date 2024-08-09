const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/producttables', {
      useNewUrlParser: true, // Include this to avoid deprecation warnings
      useUnifiedTopology: true, // Include this to use the new Server Discover and Monitoring engine
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
