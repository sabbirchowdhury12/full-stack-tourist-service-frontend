import Link from "next/link";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row  justify-between items-center mt-20 gap-2 flex-wrap">
        {categories?.map((category) => {
          return (
            <Link
              key={category.id}
              href={`category/${category.id}`}
              className="bg-light-green-800 p-2 rounded text-white font-bold"
            >
              {category.categoryName}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
