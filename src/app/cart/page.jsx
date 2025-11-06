import { enTofa } from "@/components/ProductBox";

const products = [
  {
    id: 1,
    title: "محصول 1",
    price: "500000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    description: "مثال برای محصول 1",
  },
  {
    id: 2,
    title: "محصول 2",
    price: "500000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    description: "مثال برای محصول 2",
  },
  {
    id: 3,
    title: "محصول 3",
    price: "500000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    description: "مثال برای محصول 3",
  },
  {
    id: 4,
    title: "محصول 4",
    price: "500000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    description: "مثال برای محصول 4",
  },
  {
    id: 5,
    title: "محصول 5",
    price: "500000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    description: "مثال برای محصول 5",
  },
];

function Cart() {
  let totalPrice = 0;
  products.forEach((product) => (totalPrice += Number(product.price)));

  return (
    <div className="grid grid-cols-1 gap-10 my-10 mx-auto max-w-4/5 py-0 px-5 md:grid-cols-2">
      <div className="bg-white p-5 rounded-xl shadow-lg">
        <h2>سبد خرید</h2>
        {products.length == 0 && <div>سبد خرید خالی است</div>}
        {products.length > 0 && (
          <div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-right border-b border-b-white font-bold">کالا</th>
                  <th className="p-3 text-right border-b border-b-white font-bold">قیمت (تومان)</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="flex items-center gap-2.5">
                      <img
                        src={product.image}
                        width={80}
                        height={80}
                        className="m-3 w-20 h-20 rounded-xl object-cover border md:w-24 md:h-2/4"
                      />
                      {product.title}
                    </td>
                    <td className="p-3 text-right border-b border-b-white">{enTofa(product.price)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="p-3 text-right border-b border-b-white">مجموع:</td>
                  <td className="p-3 text-right border-b border-b-white">{enTofa(totalPrice)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      {products.length > 0 && (
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-right">اطلاعات شما</h2>
          <form className="flex flex-col gap-2.5">
            <input type="text" className="p-2.5 border border-white rounded-lg text-sm w-full" placeholder="نام" />
            <input type="text" className="p-2.5 border border-white rounded-lg text-sm w-full" placeholder="ایمیل" />
            <input type="text" className="p-2.5 border border-white rounded-lg text-sm w-full" placeholder="شهر" />
            <input type="text" className="p-2.5 border border-white rounded-lg text-sm w-full" placeholder="کشور" />
            <input type="text" className="p-2.5 border border-white rounded-lg text-sm w-full" placeholder="آدرس" />
            <input type="text" className="p-2.5 border border-white rounded-lg text-sm w-full" placeholder="کد پستی" />
            <button className="bg-black text-white p-3 border-none rounded-lg text-lg cursor-pointer text-center disabled:text-gray-500 disabled:cursor-not-allowed">پرداخت آنلاین</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
