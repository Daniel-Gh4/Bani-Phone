import ProductList from "./ProductList";

async function LatestProducts({ searchParams }) {
  const category = searchParams.category;

  const url = category
    ? `${process.env.API_URL}/api/products?category=${category}`
    : `${process.env.API_URL}/api/products`;

  const res = await fetch(url);
  const products = await res.json();

  return (
    <div className="max-w-4/5 my-0 mx-auto py-0 px-5">
      <h2 className="text-4xl my-8 mx-5 align-middle font-normal">
        {category ? `محصولات ${category}` : "محصولات پرفروش"}
      </h2>
      <ProductList products={products} />
    </div>
  );
}

export default LatestProducts;
