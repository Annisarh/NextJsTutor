import { fetcher } from "@/utils/swr/fetcher";
import ProductsView from "@/views/products";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const products = () => {
  const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res.data));
  // }, []);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  // console.log(data);
  // console.log(error);
  // console.log(isLoading);
  return (
    <div>
      <ProductsView products={isLoading ? [] : data.data} />
    </div>
  );
};
export default products;
