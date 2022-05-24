import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h3>Carrot Market</h3>
      <Link href="/enter">
        <a>Login</a>
      </Link>
    </div>
  );
};

export default Home;
