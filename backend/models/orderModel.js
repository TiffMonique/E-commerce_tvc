import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
    unique: true,
    default: () => `ORD-${Math.floor(1000 + Math.random() * 9000)}`,

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  client: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Pending", "Completed", "Cancelled"],
  }
});

export default mongoose.model("Orders", orderSchema);
