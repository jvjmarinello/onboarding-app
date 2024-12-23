import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from "path";
import userRoutes from './routes/userRoutes';

dotenv.config();

// Create express app
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());

// Connect to MongoDB
const mongoUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@onboarding-app.boaw4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=onboarding-app`
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

if (process.env.NODE_ENV !== 'development') {
  const clientBuildPath = path.join(__dirname, "../client", "build");
  app.use(express.static(clientBuildPath));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
  console.log("Static files served in production/stage environment");
} else {
  console.log("Static file serving skipped (not in production/stage)");
}

// Routes
app.use('/api/users', userRoutes);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});