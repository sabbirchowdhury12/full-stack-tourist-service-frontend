import RootLayout from "@/components/layout/RootLayout";
import { clearCart } from "@/redux/product/productSlice";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const PcBuildPage = ({ categories }) => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const handleClick = () => {
    toast.success("build success");
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col  w-4/5 mx-auto border border-blue-600">
      <Head>
        <title>PC builder-buil page</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-between p-4 bg-blue-gray-600 w-full text-center font-bold text-xl text-white border-b-2">
        <p> Build Your PC</p>
        <p>Items:{products.length}</p>
      </div>

      <div>
        {categories.map((category) => {
          return (
            <div
              key={category._id}
              className="flex justify-between w-full items-center p-4 "
            >
              <div className="bg-light-green-500 w-5 h-5 rounded-full"></div>
              <p className="font-bold">{category.categoryName}</p>
              <Link href={`/category/${category._id}`}>
                <button className="p-2 border border-light-green-500 rounded hover:bg-light-green-500 hover:text-white">
                  Choose
                </button>
              </Link>
            </div>
          );
        })}

        <button
          onClick={handleClick}
          disabled={products.length < 5}
          className={`${
            products.length < 5 ? "cursor-not-allowed" : "cursor-pointer"
          } text-center my-4 block w-40 mx-auto rounded-md text-white font-bold  bg-blue-gray-600 p-2 `}
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default PcBuildPage;
PcBuildPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-next-js-xi.vercel.app/api/category"
  );
  const categories = await res.json();

  return { props: { categories } };
};
