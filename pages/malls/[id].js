import React from "react";
import axios from "axios";
import ZoomSlider from "@/components/Zoom";
import Image from "next/image";
import facebookIcon from "../../public/face.svg";
import instaIcon from "../../public/insta.svg";
const mall = ({ oneMall }) => {
  const website = "ss";
  const locationLink = "ss";
  const facebookLink = "ss";
  return (
    <>
      <div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-center text-[64px] first-letter:text-8xl my-8">
            {oneMall.data.name}
          </h1>
          <div className=" bg-gray-200 flex justify-center">
            {" "}
            <div className="mt-4">
              <h2 className="font-semibold text-2xl">المزيد من المعلومات</h2>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18h-2v-2h2v2zm-2-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>

                <span className="ml-4 text-green-600 font-bold">
                  Open : {oneMall.data.openingHours}
                </span>
              </div>
              <div className="flex">
                <Image src={facebookIcon} width={25} height={25} />

                <span className="ml-4 text-green-600 font-bold">
                  Open : {oneMall.data.openingHours}
                </span>
              </div>
              <div className="flex">
                <Image src={instaIcon} width={25} height={25} />

                <span className="ml-4 text-green-600 font-bold">
                  Open : {oneMall.data.openingHours}
                </span>
              </div>

              <ul className="list-disc ml-8">
                {website && (
                  <li>
                    الموقع الرسمي:{" "}
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      {website}
                    </a>
                  </li>
                )}
                {locationLink && (
                  <li>
                    رابط الموقع:{" "}
                    <a
                      href={locationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {locationLink}
                    </a>
                  </li>
                )}
                {facebookLink && (
                  <li>
                    صفحة الفيسبوك:{" "}
                    <a
                      href={facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {facebookLink}
                    </a>
                  </li>
                )}
                {/* Add more details as needed */}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-[32px] text-center">الوصف</h2>{" "}
          <p className="bg-gray-200 text-center">{oneMall.data.description}</p>
        </div>
        <div className="flex justify-center">
          {" "}
          <h2 className="font-semibold text-[32px]">المعرض</h2>{" "}
        </div>{" "}
        <div>
          <div className="m-10">
            <ZoomSlider images={oneMall.data.images} />
          </div>
        </div>
        {/* <div>
        <button onClick={() => console.log(oneMall)}>click</button>
      </div> */}
        ;
      </div>
    </>
  );
};

export default mall;

export async function getServerSideProps({ query }) {
  const id = query.id;
  const response = await axios.get(`http://localhost:3000/api/malls/${id}`);
  const oneMall = response.data;
  return { props: { oneMall } };
}
