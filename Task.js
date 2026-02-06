import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  userId: String,
  title: String,
  status: { type: String, default: "Pending" }
});

export default mongoose.model("Task", TaskSchema);
