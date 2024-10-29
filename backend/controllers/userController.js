import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "El nombre de usuario ya está en uso." });
    }

    const user = await User.create({
      username,
      password,
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el registro de usuario.", error });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Credenciales no válidas." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      _id: user._id,
      username: user.username,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error en la autenticación del usuario.", error });
  }
};
