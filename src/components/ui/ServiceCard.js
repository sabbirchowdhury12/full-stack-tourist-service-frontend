import React from "react";
import Image from "next/image";
import { rating } from "@material-tailwind/react";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "src/utiles/localStorage";
import toast, { Toaster } from "react-hot-toast";

const ServiceCard = ({ services }) => {
  const addToCart = (data) => {
    let serviceCart = getLocalStorage("service-cart") || [];

    const findExistedProduct = serviceCart.find(
      (service) => service.id == data.id
    );

    if (serviceCart.length > 0 && findExistedProduct) {
      toast.error("already add in Cart");
      return;
    } else {
      serviceCart.push(data);
      toast.success("added to the cart");
      setLocalStorage("service-cart", serviceCart);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20">
      <Toaster />
      {services?.map((service) => {
        const {
          id,
          service_name,
          location,
          price,
          category,
          ratings,
          reviews,
        } = service;

        return (
          <div className="relative group " key={id}>
            <div className="h-96 rounded relative overflow-hidden">
              <img
                className="h-full w-full transition-transform duration-500 transform origin-center group-hover:scale-110"
                src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F2.png&w=384&q=75"
                alt=""
              />
            </div>
            <p className="text-deep_primary my-2">{location}</p>

            <p className="font-medium my-2 text-xl">{service_name} </p>
            <p className="text-deep_primary my-2 text-sm">
              2 guests - 1 bedroom - 1 bed
            </p>
            <p className="my-4 text-sm">
              <span className="bg-sub_primary font-bold text-white p-2 rounded ">
                {/* {ratings?.length ? ratings : "4.8"} */}
                {"4.8"}
              </span>{" "}
              <span className="text-deep_primary">
                {" "}
                <span className="mx-4">{category}</span>{" "}
                {/* {reviews?.length ? reviews : "100 reviews"} */}
                {"100 reviews"}
              </span>
            </p>
            <div className="flex items-center my-2 gap-1">
              <span className="font-semibold text-xl">US{price}</span>{" "}
              <p className="text-deep_primary pt-1 text-sm">/ per night</p>
            </div>
            <Link href={`/service/${id}`}>
              <div className="text-center bg-primary hover:bg-secondary rounded mt-2 w-4/5 mx-auto text-white p-2 font-semibold text-xs">
                MORE ABOUT SERVICE
              </div>
            </Link>
            <div
              onClick={() => addToCart(service)}
              className="absolute top-5 right-5  h-10 w-10 flex items-center justify-center rounded-full bg-sub_primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
