// pages/Malls.js
import axios from "axios";
import Card from "@/components/Card";
import React from "react";

const Malls = ({ malls }) => {
  console.log("first", malls);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {malls.data.map((mall, index) => (
        <Card mall={mall} index={index} />
      ))}
      ss
    </div>
  );
};

export default Malls;

export async function getStaticProps() {
  try {
    // Fetch mall data from your API endpoint
    const response = await axios.get("http://localhost:3000/api/malls");

    // Extract the malls data from the response
    const malls = response.data;

    return {
      props: {
        malls,
      },
    };
  } catch (error) {
    console.error("Error fetching mall data:", error);
    return {
      props: {
        malls: [],
      },
    };
  }
}
