import Link from "next/link";
function LoginPage() {
  return (
    <div>
      <h1>LoginPage</h1>
      <p>
        Belum punya akun?
        <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
}

export default LoginPage;
