import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

export const addProduct = async (req, res) => {
  try {
    const { productId, category: categoryId, name, price, description, image, stock } = req.body;

    if (!productId || !categoryId || !name || price === undefined || !description || stock === undefined) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!image) {
      return res.status(400).json({ message: "Image is required." });
    }

    const existingCategory = await Category.findOne({ id: categoryId });
    if (!existingCategory) {
      return res.status(400).json({ message: "Category does not exist." });
    }

    // Decodificar la imagen base64
    const imageBuffer = Buffer.from(image, 'base64');

    const newProduct = new Product({
      productId,
      category: categoryId,
      name,
      price,
      description,
      stock,
      image: {
        data: imageBuffer, // Este es el buffer de la imagen
        contentType: 'image/png' // Ajusta esto según el tipo de imagen
      }
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


    const productsWithBase64Images = products.map(product => {
      const base64Image = `data:${product.image.contentType};base64,${product.image.data.toString('base64')}`;
      const cleanedString = base64Image.replace(/dataimage\/pngbase64/, '');
      const base64 = cleanedString.replace(/^data:image\/(png|jpeg|gif);base64,/, '');

      return {
        ...product.toObject(),
        image: base64
      };
    });

    return res.status(200).json(productsWithBase64Images);
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
