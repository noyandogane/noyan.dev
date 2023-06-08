import { type NextPage } from "next";
import Head from "next/head";
import Hero from "~/components/Hero";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Noyan Doğan Enginar</title>
        <meta name="description" content="personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex  justify-center ">
        <Hero />
      </main>
    </>
  );
};

export default Home;
