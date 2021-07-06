import mongoose from "mongoose";

const likeData = new mongoose.Schema({
  likes: {
    type: Number,
    required: true,
  },
});

export const LikeData = mongoose.model("LikeData", likeData);
