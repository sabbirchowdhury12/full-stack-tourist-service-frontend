import { Navbar, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { TopNavbar } from "../shared/Navbar";
import Link from "next/link";

const RootLayout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div>
      <TopNavbar />
      <div className="h-full container mx-auto">{children}</div>
      <footer className="container mx-auto flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t mt-5 py-10 border-blue-gray-50 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2023 || Sabbir Chowdhury
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default RootLayout;
