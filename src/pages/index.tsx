import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <head>
        <title>Home</title>
      </head>
      <div className="text-3xl text-amber-400">Hello annisa rahmadani</div>
      <div>this is a new series</div>
    </>
  );
}
