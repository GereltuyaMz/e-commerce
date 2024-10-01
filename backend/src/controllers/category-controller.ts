import Category from "../models/category";
import { Request, Response } from "express";

export const createCategory = async (req: Request, res: Response) => {
	const { name } = req.body;

	try {
		const createdCategory = await Category.create({
			name,
		});

		res
			.status(201)
			.json({
				message: `category created successfully!`,
				category: createdCategory,
			});
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: "Category creation failed" });
	}
};
