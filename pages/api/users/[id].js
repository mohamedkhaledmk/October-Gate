export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const user = await User.findById(req.query.id);
      res.status(200).json({ status: "success", data: user });
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  } else if (req.method === "PUT") {
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedUser) {
        return res
          .status(404)
          .json({ status: "error", message: "User not found" });
      }
      res.status(200).json({ status: "success", data: updatedUser });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  } else if (req.method === "PATCH") {
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedUser) {
        return res
          .status(404)
          .json({ status: "error", message: "User not found" });
      }
      res.status(200).json({ status: "success", data: updatedUser });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res
          .status(404)
          .json({ status: "error", message: "User not found" });
      }
      res.status(200).json({ status: "success", data: deletedUser });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
}
