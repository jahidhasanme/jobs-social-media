import AllJobs from "../models/AllJobs.js";

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
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const updateJob = async (req, res) => {
  try {
    const job = await AllJobs.findOne({ id: req.body.id });
    if (job) {
      await job.updateOne(req.body);
      await job.save();
      res.send({
        message: "Job updated successfully!",
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

export const deleteJob = async (req, res) => {
  try {
    const job = await AllJobs.findOne({ id: req.query.id });
    if (job) {
      await job.deleteOne(job);
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
