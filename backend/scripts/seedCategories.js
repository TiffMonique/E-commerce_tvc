import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "../models/categoryModel.js";

dotenv.config();

const categories = [
  { name: "Hogar" },
  { name: "Jardinería" },
  { name: "Electrodomésticos" },
];

const seedCategories = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    for (const category of categories) {
      const existingCategory = await Category.findOne({ name: category.name });
      if (!existingCategory) {
        await Category.create(category);
        console.log(`Categoría "${category.name}" insertada.`);
      } else {
        console.log(`Categoría "${category.name}" ya existe.`);
      }
    }

    mongoose.connection.close();
  } catch (error) {
    console.error("Error al insertar categorías:", error);
  }
};

seedCategories();
