import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex justify-between items-center">
        <a
          className="text-3xl font-bold font-heading"
          href="#"
          style={{
            fontFamily: "Noto Nastaliq Urdu,Noto Kufi Arabic, sans-serif",
          }}
        >
          {/* <img className="h-9" src="next.svg" alt="logo" /> */}
          بوابة اكتوبر
        </a>
        <ul className="hidden md:flex space-x-12">
          <li>
            <a className="hover:text-gray-200" href="#">
              الرئيسية
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              الاقسام
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Collections
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              نبذة عننا
            </a>
          </li>
        </ul>

        <div className="hidden xl:flex items-center space-x-5 items-center">
          <a className="hover:text-gray-200" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </a>

          <a className="flex items-center hover:text-gray-200" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
