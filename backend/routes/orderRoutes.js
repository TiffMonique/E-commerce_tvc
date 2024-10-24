import express from "express";
import { createOrder, deleteOrder, getAllOrders, updateOrder } from "../controllers/orderController.js";

const orderRoutes = express.Router();

orderRoutes.post("/order", createOrder);
orderRoutes.get("/orders", getAllOrders);
orderRoutes.delete("/:id", deleteOrder);
orderRoutes.put("/:id", updateOrder);

export default orderRoutes;
