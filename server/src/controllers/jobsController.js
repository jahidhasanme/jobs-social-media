import AllJobs from "../models/AllJobs.js";
import AppliedJobs from "../models/AppliedJobs.js";
import ArchivedJobs from "../models/ArchivedJobs.js";
import SavedJobs from "../models/SavedJobs.js";

export const getPaginatedJobs = async (req, res) => {
  let { step = 1, limit = 50 } = req.query; // Default: step 1, 50 items per step
  step = parseInt(step);
  limit = parseInt(limit);

  if (limit >= 100) {
    limit = 100;
  }

  try {
    const jobs = await AllJobs.find()
      .skip((step - 1) * limit) // Skip previous steps
      .limit(limit); // Limit the number of results

    const totalJobs = await jobs.countDocuments(); // Total count for reference

    res.send({
      totalJobs,
      totalSteps: Math.ceil(totalJobs / limit),
      currentStep: step,
      data: jobs,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const createJob = async (req, res) => {
  try {
    const job = new AllJobs(req.body);
    await job.save();
    res.send({
      message: "Job created successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const updateJob = async (req, res) => {
  try {
    const updatedUser = await AllJobs.findOneAndUpdate({ id: req.body.id }, { $set: req.body });

    res.send({
      message: "Job updated successfully!",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const job = await AllJobs.findOne({ id: req.query.id });
    if (job) {
      await AllJobs.deleteOne(job);
      res.send({
        message: "Job deleted successfully!",
        data: job,
      });
    } else {
      res.status(404).send({
        error: "Job not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const saveJob = async (req, res) => {
  try {
    const { id } = req.body;
    const jobObj = await AllJobs.findOne(id);
    const job = new SavedJobs(jobObj);
    await job.save();
    res.send({
      message: "Job saved successfully!",
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const applyJob = async (req, res) => {
  try {
    const { id, candidate } = req.body;
    const jobObj = await AllJobs.findOne(id);
    const job = new AppliedJobs({ ...jobObj, candidate });
    await job.save();
    res.send({
      message: "Job applied successfully!",
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const archiveJob = async (req, res) => {
  try {
    const { id } = req.body;
    const jobObj = await AllJobs.findOne(id);
    const job = new ArchivedJobs(jobObj);
    await job.save();
    jobObj.deleteOne(jobObj);
    res.send({
      message: "Job archived successfully!",
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const getSavedPaginatedJobs = async (req, res) => {
  let { step = 1, limit = 50 } = req.query; // Default: step 1, 50 items per step
  step = parseInt(step);
  limit = parseInt(limit);

  if (limit >= 100) {
    limit = 100;
  }

  try {
    const jobs = await SavedJobs.find()
      .skip((step - 1) * limit) // Skip previous steps
      .limit(limit); // Limit the number of results

    const totalJobs = await jobs.countDocuments(); // Total count for reference

    res.send({
      totalJobs,
      totalSteps: Math.ceil(totalJobs / limit),
      currentStep: step,
      data: jobs,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const getArchivedPaginatedJobs = async (req, res) => {
  let { step = 1, limit = 50 } = req.query; // Default: step 1, 50 items per step
  step = parseInt(step);
  limit = parseInt(limit);

  if (limit >= 100) {
    limit = 100;
  }

  try {
    const jobs = await ArchivedJobs.find()
      .skip((step - 1) * limit) // Skip previous steps
      .limit(limit); // Limit the number of results

    const totalJobs = await jobs.countDocuments(); // Total count for reference

    res.send({
      totalJobs,
      totalSteps: Math.ceil(totalJobs / limit),
      currentStep: step,
      data: jobs,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const getAppliedPaginatedJobs = async (req, res) => {
  let { step = 1, limit = 50 } = req.query; // Default: step 1, 50 items per step
  step = parseInt(step);
  limit = parseInt(limit);

  if (limit >= 100) {
    limit = 100;
  }

  try {
    const jobs = await AppliedJobs.find()
      .skip((step - 1) * limit) // Skip previous steps
      .limit(limit); // Limit the number of results

    const totalJobs = await jobs.countDocuments(); // Total count for reference

    res.send({
      totalJobs,
      totalSteps: Math.ceil(totalJobs / limit),
      currentStep: step,
      data: jobs,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const deleteSavedJob = async (req, res) => {
  try {
    const job = await SavedJobs.findOne({ id: req.query.id });
    if (job) {
      await SavedJobs.deleteOne(job);
      res.send({
        message: "Job deleted successfully!",
        data: job,
      });
    } else {
      res.status(404).send({
        error: "Job not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const deleteArchivedJob = async (req, res) => {
  try {
    const job = await ArchivedJobs.findOne({ id: req.query.id });
    if (job) {
      await ArchivedJobs.deleteOne(job);
      res.send({
        message: "Job deleted successfully!",
        data: job,
      });
    } else {
      res.status(404).send({
        error: "Job not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const deleteAppliedJob = async (req, res) => {
  try {
    const job = await AppliedJobs.findOne({ id: req.query.id });
    if (job) {
      await AppliedJobs.deleteOne(job);
      res.send({
        message: "Job deleted successfully!",
        data: job,
      });
    } else {
      res.status(404).send({
        error: "Job not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};
