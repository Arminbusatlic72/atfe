import "./../styles/index.module.scss";
import HeroVideo from "../components/HeroVideo";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora&display=swap"
          rel="stylesheet"
          rel="stylesheet"
        />
      </Head>
      <HeroVideo />
    </>
  );
}

export default Home;
