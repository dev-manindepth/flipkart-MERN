import mongoose from "mongoose";

const products = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  tagline: String,
});

const Product = mongoose.model("product", products);

export default Product;
