const express = require("express");
const router = express.Router();
const {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// --------- fetching all data = get ------------

router.get("/", getProducts);

// --------- fetching single data = get ------------

router.get("/:id", getSingleProduct);

// --------- add data = post ------------

router.post("/", addProduct);

// --------- edit/update data = put or patch ------------

router.put("/:id", updateProduct);

// --------- delete data = delete ------------

router.delete("/:id", deleteProduct);

module.exports = router;
