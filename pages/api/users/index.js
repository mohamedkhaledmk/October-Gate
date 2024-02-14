import User from "../../../models/User.js";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      console.log(User.find());
      const user = await User.find();
      res.status(200).json({ status: "success", data: user });
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  } else if (req.method === "POST") {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json({ status: "success", data: newUser });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
}
