import ProductsView from "@/views/products";
import { ProductsType } from "./products.type";

const ProductPage = (props: { products: ProductsType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductsView products={products} />
    </div>
  );
};
export default ProductPage;

// dipanggil setiap melakukan request
export async function getServerSideProps() {
  //fetch data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  console.log(response);

  return {
    props: {
      products: response.data,
    },
  };
}
