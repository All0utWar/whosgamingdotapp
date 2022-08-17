import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4 bg-[#591F82] space-y-10 h-screen">
      <header className="bg-hero w-full h-40 bg-contain  bg-no-repeat border-b border-[#F9B200]"></header>
    </div>
    </>
  );
};

export default Home;
