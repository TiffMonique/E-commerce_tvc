import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const { client, total } = req.body;

    if (!client || !total) {
      return res.status(400).json({ message: "Client name and total are required." });
    }

    const newOrder = new Order({
      orderID: generateOrderID(),
      client: client || "Cliente genérico",
      total: total,
      status: "Pending",
    });

    await newOrder.save();

    return res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ message: "Server error, please try again later." });
  }
};

const generateOrderID = () => {
  return `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};
