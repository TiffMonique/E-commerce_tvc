import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Category", categorySchema);
