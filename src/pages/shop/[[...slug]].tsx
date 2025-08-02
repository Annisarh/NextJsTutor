import { useRouter } from "next/router";

const DetailShop = () => {
  const { query } = useRouter();
  //   console.log(query);
  return (
    <div>
      <h4>Detail shop</h4>
      <p>
        nama product: {query.slug ? query.slug[0] : ""} || {""}
        {query.slug ? query.slug[1] : ""}
      </p>
    </div>
  );
};

export default DetailShop;
