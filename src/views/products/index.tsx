import { ProductsType } from "@/pages/products/products.type";
import style from "./Products.module.scss";

const ProductsView = ({ products }: { products: ProductsType[] }) => {
  console.log(products);
  return (
    <div className={style.products}>
      <h1 className={style.products__title}>Products</h1>
      <div className={style.products__content}>
        {products.length > 0 ? (
          <>
            {products.map((product: ProductsType) => (
              <div className={style.products__content__item} key={product.id}>
                <div className={style.products__content__item__img}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={style.products__content__item__name}>
                  {product.name}
                </h4>
                <p className={style.products__content__item__category}>
                  {product.category}
                </p>
                <p className={style.products__content__item__price}>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            ))}
          </>
        ) : (
          <div className={style.products__content__skeleton}>
            <div className={style.products__content__skeleton__img} />
            <div className={style.products__content__skeleton__name} />
            <div className={style.products__content__skeleton__category} />
            <div className={style.products__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsView;
