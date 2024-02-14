import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/Card";
import { useRouter } from "next/router";

const Malls = () => {
  const [malls, setMalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
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

  const filteredMalls = malls.filter((mall) =>
    mall.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    // Show loader while data is being fetched
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <span className="loading loading-spinner xs:loading-xs md:loading-md lg:loading-lg xl:loading-xl"></span>
      </div>
    );
  }

  return (
    <>
      {" "}
      <button
        onClick={goBack}
        className="mt-4 mb-2 ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        الرجوع
      </button>
      <form
        role="search"
        action="search"
        className="w-full flex justify-center pt-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchQuery(searchQuery);
        }}
      >
        <input
          type="text"
          placeholder="Search Malls"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-200 border border-gray-400 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white rounded-r-lg p-2.5"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredMalls.map((mall, index) => (
          <Card key={mall.id} mall={mall} index={index} />
        ))}
      </div>
    </>
  );
};

export default Malls;
