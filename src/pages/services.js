import React from "react";
import RootLayout from "src/components/layout/RootLayout";
import ServiceCard from "src/components/ui/ServiceCard";
import { useGetServiceQuery } from "src/redux/api/serviceApi";
import { Input, IconButton, Button } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
const ServicesPage = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [minPrice, setMinPrice] = React.useState(1);
  const [maxPrice, setMaxPrice] = React.useState(10000000);
  const [sortBy, setSortBy] = React.useState("createdAt");
  const [page, setPage] = React.useState(1);
  const [limit, setlimit] = React.useState(3);

  const { register, handleSubmit } = useForm();
  const { data } = useGetServiceQuery({
    searchValue,
    minPrice,
    maxPrice,
    sortBy,
    page,
    limit,
  });
  const onChange = ({ target }) => setSearchValue(target.value);
  const handleFilter = async (data) => {
    setMinPrice(data.minPrice);
    setMaxPrice(data.maxPrice);
  };

  //////pagination

  const getItemProps = (index) => ({
    variant: page === index ? "filled" : "text",
    color: "gray",
    onClick: () => setPage(index),
  });

  const next = () => {
    if (page === 5) return;

    setPage(page + 1);
  };

  const prev = () => {
    if (page === 1) return;

    setPage(page - 1);
  };

  console.log(page);
  return (
    <div>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          label="search by name, location and category"
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
      </div>
      <form className="mt-8 mb-2  " onSubmit={handleSubmit(handleFilter)}>
        <div className="mb-4 flex  items-center gap-2 w-20">
          <Input
            type="number"
            labelProps={{
              className: "hidden",
            }}
            className="!border !border-gray-300 bg-white text-gray-900 shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 "
            placeholder="100"
            {...register("minPrice", { required: true })}
          />
          <span>to</span>
          <Input
            type="number"
            labelProps={{
              className: "hidden",
            }}
            className="!border !border-gray-300 bg-white text-gray-900 shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 "
            placeholder="100"
            {...register("maxPrice", { required: true })}
          />

          <Button
            className=" bg-primary hover:bg-secondary"
            fullWidth
            type="submit"
          >
            GO
          </Button>
        </div>
      </form>

      <div className="flex">
        <p>Sort by: </p>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="createAt">CreatedAt</option>
          <option value="service_name">Name</option>
          <option value="price">Price</option>
          <option value="id">id</option>
        </select>
      </div>

      <ServiceCard services={data?.data} />

      <div className="flex items-center gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton {...getItemProps(5)}>5</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 5}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ServicesPage;

ServicesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
