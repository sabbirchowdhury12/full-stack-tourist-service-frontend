import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "src/utiles/localStorage";

const Cart = ({ openCart, setOpenCart }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(
      localStorage.getItem("service-cart")
    );
    if (cartFromLocalStorage) {
      setCart(cartFromLocalStorage);
    }
  }, []);

  const removeFromCart = (id) => {
    const filteredCart = cart.filter((service) => service.id !== id);
    setLocalStorage("service-cart", filteredCart);

    setCart(filteredCart);
  };
  return (
    <div
      className={` absolute no h-screen overflow-hidden w-1/2 top-0 p-10 bg-primary z-50  transition-all duration-1000 ${
        openCart ? "right-0 " : "right-[-1200px] "
      }`}
    >
      <button onClick={() => setOpenCart(false)} className="text-black text-xl">
        x
      </button>
      {cart?.map((service) => {
        return (
          <div className="flex items-center justify-between">
            <Link
              href={`/service/${service?.id}`}
              className="flex items-center gap-3"
              onClick={() => setOpenCart(false)}
            >
              <img
                className="h-20 "
                src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F2.png&w=384&q=75"
                alt=""
              />
              <div>
                {" "}
                <p className="text-white">{service?.service_name}</p>
                <p className="text-white">{service.price}</p>
              </div>
            </Link>

            <button
              onClick={() => removeFromCart(service?.id)}
              className="text-white bg-red-700"
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
