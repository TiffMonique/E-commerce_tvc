import express from "express";
import {
  addProduct,
  getAllProducts,
  editProduct,
  deleteProduct,
} from "../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.post("/product", addProduct);
productRoutes.get("/products", getAllProducts);
productRoutes.put("/product/:productId", editProduct);
productRoutes.delete("/product/:productId", deleteProduct);

export default productRoutes;
