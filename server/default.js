import { products } from "./constants/products.js";
import Product from "./model/productSchema.js";

const DefaultData = async () => {
  try {
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data imported Successfully");
  } catch (err) {
    console.log("Error while inserting default data", err.message);
  }
};

export default DefaultData;
