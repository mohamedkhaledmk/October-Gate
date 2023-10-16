import Link from "next/link";
import React from "react";

const Card = (props) => {
  const mall = props.mall;
  const index = props.index;
  return (
    <Link
      href={`/malls/${mall._id}`}
      className="max-w-xs rounded overflow-hidden shadow-lg"
    >
      <img
        className="w-full"
        src={
          mall.images
            ? mall.images[0]
            : "https://source.unsplash.com/300x225/?wave"
        }
        alt="img"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center ">{mall.name}</div>
        <p className="text-gray-700 text-center  text-base">
          {mall.description}
        </p>
      </div>
      <div className="px-6 py-4 flex w-full  justify-center">
        <button
          href={`/malls/${mall._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full "
        >
          المزيد
        </button>
      </div>
    </Link>
  );
};

export default Card;
