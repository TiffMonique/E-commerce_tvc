import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

export const addProduct = async (req, res) => {
  try {
    const { category: categoryId, name, price, description, image, stock } = req.body;

    if (!categoryId || !name || price === undefined || !description || !image || stock === undefined) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingCategory = await Category.findOne({ id: categoryId });
    if (!existingCategory) {
      return res.status(400).json({ message: "Category does not exist." });
    }

    const newProduct = new Product({
      category: categoryId,
      name,
      price,
      description,
      image,
      stock,
    });

    await newProduct.save();

    return res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error.message);
    return res.status(500).json({ message: "Server error, please try again later." });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;

    const filter = category ? { category } : {};

    const products = await Product.find(filter).sort({ createdAt: -1 });
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ message: "Server error, please try again later." });
  }
};


export const editProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
      { productId },
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ message: "Server error, please try again later." });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const deletedProduct = await Product.findOneAndDelete({ productId });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ message: "Server error, please try again later." });
  }
};
