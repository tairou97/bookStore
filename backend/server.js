import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { log } from "console";
import bookInfoRoutes from "./routes/bookInfoRoutes.js";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB verbunden");
  } catch (err) {
    console.error("Fehler bei der Verbindung mit MongoDB:", err);
  }
};

connectToMongoDB();
app.use("/api/bookInfo", bookInfoRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  log(`Server is running on port ${PORT}`);
});
