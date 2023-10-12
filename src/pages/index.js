import { Inter } from "next/font/google";
import Head from "next/head";
import RootLayout from "src/components/layout/RootLayout";
import DateSection from "src/components/ui/DateSection";
import { Hero } from "src/components/ui/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, categories }) {
  return (
    <>
      <Head>
        <title>PC Builder - Home page</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <DateSection />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
