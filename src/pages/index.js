import { Inter } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import RootLayout from "src/components/layout/RootLayout";
import Cart from "src/components/ui/Cart";
import CategoryService from "src/components/ui/CategoryService";
import DateSection from "src/components/ui/DateSection";
import ExtraFeature from "src/components/ui/ExtraFeature";
import { Hero } from "src/components/ui/Hero";
import { FAQAccordion } from "src/components/ui/Question";
import ServiceCard from "src/components/ui/ServiceCard";
import ServicesSection from "src/components/ui/ServiceSection";
import Testomonial from "src/components/ui/Testomonial";
import UpcomingService from "src/components/ui/UpcomingService";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>GoTrip - Home page</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <DateSection />
      <ServicesSection />
      <UpcomingService />
      <CategoryService />
      <Testomonial />
      <FAQAccordion />
      {/* <ExtraFeature /> */}
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
