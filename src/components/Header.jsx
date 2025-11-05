"use client";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  return (
    <header className="bg-sky-600 p-2.5">
      <div className="flex flex-row-reverse justify-between max-w-4/5 my-0 mx-auto py-0 px-5">
        <Link
          className="relative z-50 flex justify-between items-center gap-4 text-white"
          href={"/"}
        >
          <h2>Bani Phone</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7"
          >
            <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
            <path
              fillRule="evenodd"
              d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <nav
          className={`hidden gap-4 fixed top-0 bottom-0 left-0 right-0 py-16 px-5 bg-sky-600 z-40 md:flex md:static md:p-0 ${
            isActiveMobile ? "active" : ""
          }`}
        >
          <Link
            className="block text-white no-underline py-2.5 px-0 md:p-0"
            href={"/"}
          >
            صفحه اصلی
          </Link>
          <Link
            className="block text-white no-underline py-2.5 px-0 md:p-0"
            href={"/products"}
          >
            محصولات
          </Link>
          <Link
            className="block text-white no-underline py-2.5 px-0 md:p-0"
            href={"/cart"}
          >
            سبد خرید
          </Link>
        </nav>
        <button
          onClick={() => {
            setIsActiveMobile((prev) => !prev);
          }}
          className="w-8 h-8 border-none text-white cursor-pointer relative z-50 md:hidden md:p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
