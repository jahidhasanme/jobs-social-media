import InterviewSchedule from "../models/InterviewSchedule.js";

export const createInterviewSchedule = async (req, res) => {
  try {
    const interviewSchedule = new InterviewSchedule(req.body);
    interviewSchedule.save();
    res.send({
      message: "Interview Schedule creation successful!",
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const getInterviewSchedules = async (req, res) => {
  try {
    const interviewSchedule = await InterviewSchedule.find();
    res.send(interviewSchedule);
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const getInterviewSchedule = async (req, res) => {
  try {
    const interviewSchedule = await InterviewSchedule.findOne({
      id: req.query.id,
    });
    res.send(interviewSchedule);
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const updateInterviewSchedule = async (req, res) => {
  try {
    const interviewSchedule = await InterviewSchedule.findOne({
      id: req.body.id,
    });
    interviewSchedule.updateOne(req.body);
    interviewSchedule.save();
    res.send({
      message: "Interview Schedule update successful!",
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const deleteInterviewSchedule = async (req, res) => {
  try {
    const interviewSchedule = await InterviewSchedule.findOne({
      email: req.query.email,
    });
    if (interviewSchedule) {
      await interviewSchedule.deleteOne(interviewSchedule);
      res.send({
        message: "Profile deleted successfully!",
        data: interviewSchedule,
      });
    } else {
      res.status(404).send({
        error: "interviewSchedule not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};
