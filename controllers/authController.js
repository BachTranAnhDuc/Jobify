import { StatusCodes } from 'http-status-codes';

const register = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Register success' });
};

const login = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Login success' });
};

const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Update success' });
};

export { register, login, updateUser };
