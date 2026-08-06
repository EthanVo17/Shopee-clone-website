import mongoose from 'mongoose';

async function connectDB() {
  const DB_URI = process.env.DB_URI as string;

  if (!DB_URI) {
    console.error('[MongoDB]: DB_URI is not defined in environment variables');
    process.exit(1);
  }

  try {
    await mongoose.connect(DB_URI, {
      serverSelectionTimeoutMS: 10000, // timeout sau 10 giây
      connectTimeoutMS: 10000,
    });
    console.log('[MongoDB]: Kết nối thành công!');
  } catch (error: any) {
    console.error('[MongoDB]: Kết nối thất bại!');
    console.error('[MongoDB Error]:', error.message);
    console.error(
      '[MongoDB Hint]: Kiểm tra IP Whitelist trên Atlas hoặc cluster có đang chạy không.'
    );
    process.exit(1);
  }
}

export default connectDB;
