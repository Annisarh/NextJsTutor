import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <>
      <div>detail product</div>
      <p>product name: {query.id} </p>
    </>
  );
};

export default DetailProductPage;
