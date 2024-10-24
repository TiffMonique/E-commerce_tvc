import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    let { client, total } = req.body;

    const clients = [
      "Juan Pérez",
      "María González",
      "Carlos López",
      "Ana Fernández",
      "Luis Martínez",
      "Sofía Rodríguez",
      "Jorge Sánchez",
      "Laura Torres",
      "David Ramírez",
      "Isabel Díaz",
    ];

    if (!client) {
      client = clients[Math.floor(Math.random() * clients.length)];
    }

    if (!total) {
      return res.status(400).json({ message: "Total is required." });
    }

    const newOrder = new Order({
      orderID: generateOrderID(),
      client: client,
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
  const randomID = Math.floor(1000 + Math.random() * 9000);
  return `ORD-${randomID}`;
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    if (orders.length === 0) {
      return res.status(200).json({ message: "No orders found" });
    }

    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ message: "Server error, please try again later." });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { client, total, status } = req.body;

    const updatedOrder = await Order.findOneAndUpdate(
      { orderID: id },
      { client, total, status },
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    return res.status(500).json({ message: "Server error, please try again later." });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findOneAndDelete({ orderID: id });

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json({ message: "Order deleted successfully", deletedOrder });
  } catch (error) {
    console.error("Error deleting order:", error);
    return res.status(500).json({ message: "Server error, please try again later." });
  }
};

