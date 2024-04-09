import { useGetCategoryServiceQuery } from "src/redux/api/serviceApi";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { useState } from "react";
import Heading from "../shared/heading";
import Loading from "../shared/loading";

const categories = [
  { name: "hotel", value: "hotel" },
  { name: "tour", value: "tour" },
  { name: "car", value: "car" },
];

const CategoryService = () => {
  const [activeCategory, setActiveCategory] = useState("hotel");
  const [active, setActive] = useState(0);
  const { data, isLoading } = useGetCategoryServiceQuery(activeCategory);
  const services = data?.data;
  if (!services?.length) {
    return <Loading />;
  }

  const handleCategory = (categoryValue, index) => {
    setActiveCategory(categoryValue);
    setActive(index);
  };

  return (
    <section>
      <Heading title=" Choose Service By Category" sub_title="" />

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
    </section>
  );
};

export default CategoryService;
