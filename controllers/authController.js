import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';
import { BadRequest, NotFound } from '../errors/index.js';

const register = async (req, res) => {
  const { email, name, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequest('Please enter full values');
  }

  const isExistEmail = User.find({ email });

  if (!isExistEmail) {
    throw new BadRequest(
      `${email} is already exist, please enter another email!`
    );
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Register success', user: user, token: token });
};

const login = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Login success' });
};

const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Update success' });
};

export { register, login, updateUser };
