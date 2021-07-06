import connectDB from "../helper/connectDB";
import { LikeData } from "../models/likes";

const Data = async (req, res) => {
  if (req.method === "GET") {
    try {
      const data = await LikeData.find({});

      res.status(200).send(data);
    } catch (error) {
      res.status(500).send("Something Wrong", error);
    }
  } else {
    res.status(500).send("This Method is not yet Supported!");
  }
};

export default connectDB(Data);
