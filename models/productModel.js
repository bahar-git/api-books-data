const mongoose = require("mongoose");
const products = require("./data");

const productShema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: [true, "Please enter a product name"],
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  reviews: [
    {
      id: { type: Number, required: false },
      text: { type: String, required: false },
      rating: { type: Number, required: false },
      user: { type: String, required: false },
    },
  ],
});

const Product = mongoose.model("product", productShema);

const insertProducts = async () => {
  try {
    const existingData = await Product.findOne({});
    if (!existingData) {
      await Product.insertMany(products);
      console.log("Data inserted successfully.");
    } else {
      console.log("Data already exists.");
    }
  } catch (error) {
    console.log("Error inserting data:", error);
  }
};
insertProducts();

module.exports = Product;
