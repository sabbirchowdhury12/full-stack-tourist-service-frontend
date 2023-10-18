import { useGetCategoryServiceQuery } from "src/redux/api/serviceApi";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "hotel", value: "hotel" },
  { name: "tour", value: "tour" },
  { name: "car", value: "car" },
];

const CategoryService = () => {
  const [activeCategory, setActiveCategory] = useState("hotel");
  const [active, setActive] = useState(0);
  const { data } = useGetCategoryServiceQuery(activeCategory);
  const services = data?.data;

  const handleCategory = (categoryValue, index) => {
    setActiveCategory(categoryValue);
    setActive(index);
  };

  return (
    <div className="my-40">
      <p className="uppercase font-bold text-3xl text-primary text-center mb-2">
        Choose Service By Category
      </p>

      <div className="flex items-center justify-around my-8">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => handleCategory(category.value, index)}
              className={` text-white rounded p-2 font-semibold ${
                index == active ? "bg-sub_primary" : "bg-primary"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <ServiceCard services={services} />
    </div>
  );
};

export default CategoryService;
