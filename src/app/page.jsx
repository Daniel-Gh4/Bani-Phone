import LatestProducts from "@/components/LatestProducts";

export default function Home() {
  return (
      <div className="flex justify-around items-center bg-amber-100 w-4/5 mx-auto rounded-2xl my-10">
        <div>
          <h1 className="text-3xl text-sky-700 font-bold mb-10">
            به فروشگاه بانی فون خوش آمدید.
          </h1>
          <p className="text-xl text-amber-800 mt-10">
            مکانی برای پیدا کردن موبایل های روز بازار
          </p>
        </div>
        <img className="rounded-full" src="m2.jpg" alt="بانی فون" />
      </div>
  );
}
