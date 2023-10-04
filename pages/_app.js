import "@/styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import { connectDB } from "@/config/db";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  connectDB();
  // }, []);
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Changa:wght@800&family=Noto+Kufi+Arabic:wght@600&family=Noto+Nastaliq+Urdu:wght@600&family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital@1&display=swap"
        rel="stylesheet"
      />{" "}
      <Head>
        <title>بوابة اكتوبر</title>
        <meta
          name="description"
          content="بوابة اكتوبر لمعرفة كل ما يخص مدينة 6 اكتوبر  - october gate is a website for finding everything related to 6 of october such as malls,hospitals and all services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <Navbar />
      <div className="min-h-screen">
        {" "}
        <Component {...pageProps} />
      </div>{" "}
      <Footer />
    </>
  );
}
