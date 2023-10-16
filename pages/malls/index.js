// pages/Malls.js
import axios from "axios";
import Card from "@/components/Card";
import React, { useState, useEffect } from "react";

const Malls = () => {
  const [malls, setMalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/malls");
        setMalls(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setMalls([]);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log("first", malls);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {malls.map((mall, index) => (
        <Card mall={mall} index={index} />
      ))}
    </div>
  );
};

export default Malls;
