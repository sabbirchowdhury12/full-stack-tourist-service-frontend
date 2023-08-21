import { Inter } from "next/font/google";
import ProductsCard from "@/components/ui/ProductsCard";
import RootLayout from "@/components/layout/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <>
      <ProductsCard products={products} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/featuredProducts");
  const products = await res.json();

  return { props: { products } };
};
