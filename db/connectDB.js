import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log('Connect to DB success...'))
    .catch((err) => console.log('Cannot connect to DB...'));
};

export { connectDB };
