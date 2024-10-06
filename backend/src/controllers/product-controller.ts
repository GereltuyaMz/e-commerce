import Product from "../models/product";
import { Request, Response } from "express";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json({ message: "success to get all product", products });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get all product" });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById({ _id: productId });
    res.status(200).json({ message: "success to get product", product });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get product" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, size, quantity, category } = req.body;

  try {
    const createdProduct = await Product.create({
      name,
      price,
      description,
      size,
      quantity,
      category,
    });

    res.status(201).json({
      message: `product created successfully!`,
      product: createdProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Product creation failed" });
  }
};
