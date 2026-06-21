import mongoose from 'mongoose';

function connectDB() {
  const DB_URI = 'mongodb://127.0.0.1:27017/ecommerce';
  mongoose.connect(DB_URI);
}

export default connectDB;
