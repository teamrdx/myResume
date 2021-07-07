import connectDB from "../helper/connectDB";
import { LikeData } from "../models/likes";

const Likes = async (req, res) => {
  if (req.method === "POST") {
    try {
      const newLike = parseInt(req.body);

      const update = await LikeData.findByIdAndUpdate(
        process.env.MONGODB_ID,
        {
          likes: newLike,
        },
        (error, success) => {
          if (error) {
            console.log(error);
          } else {
            console.log(`Sucessfully updated data ${success}`);
          }
        }
      );
      res.status(200).send(update);
    } catch (error) {
      res.status(500).send("Something Wrong", error);
    }
  } else {
    res.status(500).send("This Method is not yet supported!");
  }
};

export default connectDB(Likes);
