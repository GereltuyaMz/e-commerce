import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user";
import dotenv from "dotenv";

dotenv.config();
const jwtPrivateKey = process.env.JWT_SECRET_KEY || "";

export const signUp = async (req: Request, res: Response) => {
	const { name, email, password, address, role } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const createdUser = await User.create({
			name,
			email,
			password: hashedPassword,
			address: {
				district: address.district,
				street: address.street,
				buildingNo: address.buildingNo,
			},
			role,
		});
		
		res
			.status(201)
			.json({ message: `user ${createdUser.email} created successfully!` });
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: "User creation failed" });
	}
};

export const signIn = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "User should sign up first" });
		}
		const isValidPassword = await bcrypt.compare(password, user.password);

		if (!isValidPassword) {
			return res.status(400).json({ message: "Wrong password" });
		}

		console.log("jwtPrivateKey", jwtPrivateKey);
		const accessToken = jwt.sign({ userId: user._id }, jwtPrivateKey, {
			expiresIn: "1h",
		});
		const refreshToken = jwt.sign({ userId: user._id }, jwtPrivateKey, {
			expiresIn: "1d",
		});

		res
			.status(200)
			.cookie("refreshToken", refreshToken, {
				httpOnly: true,
				sameSite: "strict",
			})
			.header("Authorization", accessToken)
			.send(user);
		// res
		// 	.status(200)
		// 	.json({ message: `${user.email} successfully signed in!`, accessToken });
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: "User creation failed" });
	}
};

// generate a new access token
// access tokens short-lived for security reasons while still allowing the user to remain authenticated for longer periods of time.

// 1. check presence, 2. check its validity, 3. generate a new access token with the same information

export const refreshToken = (req: Request, res: Response) => {
	const refreshToken = req.cookies["refreshToken"];

	// check presence
	if (!refreshToken) {
		return res.status(401).send("Access Denied. No refresh token provided.");
	}
	try {
		// check its validity
		const decoded = jwt.verify(refreshToken, jwtPrivateKey) as JwtPayload;
		console.log("decoded from refresh", decoded);
		// generate a new access token with the same information
		const accessToken = jwt.sign({ user: decoded.userId }, jwtPrivateKey, {
			expiresIn: "1h",
		});
		console.log("accessToken from refresh route", accessToken);
		res.header("Authorizations", accessToken).send(decoded.user);
	} catch (error) {
		console.error(error);
		return res.status(400).send("Invalid refresh token.");
	}
};
