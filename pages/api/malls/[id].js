import Mall from "../../../models/Mall";
export default async function (req, res) {
  if (req.method === "GET") {
    try {
      const id = req.query.id;
      const mall = await Mall.findById(id);
      return res
        .status(200)
        .json({ status: true, message: "success", data: mall });
    } catch (error) {
      res.status(404).json({
        status: "error",
        note: "Id may be not found!",
        message: error.message,
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const id = req.body._id;
      const deleted = await Mall.deleteOne({ _id: id });
      return res.status(201).json({
        status: true,
        message: "deleted successfully",
      });
    } catch (err) {
      res.status(500).send("Internal server Error");
    }
  }
}
