import ProductBox from "./ProductBox";

function ProductList({ products }) {
  return (
    <div className="pb-8 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
      {products.length > 0 &&
        products.map((product) => (
          <ProductBox product={product} key={product.id} />
        ))}
    </div>
  );
}

export default ProductList;
