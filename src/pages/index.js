import { Inter } from "next/font/google";
import ProductsCard from "@/components/ui/ProductsCard";
import RootLayout from "@/components/layout/RootLayout";
import Categories from "@/components/ui/Categories";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, categories }) {
  return (
    <>
      <ProductsCard products={products} />
      <Categories categories={categories} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/featuredProducts");
  const products = await res.json();
  const response = await fetch("http://localhost:5000/categories");
  const categories = await response.json();

  return { props: { products, categories }, revalidate: 30 };
};
