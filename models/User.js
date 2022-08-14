import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minLength: [3, 'Name must at least 3 characters'],
    maxLength: [50, 'Name must not more than 50 characters'],
    required: [true, 'Please provide name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: [6, 'Passwrod must at least 6 characters'],
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
    default: 'Lastname',
  },
  location: {
    type: String,
    trim: true,
    default: 'Vietnam',
  },
});

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

export default mongoose.model('User', UserSchema);
