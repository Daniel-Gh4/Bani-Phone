"use client";
import { CartContext } from "@/contexts/CartContext";
import Link from "next/link";
import { useContext } from "react";

export function enTofa(input) {
  const enTofa = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  return input.toString().replace(/[0-9]/g, (digit) => enTofa[digit]);
}

function ProductBox({ product }) {
  let { addToCart } = useContext(CartContext);
  return (
    <div className="border border-gray-100 rounded-xl p-2.5 transition-all duration-300 ease-in hover:shadow-xl hover:-translate-y-1.5">
      <Link href={`products/${product._id}`}>
        <div className="center bg-gray-100 p-4 h-40 rounded-xl shadow-md ">
          <img
            className="max-w-11/12 max-h-11/12 object-contain rounded-xl"
            src={product.image}
            alt={product.title}
          />
        </div>
      </Link>
      <div className="mt-2">
        <Link href={`products/${product._id}`}>
          <div className="font-bold text-base text-gray-600 my-2 mx-0 min-h-12 max-h-12 block overflow-hidden text-ellipsis">
            {product.title}
          </div>
        </Link>
        <div className="flex items-center justify-between mt-1.5">
          <button
            onClick={() => addToCart(product)}
            className="bg-sky-600 text-white border-none py-1.5 px-4 rounded-lg cursor-pointer transition-colors duration-300 ease-in hover:bg-sky-700"
          >
            افزودن به سبد خرید
          </button>
          <span className="text-base font-bold text-gray-800 md:text-lg xl:text-2xl">
            {enTofa(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
