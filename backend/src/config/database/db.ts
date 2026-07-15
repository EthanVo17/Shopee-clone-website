import mongoose from 'mongoose';

function connectDB() {
  const DB_URI = process.env.DB_URI as string;
  mongoose.connect(DB_URI);
}

export default connectDB;
