import { StatusCodes } from 'http-status-codes';

const errorHandleMiddleware = (err, req, res, next) => {
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: 'There was an error' });
};

export { errorHandleMiddleware };
