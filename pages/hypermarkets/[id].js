import React from "react";
import axios from "axios";
import ZoomSlider from "@/components/Zoom";
import Image from "next/image";
import facebookIcon from "../../public/icons/face.svg";
import clockIcon from "../../public/icons/clock.svg";
import instaIcon from "../../public/icons/insta.svg";
import { useRouter } from "next/router";
const hypermarket = ({ oneHypermarket }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <>
      <div>
        {" "}
        <button
          onClick={goBack}
          className="m-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          الرجوع
        </button>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-center text-[64px] first-letter:text-8xl my-8">
            {oneHypermarket.data.name}
          </h1>
          <div className=" bg-gray-200 flex justify-center">
            {" "}
            <div className="mt-4">
              <h2 className="font-semibold text-2xl">المزيد من المعلومات</h2>
              <div className="flex">
                <Image src={clockIcon} width={25} height={25} />
                <span className="ml-4 text-green-600 font-bold">
                  Open : {oneHypermarket.data.openingHours}
                </span>
              </div>
              <div className="flex">
                <Image src={facebookIcon} width={25} height={25} />

                <a
                  href={oneHypermarket.data.fb}
                  className="ml-4 text-blue-600 font-bold hover:underline"
                >
                  {oneHypermarket.data.fb}
                </a>
              </div>
              <div className="flex">
                <Image src={instaIcon} width={25} height={25} />

                <a
                  href={oneHypermarket.data.insta}
                  className="ml-4 text-blue-600 font-bold hover:underline"
                >
                  {oneHypermarket.data.insta}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-[32px] text-center">الوصف</h2>{" "}
          <p className="bg-gray-200 text-center">
            {oneHypermarket.data.description}
          </p>
        </div>
        <div className="flex justify-center">
          {" "}
          <h2 className="font-semibold text-[32px]">المعرض</h2>{" "}
        </div>{" "}
        <div>
          <div className="m-10">
            <ZoomSlider images={oneHypermarket.data.images} />
          </div>
        </div>
        {/* <div>
        <button onClick={() => console.log(oneHypermarket)}>click</button>
      </div> */}
        ;
      </div>
    </>
  );
};

export default hypermarket;

export async function getServerSideProps({ query }) {
  const id = query.id;
  const response = await axios.get(
    `http://localhost:3000/api/hypermarkets/${id}`
  );
  const oneHypermarket = response.data;
  return { props: { oneHypermarket } };
}
