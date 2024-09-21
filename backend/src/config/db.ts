import mongoose from "mongoose";

export const connectDB = async (uri: string) => {
	try {
		await mongoose.connect(uri);
		console.log("Database is connected");
	} catch (error) {
		console.log("Database is failed to connect.");
	}
};
