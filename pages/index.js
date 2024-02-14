import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>بوابة اكتوبر</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-[#c47b2b] via-[#e39b54] to-[#f0b87a] text-white">
        {/* <h1 className="font-bold text-7xl text-[#2b5cc4] text-center py-4">
          بوابة اكتوبر
        </h1> */}
        <div className="bg-brown-800 text-white py-12">
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
                <div className="bg-white text-orange-500 rounded-lg p-4 cursor-pointer hover:bg-gray-100">
                  Hospitals - المستشفيات
                  <p className="text-sm">يمكنك ايجاد اقرب المستشفيات لك</p>
                </div>
              </Link>
              <Link href="/malls" className="text-xl font-semibold">
                <div className="bg-white text-orange-500 rounded-lg p-4 cursor-pointer hover:bg-gray-100">
                  Malls - المولات
                  <p className="text-sm">
                    اكتشف افضل المولات الموجودة ب مدينة 6 اكتوبر و تعرف علي
                    الانشطة بداخلها
                  </p>
                </div>
              </Link>
              <Link href="/hypermarkets" className="text-xl font-semibold">
                <div className="bg-white text-orange-500 rounded-lg p-4 cursor-pointer hover:bg-gray-100">
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
