export async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    try {
      const hypermarket = await Hypermarket.findById(id);
      return res
        .status(200)
        .json({ status: true, message: "success", data: hypermarket });
    } catch (error) {
      res.status(404).json({
        status: "error",
        note: "Id may be not found!",
        message: error.message,
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
