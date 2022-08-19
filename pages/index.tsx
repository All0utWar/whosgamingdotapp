import type { NextPage } from "next";
import Head from "next/head";
import StoryMobile from "../components/StoryMobile";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>WhosGaming - Less Talk. More Play.</title>
        <meta name="description" content="WhosGaming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#591F82] px-3">
        <header className="bg-hero w-full h-32 bg-contain  bg-no-repeat px-3 shadow-lg"></header>
      </div>
      <div className="bg-black/50">
        <section className="space-y-10 flex flex-col justify-center items-center h-full bg-black/50 py-10 px-5">
          <h1 
              className="text-3xl text-center font-bold text-white max-w-md">
              <span className="underline underline-offset-4 text-[#F9B200]">Revolutionize</span> the way <span className="text-[#F9B200]">YOU</span> connect with your friends for game night<span className="text-[#F9B200]"> .</span>
            </h1>
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <div className="max-w-sm  space-y-4 order-3 sm:order-4">            
              <h2 className="text-2xl text-center font-bold rounded-lg bg-black/60 px-6 py-4 text-white">What is WhosGaming?</h2>
              <p className="rounded-lg bg-black/60 px-6 py-4 text-white indet-5">
                WhosGaming is an open source application designed to replace that group chat we know that everyone of you have that consists of that nightly banter of
                &quot;Anyone getting on tonight&quot;. With WhosGaming the teamleader of your group will setup and account with us. Then input
                all your fellow gamers phone numbers and set the time you want your daily text to be sent out asking who is playing as well as
                setting the time to send out the second text confirming how many gamers will be on with the average online time.
              </p>
            </div>
            <StoryMobile />

          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
