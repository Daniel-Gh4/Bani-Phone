function Footer() {
  return (
    <footer className="bg-sky-600 pt-20">
      <div className="max-w-4/5 my-0 mx-auto py-0 px-5">
        <div className="grid grid-cols-2 gap-x-2.5 gap-y-0">
          <div>
            <span className="text-white font-bold text-lg/loose mb-8">ارتباط با ما</span>
            <ul className="pr-2.5 list-none">
              <li className="text-white no-underline text-lg/snug font-light mb-3.5">اینستاگرام</li>
              <li className="text-white no-underline text-lg/snug font-light mb-3.5">واتساپ</li>
              <li className="text-white no-underline text-lg/snug font-light mb-3.5">تلگرام</li>
              <li className="text-white no-underline text-lg/snug font-light mb-3.5">ایتا</li>
            </ul>
          </div>
          <div>
            <span className="text-white font-bold text-lg/loose mb-8">محصولات</span>
            <ul>
              <li className="text-white no-underline text-lg/snug font-light mb-3.5">موبایل</li>
              <li className="text-white no-underline text-lg/snug font-light mb-3.5">لپتاپ</li>
              <li className="text-white no-underline text-lg/snug font-light mb-3.5">لوازم جانبی</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
