import Mall from "../../../models/Mall.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const newMall = await Mall.create(req.body);
      res.status(201).json({ status: "success", data: newMall });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  } else if (req.method === "PATCH") {
    const id = req.query.id;
    // console.log("first", id);
    try {
      let wantedMall = await Mall.findById(id);
      // console.log("firstss", wantedMall, req.body);
      Object.assign(wantedMall, req.body);
      const updatedMall = await Mall.findByIdAndUpdate(id, wantedMall);
      if (!wantedMall) {
        return res
          .status(404)
          .json({ status: "error", message: "Mall not found" });
      }
      res.status(200).json({ status: "success", data: wantedMall });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    try {
      const deletedMall = await Mall.findByIdAndDelete(id);
      if (!deletedMall) {
        return res
          .status(404)
          .json({ status: "error", message: "Mall not found" });
      }
      res.status(200).json({ status: "success", data: deletedMall });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    try {
      const updatedMall = await Mall.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedMall) {
        return res
          .status(404)
          .json({ status: "error", message: "Mall not found" });
      }
      res.status(200).json({ status: "success", data: updatedMall });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  } else if (req.method === "GET") {
    const allMalls = await Mall.find();
    res.status(200).json({ status: "success", data: allMalls });
  } else {
    res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }
}
