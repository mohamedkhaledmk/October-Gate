import Hypermarket from "../../../models/Hypermarket.js";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const hypermarkets = await Hypermarket.find();
      return res
        .status(200)
        .json({ status: true, message: "success", data: hypermarkets });
    } catch (error) {
      res.status(404).json({
        status: "error",
        note: "Connection Error!",
        message: error.message,
      });
    }
  } else if (req.method === "POST") {
    try {
      const newHypermarket = await Hypermarket.create(req.body);
      res.status(201).json({ status: "success", data: newHypermarket });
    } catch (error) {
      res.status(500).json({
        status: "Success",
        message: "Internal server Error",
        error: error,
      });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    try {
      const updatedHypermarket = await Hypermarket.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!updatedHypermarket) {
        return res
          .status(404)
          .json({ status: "error", message: "Hypermarket not found" });
      }
      res.status(200).json({ status: "success", data: updatedHypermarket });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  } else if (req.method === "PATCH") {
    const id = req.query.id;
    try {
      let wantedHypermarket = await Hypermarket.findById(id);
      Object.assign(wantedHypermarket, req.body);
      const updatedHypermarket = await Hypermarket.findByIdAndUpdate(
        id,
        wantedHypermarket
      );
      if (!wantedHypermarket) {
        return res
          .status(404)
          .json({ status: "error", message: "Hypermarket not found" });
      }
      res.status(200).json({ status: "success", data: wantedHypermarket });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
}
