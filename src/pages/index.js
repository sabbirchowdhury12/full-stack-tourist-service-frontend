import { Inter } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import RootLayout from "src/components/layout/RootLayout";
import Cart from "src/components/ui/Cart";
import DateSection from "src/components/ui/DateSection";
import { Hero } from "src/components/ui/Hero";
import ServiceCard from "src/components/ui/ServiceCard";
import ServicesSection from "src/components/ui/ServiceSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <Toaster />;
      <Hero />
      <DateSection />
      <ServicesSection />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
