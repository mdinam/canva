const express = require('express'); // Express module ko import karte hain jo web application banane ke liye use hota hai
const cors = require('cors'); // Cross-Origin Resource Sharing ko handle karne ke liye CORS module import kiya
const dotenv = require('dotenv'); // Environment variables ko load karne ke liye dotenv module ko import kiya
const mongoose = require('mongoose'); // MongoDB ko connect karne ke liye Mongoose module import kiya
const path = require('path'); // File paths ko handle karne ke liye path module ko import kiya

const app = express(); // Express application create kiya
dotenv.config(); // `.env` file se environment variables ko load kiya

// CORS configuration environment ke basis par alag-alag rakhi gayi hai
if (process.env.NODE_ENV === 'local') {
  // Agar local environment hai, to localhost:3000 ko allow kiya
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // Cookie-based requests allow karne ke liye
  }));
} else {
  // Agar production environment hai, to sirf credentials allow kiye, origin specify nahi kiya
  app.use(cors({
    credentials: true
  }));
}

// Production environment ke liye frontend ko static serve karne ka setup
if (process.env.NODE_ENV === 'production') {
  // Frontend dist directory ko static files ke liye set kiya
  app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

  // Agar koi unknown request aaye, to index.html file ko serve kiya jata hai
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

// MongoDB ke sath database connection setup ke liye async function banaya
const dbConnect = async () => {
  try {
    // Local environment ke liye local MongoDB URI use kiya
    if (process.env.NODE_ENV === 'local') {
      await mongoose.connect(process.env.LOCAL_DB_URI);
      console.log("Local db is connected"); // Successfully connected message
    } else {
      // Production environment ke liye production MongoDB URI use kiya
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Production db is connected");
    }
  } catch (error) {
    // Agar connection fail ho jaye, to error message console par dikhaya
    console.log("Database connection failed!");
  }
};

dbConnect(); // Database connection function ko call kiya

// Server port ko environment variable se ya 8080 se set kiya
const PORT = process.env.PORT || 8080;

// Server ko specified port par listen karne ke liye lagaya
app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));
