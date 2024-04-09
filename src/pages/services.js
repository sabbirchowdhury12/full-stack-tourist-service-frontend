import React, { useEffect, useState } from "react";
import RootLayout from "src/components/layout/RootLayout";
import ServiceCard from "src/components/ui/ServiceCard";
import { useGetServiceQuery } from "src/redux/api/serviceApi";
import { Input, IconButton, Button } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import Loading from "src/components/shared/loading";
const ServicesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [sortBy, setSortBy] = useState("createdAt");
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(10);

  const [totalPage, setTotalPage] = useState("");

  const { register, handleSubmit } = useForm();
  const { data, isLoading } = useGetServiceQuery({
    search: searchValue,
    minPrice,
    maxPrice,
    sortBy,
    page,
    limit,
  });

  useEffect(() => {
    setTotalPage(data?.meta?.totalPage);
  }, [data]);

  const handleFilter = async (data) => {
    setMinPrice(data.minPrice);
    setMaxPrice(data.maxPrice);
  };

  const getItemProps = (index) => ({
    variant: page === index ? "filled" : "text",
    color: "gray",
    onClick: () => setPage(index),
  });

  const next = () => {
    if (page === totalPage) return;

    setPage(page + 1);
  };

  const prev = () => {
    if (page === 1) return;

    setPage(page - 1);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          color="blue"
          type="text"
          label="search by name, location and category"
          onChange={(e) => setSearchValue(e.target.value)}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />

        {/* <Input
          onChange={onChange}
          color="blue"
          label="search by name, location and category"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        /> */}
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2">
        <form className="mt-8 mb-2  " onSubmit={handleSubmit(handleFilter)}>
          <p className="text-deep_primary font-semibold pl-2 mb-2">
            Filter by Price:
          </p>
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
              className=" bg-sub_primary hover:bg-secondary"
              fullWidth
              type="submit"
            >
              GO
            </Button>
          </div>
        </form>

        <div className="">
          <p className="text-deep_primary font-semibold  mb-1">Sort by: </p>
          <select
            className="border-2 border-secondary p-2"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="createAt">CreatedAt</option>
            <option value="service_name">Name</option>
            <option value="price">Price</option>
            <option value="id">id</option>
          </select>
        </div>
      </div>

      <ServiceCard services={data?.data} />

      <div className="flex items-center flex-wrap gap-4 justify-center my-20">
        <Button
          variant="text"
          className="flex items-center gap-2 text-primary"
          onClick={prev}
          disabled={page === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2 flex-wrap ">
          {Array.from({ length: totalPage }).map((_, index) => (
            <IconButton key={index} {...getItemProps(index + 1)}>
              {index + 1}
            </IconButton>
          ))}
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2 text-primary"
          onClick={next}
          disabled={page === totalPage}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>

        <select
          onChange={(e) => setlimit(e.target.value)}
          className="border border-primary p-1"
          name="select"
          value={limit}
          id="select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="4">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option selected value="10">
            10
          </option>
        </select>
      </div>
    </>
  );
};

export default ServicesPage;

ServicesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
