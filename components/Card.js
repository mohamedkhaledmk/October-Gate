import React from "react";

const Card = (props) => {
  const mall = props.mall;
  const index = props.index;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://source.unsplash.com/300x225/?wave"
        alt="Wave"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{mall.name}</div>
        <p className="text-gray-700 text-base">{mall.description}</p>
      </div>
      <div className="px-6 py-4 flex w-full justify-center">
        <a
          href={`/malls/${mall._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full "
        >
          المزيد
        </a>
      </div>
    </div>
  );
};

export default Card;
