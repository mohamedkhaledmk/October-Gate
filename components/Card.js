import Link from "next/link";
import React from "react";

const Card = (props) => {
  const { mall, hospital, hypermarket } = props;
  const index = props.index;
  if (mall) {
    return (
      <Link
        href={`/malls/${mall._id}`}
        className="mt-12 mx-auto max-w-xs rounded-xl overflow-hidden shadow-lg hover:scale-110 hover:shadow-2xl"
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
  } else if (hospital) {
    return (
      <Link
        href={`/hospitals/${hospital._id}`}
        className="mt-12 mx-auto max-w-xs rounded-xl overflow-hidden shadow-lg hover:scale-110 hover:shadow-2xl"
      >
        <img
          className="w-full"
          src={
            hospital.images
              ? hospital.images[0]
              : "https://source.unsplash.com/300x225/?wave"
          }
          alt="img"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center ">
            {hospital.name}
          </div>
          <p className="text-gray-700 text-center  text-base">
            {hospital.description}
          </p>
        </div>
        <div className="px-6 py-4 flex w-full  justify-center">
          <button
            href={`/hospitals/${hospital._id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full "
          >
            المزيد
          </button>
        </div>
      </Link>
    );
  } else if (hypermarket) {
    return (
      <Link
        href={`/hypermarkets/${hypermarket._id}`}
        className="mt-12 mx-auto max-w-xs rounded-xl overflow-hidden shadow-lg hover:scale-110 hover:shadow-2xl"
      >
        <img
          className="w-full"
          src={
            hypermarket.images
              ? hypermarket.images[0]
              : "https://source.unsplash.com/300x225/?wave"
          }
          alt="img"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center ">
            {hypermarket.name}
          </div>
          <p className="text-gray-700 text-center  text-base">
            {hypermarket.description}
          </p>
        </div>
        <div className="px-6 py-4 flex w-full  justify-center">
          <button
            href={`/hypermarkets/${hypermarket._id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full "
          >
            المزيد
          </button>
        </div>
      </Link>
    );
  }
};

export default Card;
