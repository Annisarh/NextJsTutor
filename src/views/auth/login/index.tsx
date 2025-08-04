import style from "./Login.module.scss";
import Link from "next/link";
const LoginView = () => {
  return (
    <div className={style.login}>
      <h1 className="big text-amber-500">LoginPage</h1>
      <p>
        Belum punya akun?
        <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginView;
