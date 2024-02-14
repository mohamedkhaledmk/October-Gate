import Hospital from "@/models/Hospital";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const allHospitals = await Hospital.find();
      res.status(200).json({
        status: "Success",
        Message: "These are all the Hospitals",
        data: allHospitals,
      });
    } catch (err) {
      res.status(500).json({
        status: "Error",
        message: "There is a problem fetching the hospitals",
        error: err,
        data: [],
      });
    }
  } else if (req.method === "POST") {
    try {
      const newHospital = await Hospital.create(req.body);
      res.status(201).json({
        status: "success",
        message: "Hospital added successfully",
        data: newHypermarket,
      });
    } catch (error) {
      res.status(500).json({
        status: "Error",
        message: "There is a problem fetching the hospitals",
        error: error,
        data: [],
      });
    }
  }
}
