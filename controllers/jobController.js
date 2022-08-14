import { StatusCodes } from 'http-status-codes';

const createJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: 'Create Job Success' });
};

const getAllJobs = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Get All Jobs Success' });
};

const updateJob = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Update Job Success' });
};

const deleteJob = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Delete Job Success' });
};

const showStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Show Stats Success' });
};

export { createJob, getAllJobs, updateJob, deleteJob, showStats };
