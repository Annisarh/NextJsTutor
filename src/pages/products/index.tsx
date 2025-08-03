import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const products = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  return <h3>products space</h3>;
};
export default products;
