import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import useUserFromLocalStorage from "src/customHooks/useUserFromLocalStorage";
import Cart from "../ui/Cart";

export function TopNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);

  const user = useUserFromLocalStorage();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 text-lg font-normal">
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-lg font-normal">
        <a href="#" className="flex items-center">
          Service
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-lg font-normal">
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-lg font-normal">
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="mx-auto  py-2 px-4  lg:py-4 bg-white shadow-none">
        <div className="container mx-auto flex items-center justify-between text-black">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-semibold text-xl"
          >
            GO_ON_FIRE
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <button onClick={() => setOpenCart(true)}>Add to cart</button>
          {user ? (
            <Button
              size="lg"
              className="bg-white text-primary shadow-none font-normal border border-primary hover:shadow-none hover:bg-primary hover:text-white transition-all duration-300 ease-in-out hidden lg:inline-block"
            >
              <Link href={"/login"}>
                {" "}
                <span>{user.name}</span>
              </Link>
            </Button>
          ) : (
            <Button
              size="lg"
              className="bg-white text-primary shadow-none font-normal border border-primary hover:shadow-none hover:bg-primary hover:text-white transition-all duration-300 ease-in-out hidden lg:inline-block"
            >
              <Link href={"/login"}>
                {" "}
                <span>LOGIN/SIGNUP</span>
              </Link>
            </Button>
          )}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav} className="  bg-secondary pl-10">
          <div className=" mx-auto">
            {navList}
            <Button className="mb-2 bg-white text-primary">
              <Link href={"/login"}>
                {" "}
                <span>LOGIN/SIGNUP</span>
              </Link>
            </Button>
          </div>
        </Collapse>
      </Navbar>
      {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}
    </div>
  );
}
