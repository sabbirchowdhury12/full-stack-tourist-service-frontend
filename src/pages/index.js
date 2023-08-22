import { Inter } from "next/font/google";
import ProductsCard from "@/components/ui/ProductsCard";
import RootLayout from "@/components/layout/RootLayout";
import Categories from "@/components/ui/Categories";
import Head from "next/head";

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
      <ProductsCard products={products} />
      <Categories categories={categories} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // if (typeof window === "undefined") {
  //   return { props: { products: [], categories: [] } };
  // }
  const res = await fetch(
    "https://pc-builder-next-js-xi.vercel.app/api/product"
  );
  const products = await res.json();
  const response = await fetch(
    "https://pc-builder-next-js-xi.vercel.app/api/category"
  );
  const categories = await response.json();

  return { props: { products, categories }, revalidate: 30 };
};
