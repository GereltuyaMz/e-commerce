import User from "../models/user";

const getCurrentUser = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById({ _id: id });
    res.status(200).json({ message: "success", user: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
