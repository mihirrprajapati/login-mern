import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import RegisterRouter from "./routers/RegisterRoutes.js";

const app = express();
const PORT = 3001;

try {
  mongoose.connect("mongodb://localhost:27017/controls");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cors());

app.use("/reg", RegisterRouter);

app.listen(PORT, () => {
  console.log("server is running on port.. " + PORT);
});
