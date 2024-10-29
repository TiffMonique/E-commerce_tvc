import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();

const adminUser = {
  username: "admin",
  password: "admin",
};

const seedAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    const existingAdmin = await User.findOne({ email: adminUser.email });
    if (!existingAdmin) {
      await User.create(adminUser);
      console.log(`Usuario administrador "${adminUser.username}" insertado.`);
    } else {
      console.log(`Usuario administrador "${adminUser.username}" ya existe.`);
    }

    mongoose.connection.close();
  } catch (error) {
    console.error("Error al insertar usuario administrador:", error);
  }
};

seedAdminUser();
