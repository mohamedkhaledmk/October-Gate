import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="min-h-screen ">
        <h1 className="font-bold first-Word:text-7xl">بوابة اكتوبر</h1>
        <div className="bg-blue-900 text-white py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              اكتشف مدينة السادس من اكتوبر
            </h1>
            <p className="text-lg mb-8">
              اكتشف افضل الخدمات الموجودة في مدينة السادس من اكتوبر و تعرف علي
              ما تريد بسهولة و سرعة 💥{" "}
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/hospitals" className="text-xl font-semibold">
                <div className="bg-white text-blue-900 rounded-lg p-4 cursor-pointer hover:bg-blue-100">
                  Hospitals - المستشفيات
                  <p className="text-sm">يمكنك ايجاد اقرب المستشفيات لك</p>
                </div>
              </Link>
              <Link href="/malls" className="text-xl font-semibold">
                <div className="bg-white text-blue-900 rounded-lg p-4 cursor-pointer hover:bg-blue-100">
                  Malls - المولات
                  <p className="text-sm">
                    اكتشف افضل المولات الموجودة ب مدينة 6 اكتوبر و تعرف علي
                    الانشطة بداخلها
                  </p>
                </div>
              </Link>
              <Link href="/hypermarkets" className="text-xl font-semibold">
                <div className="bg-white text-blue-900 rounded-lg p-4 cursor-pointer hover:bg-blue-100">
                  Hypermarkets - هايبر
                  <p className="text-sm">يمكنك ايجاد هايبر ماركتس قريبة منك</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
