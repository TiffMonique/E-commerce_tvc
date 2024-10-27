import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 130,
  },
  image: {
    type: Buffer,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 1,
  },
});

export default mongoose.model("Product", productSchema);
