import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@material-tailwind/react";
import Link from "next/link";
import { Avatar } from "@material-tailwind/react";
import Cart from "../ui/Cart";
import { useRouter } from "next/navigation";
import { crossMenu, logo, menuBar, shoppingCart } from "src/utiles/data";

export function TopNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [user, setUser] = useState(null);
  const [cartItem, setCartItem] = useState("0");

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const serviceCart = JSON.parse(localStorage.getItem("service-cart"));
    setCartItem(serviceCart?.length);
    setUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  };

  const conditionalBtn = user?.id ? (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleLogout}
        className="bg-white text-primary shadow-none font-normal border border-primary hover:shadow-none hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
      >
        <span>Log out</span>
      </Button>
      {user?.image ? (
        <Avatar src={user?.image} alt={name} size="sm" />
      ) : (
        <div className="flex items-center justify-center h-12 w-12 bg-primary rounded-full p-1 first-letter:marker:">
          <svg height="25" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m4 0c-1.1 0-2 1.12-2 2.5s.9 2.5 2 2.5 2-1.12 2-2.5-.9-2.5-2-2.5zm-2.09 5c-1.06.05-1.91.92-1.91 2v1h8v-1c0-1.08-.84-1.95-1.91-2-.54.61-1.28 1-2.09 1s-1.55-.39-2.09-1z"
              fill="#fff"
            />
          </svg>
        </div>
      )}

      {}
      <span className="uppercase text-white  font-semibold lg:text-secondary">
        {user.name}
      </span>
    </div>
  ) : (
    <Link href={"/login"}>
      <Button
        size="lg"
        className="bg-white text-primary shadow-none font-normal border border-primary hover:shadow-none hover:bg-primary hover:text-white transition-all duration-300 ease-in-out hidden lg:inline-block"
      >
        {" "}
        <span>LOGIN/SIGNUP</span>
      </Button>
    </Link>
  );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 text-lg font-normal hover:text-sub_primary"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 text-lg font-normal hover:text-sub_primary"
      >
        <Link href="/services" className="flex items-center">
          Services
        </Link>
      </Typography>

      {user && user?.id && (
        <Typography
          as="li"
          variant="small"
          className="p-1 text-lg font-normal hover:text-sub_primary"
        >
          <Link href="/dashboard" className="flex items-center">
            Dashboard
          </Link>
        </Typography>
      )}
    </ul>
  );

  return (
    <>
      <Navbar className="container mx-auto bg-white shadow-none ">
        <div className=" flex items-center justify-between text-black">
          {/* <Link href={"/"}> */}{" "}
          <Link
            href={"/"}
            as="a"
            className="flex items-center mr-4 cursor-pointer py-1.5 font-semibold text-xl"
          >
            {logo}
            <span className="text-secondary"> GoTRIP</span>
          </Link>{" "}
          {/* </Link> */}
          <div className="hidden lg:block">{navList}</div>
          <div onClick={() => setOpenCart(true)}>
            <Badge content={cartItem}>
              <IconButton className="bg-transparent shadow-none">
                {shoppingCart}
              </IconButton>
            </Badge>
          </div>
          <div className=" hidden lg:inline-block">{conditionalBtn}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? crossMenu : menuBar}
          </IconButton>
        </div>
        <Collapse open={openNav} className="  bg-secondary pl-10">
          <div className=" mx-auto">
            {navList}

            <div className="text-white mb-4  inline-block lg:hidden ">
              {conditionalBtn}
            </div>
          </div>
        </Collapse>
      </Navbar>
      {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}
    </>
  );
}
