import Hospital from "@/models/Hospital";
export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const wantedHospital = await Hospital.findById(id);
      if (!wantedHospital || wantedHospital === undefined) {
        res.status(404).json({
          status: "Error",
          message: "There is no hospitals with this id",
        });
      }
      res.status(200).json({
        status: "Success",
        message: "This is the Hospital with the id requested",
        data: wantedHospital,
      });
    } catch (error) {
      res.status(500).json({
        status: "Error",
        message: "There is an error fetching the hospitals data",
        error: error,
      });
    }
  } else if (req.method === "PUT") {
    try {
      const newHospital = await Hospital.findByIdAndUpdate(id, req.body, {
        new: true,
        newValidators: true,
      });
      res.status(200).json({
        status: "Success",
        data: newHospital,
      });
    } catch (error) {
      res.status(500).json({
        status: "Error",
        message: "There is an error fetching the hospitals data",
        error: error,
      });
    }
  } else if (req.method === "PATCH") {
    try {
      const newHospital = await Hospital.findByIdAndUpdate(id, req.body, {
        new: true,
        newValidators: true,
      });
      res.status(200).json({
        status: "Success",
        data: newHospital,
      });
    } catch (error) {
      res.status(500).json({
        status: "Error",
        message: "There is an error fetching the hospitals data",
        error: error,
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedHospital = await Hospital.findByIdAndDelete(id, req.body);
      res.status(200).json({
        status: "Success",
        data: deletedHospital,
      });
    } catch (error) {
      res.status(500).json({
        status: "Error",
        message: "There is an error fetching the hospitals data",
        error: error,
      });
    }
  }
}
