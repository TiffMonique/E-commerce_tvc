import express from "express";
import { createOrder } from "../controller/orderController.js";

const route = express.Router();

route.post("/order", createOrder);

export default route;
