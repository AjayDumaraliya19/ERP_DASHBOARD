import OverallStat from "../models/OverallStat.model.js";

export const getSales = async (req, res) => {
  try {
    const overallState = await OverallStat.find();

    res.status(200).json(overallState[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
