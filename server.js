require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);
app.use(errorMiddleware);

// --------- connect to MongoDB --------------

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`connected to MongoDB`);
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
