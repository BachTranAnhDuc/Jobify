import { StatusCodes } from 'http-status-codes';

const errorHandleMiddleware = (err, req, res, next) => {
  let defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong please try again!',
  };

  if (err.name === 'ValidationError') {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
  }

  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.values(err.keyValue)} has duplicated`;
  }
  let { statusCode, msg } = defaultError;
  res.status(statusCode).json({ msg: `There was an error`, err: msg });
};

export { errorHandleMiddleware };
