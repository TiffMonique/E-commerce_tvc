import express from "express";
import { createOrder, deleteOrder, getAllOrders, updateOrder } from "../controller/orderController.js";

const route = express.Router();

route.post("/order", createOrder);
route.get("/orders", getAllOrders);
route.delete("/:id", deleteOrder);
route.put("/:id", updateOrder);

export default route;
