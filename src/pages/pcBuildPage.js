import RootLayout from "@/components/layout/RootLayout";
import Link from "next/link";
import React from "react";

const PcBuildPage = ({ categories }) => {
  return (
    <div className="flex flex-col  w-4/5 mx-auto border border-blue-600">
      <p className="p-4 bg-blue-gray-600 w-full text-center font-bold text-xl text-white border-b-2">
        Build Your PC
      </p>
      <div>
        {categories.map((category) => {
          console.log(category);
          return (
            <div className="flex justify-between w-full items-center p-4 ">
              <div className="bg-light-green-500 w-5 h-5 rounded-full"></div>
              <p className="font-bold">{category.categoryName}</p>
              <Link href={`category/${category.id}`}>
                <button className="p-2 border border-light-green-500 rounded hover:bg-light-green-500 hover:text-white">
                  Choose
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PcBuildPage;
PcBuildPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const categories = await res.json();

  return { props: { categories } };
};
