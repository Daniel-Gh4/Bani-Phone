import { enTofa } from "@/components/ProductBox";
import Link from "next/link";

async function ProductDetail({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const mainProduct = await res.json();

  return (
    <div className="center w-full">
      <div className="flex flex-col justify-between items-center my-5 w-4/5 py-12 px-2.5 bg-amber-100 rounded-xl md:flex-row md:items-start md:m-4 xl:w-3/4">
        <div className="w-full mr-0 mb-5 md:w-2/5 md:mr-5">
          <img
            className="w-full h-auto rounded-xl"
            src={mainProduct.image}
            alt={mainProduct.title}
          />
        </div>
        <div className="w-full mx-auto md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800 mb-5 md:text-xl">
            {mainProduct.title}
          </h1>
          <span>دسته بندی:</span>
          <Link href={`/products?category=${mainProduct.category}`}>
            {mainProduct.category}
          </Link>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 md:text-lg">
            {mainProduct.description}
          </p>
          <div className="flex items-center justify-between mt-1.5">
            <div className="text-base font-bold text-gray-800 md:text-lg xl:text-2xl">
              {enTofa(mainProduct.price)}
            </div>
            <button className="bg-sky-600 text-white border-none py-1.5 px-4 rounded-lg cursor-pointer transition-colors duration-300 ease-in hover:bg-sky-700 md:py-3 md:px-6 md:text-lg">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
