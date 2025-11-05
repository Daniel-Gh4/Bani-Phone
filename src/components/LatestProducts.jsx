import ProductList from "./ProductList";

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

function LatestProducts() {
  return (
    <div className="max-w-4/5 my-0 mx-auto py-0 px-5">
      <h2 className="text-4xl my-8 mx-5 align-middle font-normal">
        محصولات پرفروش
      </h2>
      <ProductList products={products} />
    </div>
  );
}

export default LatestProducts;
