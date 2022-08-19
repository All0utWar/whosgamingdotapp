import type { NextPage } from "next";
import Head from "next/head";
import Story from "../components/Story";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WhosGaming - Less Talk. More Play.</title>
        <meta name="description" content="WhosGaming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4 bg-[#591F82] space-y-10 h-screen flex flex-col items-center">
        <header className="bg-hero w-full h-40 bg-contain  bg-no-repeat border-b border-[#F9B200]"></header>
        <Story />
      </div>
    </>
  );
};

export default Home;
