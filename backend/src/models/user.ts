import { Schema, model } from "mongoose";

const userSchema = new Schema({
	name: {
		type: String,
		required: [true, "Please enter your name"],
	},
	email: {
		type: String,
		unique: true,
		required: [true, "Please enter your email"],
	},
	password: {
		type: String,
		minlength: 6,
		required: [true, "Please enter your password"],
	},
	role: {
		type: String,
		enum: ["Admin", "User"],
		default: "User",
	},
	createdAt: { type: Date, default: new Date() },
});

const User = model("User", userSchema);

export default User;
