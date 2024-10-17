import Cart from "../models/cart";
import { Request, Response } from "express";

export const createCart = async (req: Request, res: Response) => {
	const { userId, productId, quantity } = req.body;

	try {
		const findCart = await Cart.findOne({ user: userId });

		if (!findCart) {
			const cart = await Cart.create({
				user: userId,
				products: [{ product: productId, quantity }],
			});
			return res.status(200).json({ message: "success added cart", cart });
		}

		const existingProduct = findCart.products.findIndex(
			(item) => item.product.toString() === productId
		);

		if (existingProduct > -1) {
			findCart.products[existingProduct].quantity += quantity;
		} else {
			findCart.products.push({ product: productId, quantity });
		}

		const addedCart = await findCart.save();

		res.status(200).json({
			message: "Updated cart",
			cart: addedCart,
		});
	} catch (error) {
		console.error("error", error);
		res.status(500).json({ message: "Error adding item to cart" });
	}
};

export const getCarts = async (req: Request, res: Response) => {
	try {
		const { userId } = req.body;
		const carts = await Cart.find({
			user: userId,
		}).populate("products.product");

		res.status(200).json(carts);
	} catch (error) {
		console.error("error", error);
		res.status(500).json({ message: "Error adding item to cart" });
	}
};
