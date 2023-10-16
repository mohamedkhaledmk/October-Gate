// pages/Hypermarkets.js
import axios from "axios";
import Card from "@/components/Card";
import React from "react";

const Hypermarkets = ({ hypermarkets }) => {
  console.log("first", hypermarkets);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {hypermarkets.data.map((hypermarket, index) => (
        <Card hypermarket={hypermarket} index={index} />
      ))}
    </div>
  );
};

export default Hypermarkets;

export async function getStaticProps() {
  try {
    // Fetch hypermarket data from your API endpoint
    const response = await axios.get("http://localhost:3000/api/hypermarkets");

    // Extract the hypermarkets data from the response
    const hypermarkets = response.data;

    return {
      props: {
        hypermarkets,
      },
    };
  } catch (error) {
    console.error("Error fetching hypermarket data:", error);
    return {
      props: {
        hypermarkets: [],
      },
    };
  }
}
