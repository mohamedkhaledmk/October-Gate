import React from "react";
import Image from "next/image";
import fingIcon from "../../public/icons/fing.svg";
import facebookIcon from "../../public/icons/facebook.svg";
import googleIcon from "../../public/icons/google.svg";
import { useRouter } from "next/router";
const register = () => {
  const Router = useRouter();
  return (
    // background image
    <div className="bg-gradient-to-r from-[#C06FE6] to-[#D7A2F2] min-h-screen w-full h-full flex items-center justify-center">
      {" "}
      <div className="flex flex-col md:flex-row items-center justify-center h-[80%] w-[80%] bg-gray-100 ">
        {" "}
        <div className="w-1/2 flex items-center justify-center mt-12">
          <Image
            className="md:w-full md:h-full"
            src={fingIcon}
            width={300}
            height={300}
          />
        </div>
        <form className="w-1/2  py-4 m-12">
          <h2 class="text-3xl mb-4">Login</h2>
          <p class="mb-4">Log in to your account.</p>
          <input
            type="email"
            placeholder="Email"
            className="block mx-[1%] my-4 border border-gray-400 py-1 px-2 w-[84%]"
          />
          <input
            type="password"
            placeholder="Password"
            className="block mx-[1%] my-4 border border-gray-400 py-1 px-2 w-[84%]"
          />
          <div class="mt-5">
            <input
              type="checkbox"
              required
              class="border border-gray-400 mx-2"
            />
            <span>
              I accept the{" "}
              <a href="#" class="text-purple-500 font-semibold">
                Terms of Use
              </a>{" "}
              &{" "}
              <a href="#" class="text-purple-500 font-semibold">
                Privacy Policy
              </a>
            </span>
          </div>
          <button
            type="submit"
            onClick={() => {
              Router.push(`/`);
            }}
            className="block bg-purple-500 text-white text-center mx-[1%] my-4 py-3 px-2 w-[84%]"
          >
            Log In
          </button>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default register;
