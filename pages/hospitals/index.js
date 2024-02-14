// pages/Hospitals.js
import axios from "axios";
import Card from "@/components/Card";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
const Hospitals = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/hospitals");
        setHospitals(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setHospitals([]);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const filteredHospitals = hospitals.filter((hospital) => {
    return hospital.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (loading) {
    // Show loader while data is being fetched
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <span className="loading loading-spinner xs:loading-xs md:loading-md lg:loading-lg xl:loading-xl"></span>
      </div>
    );
  }

  if (hospitals.length === 0) {
    // Show message when there are no hospitals
    return (
      <div className="grid grid-cols-1  p-4">
        <div className="flex justify-center">
          <button
            onClick={goBack}
            className="m-12 w-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            الرجوع
          </button>
        </div>{" "}
        <div>No Hospitals available</div>
      </div>
    );
  }
  return (
    <>
      <button
        onClick={goBack}
        className="my-2 mx-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        الرجوع
      </button>{" "}
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
      </form>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredHospitals.map((hospital, index) => (
          <Card hospital={hospital} index={index} />
        ))}{" "}
      </div>
    </>
  );
};

export default Hospitals;
