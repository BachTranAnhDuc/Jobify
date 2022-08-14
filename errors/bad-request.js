import { StatusCodes } from 'http-status-codes';
import CustomAPI from './CustomAPI.js';

class BadReqeust extends CustomAPI {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadReqeust;
