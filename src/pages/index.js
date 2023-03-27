import "./../styles/index.module.scss";
import HeroVideo from "../components/HeroVideo";
import Head from "next/head";
import SliderSection from "../components/SliderSection";
import RecruiterSection from "../components/RecruitersSection";
import ReferSection from "../components/ReferSection";

function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <HeroVideo />
      <SliderSection />
      <RecruiterSection />
      <ReferSection />
    </>
  );
}

export default Home;
