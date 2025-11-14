"use client";
import { enTofa } from "@/components/ProductBox";
import { CartContext } from "@/contexts/CartContext";
import { useContext, useState } from "react";

function Cart() {
  let { cart, removeFromCart, updateQuantity, getTotal, clearCart } =
    useContext(CartContext);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
  });

  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const orderData = {
      user: userInfo,
      cart,
      totalPrice: getTotal(),
    };

    try {
      const res = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        alert("سفارش ثبت شد.");
        clearCart();
        setUserInfo({
          name: "",
          email: "",
          country: "",
          city: "",
          address: "",
          postalCode: "",
        });
      } else {
        alert("خطا در ثبت سفارش");
      }
    } catch (err) {
      alert("مشکل پیش آمد.");
    }
  }

  return (
    <div className="grid grid-cols-1 gap-10 my-10 mx-auto max-w-4/5 py-0 px-5 md:grid-cols-2">
      <div className="bg-white p-5 rounded-xl shadow-lg">
        <h1>سبد خرید</h1>
        {cart.length == 0 && <div>سبد خرید خالی است</div>}
        {cart.length > 0 && (
          <div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-right border-b border-b-white font-bold">
                    کالا
                  </th>
                  <th className="p-3 text-right border-b border-b-white font-bold">
                    قیمت (تومان)
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product._id}>
                    <td className="flex items-center gap-2.5">
                      <img
                        src={product.image}
                        width={80}
                        height={80}
                        className="m-3 w-20 h-20 rounded-xl object-cover border md:w-24 md:h-2/4"
                      />
                      {product.title}
                      <input
                        type="number"
                        value={product.quantity}
                        min={1}
                        onChange={() => {
                          updateQuantity(
                            product._id,
                            Number(event.target.value)
                          );
                        }}
                        className="w-12 p-1 text-center text-lg border border-amber-100 rounded"
                      />
                      <button
                        onClick={() => {
                          removeFromCart(product._id);
                        }}
                        className="bg-none border-none cursor-pointer p-1 ml-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6 w-4 h-4 text-orange-600 hover:text-orange-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </td>
                    <td className="p-3 text-right border-b border-b-white">
                      {enTofa(product.price)}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="p-3 text-right border-b border-b-white">
                    مجموع:
                  </td>
                  <td className="p-3 text-right border-b border-b-white">
                    {enTofa(getTotal())}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-right">اطلاعات شما</h2>
          <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
            <input
              value={userInfo.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="p-2.5 border border-white rounded-lg text-sm w-full"
              placeholder="نام"
            />
            <input
              value={userInfo.email}
              name="email"
              onChange={handleChange}
              type="text"
              className="p-2.5 border border-white rounded-lg text-sm w-full"
              placeholder="ایمیل"
            />
            <input
              value={userInfo.country}
              name="country"
              onChange={handleChange}
              type="text"
              className="p-2.5 border border-white rounded-lg text-sm w-full"
              placeholder="شهر"
            />
            <input
              value={userInfo.city}
              name="city"
              onChange={handleChange}
              type="text"
              className="p-2.5 border border-white rounded-lg text-sm w-full"
              placeholder="کشور"
            />
            <input
              value={userInfo.address}
              name="address"
              onChange={handleChange}
              type="text"
              className="p-2.5 border border-white rounded-lg text-sm w-full"
              placeholder="آدرس"
            />
            <input
              value={userInfo.postalCode}
              name="postalCode"
              onChange={handleChange}
              type="text"
              className="p-2.5 border border-white rounded-lg text-sm w-full"
              placeholder="کد پستی"
            />
            <button className="bg-black text-white p-3 border-none rounded-lg text-lg cursor-pointer text-center disabled:text-gray-500 disabled:cursor-not-allowed">
              پرداخت آنلاین
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
