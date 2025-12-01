import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    image: String,
    description: String,
    category: String,
  },
  { timeseries: true }
);

export default mongoose.model.ProductSchema ||
  mongoose.model("Product", ProductSchema);
