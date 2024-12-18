import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI);
    console.log(`connected to mongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log(`error connecting to mongoDB`, error);
    process.exit(1);
  }
};
