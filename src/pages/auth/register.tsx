import Link from "next/link";
import { useRouter } from "next/router";
function RegisterPage() {
  const { push, query } = useRouter();
  const handlerBtn = () => {
    push("/products");
  };
  return (
    <div>
      <h1>RegisterPages</h1>
      <button onClick={() => handlerBtn()}>halaman products</button>
      <p>
        sudah punya akun <Link href={"/auth/login"}>login disini</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
