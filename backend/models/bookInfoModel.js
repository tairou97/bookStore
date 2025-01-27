import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookInfSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  publicationYear: Number,
  pages: Number,
  ISBN: String,
  image: String,
  description: String,
  reviews: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      comment: String,
      rating: Number,
    },
  ],
});

const BookInfo = model("BookInfo", bookInfSchema);

export default BookInfo;
