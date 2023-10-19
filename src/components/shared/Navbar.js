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

  const conditionalBtn = user ? (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center h-12 w-12 bg-primary rounded-full p-1 first-letter:marker:">
        <svg height="25" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m4 0c-1.1 0-2 1.12-2 2.5s.9 2.5 2 2.5 2-1.12 2-2.5-.9-2.5-2-2.5zm-2.09 5c-1.06.05-1.91.92-1.91 2v1h8v-1c0-1.08-.84-1.95-1.91-2-.54.61-1.28 1-2.09 1s-1.55-.39-2.09-1z"
            fill="#fff"
          />
        </svg>
      </div>
      <span className="uppercase text-white  font-semibold lg:text-secondary">
        {user.name}
      </span>
    </div>
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
  );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 text-lg font-normal">
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-lg font-normal">
        <Link href="/services" className="flex items-center">
          Services
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-lg font-normal">
        <Link href="/blog" className="flex items-center">
          Blog
        </Link>
      </Typography>

      {user && user.email && (
        <Typography as="li" variant="small" className="p-1 text-lg font-normal">
          <Link href="/dashboard" className="flex items-center">
            Dashboard
          </Link>
        </Typography>
      )}
    </ul>
  );

  return (
    <div>
      <Navbar className="mx-auto  py-2 px-4  lg:py-4 bg-white shadow-none">
        <div className="container mx-auto flex items-center justify-between text-black">
          <Typography
            as="a"
            href="#"
            className="flex items-center mr-4 cursor-pointer py-1.5 font-semibold text-xl"
          >
            <svg
              viewBox="0 0 400 300"
              height={50}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m292.93 150a92.93 92.93 0 1 1 -94.52-92.91h1.59s1.05 0 1.58 0a92.93 92.93 0 0 1 91.35 92.91z"
                fill="#fff"
              />
              <path
                d="m200 243.93a94 94 0 0 1 -30.21-5 95.18 95.18 0 0 1 -18.23-8.47 93.94 93.94 0 0 1 46.83-174.37h3.23a93.93 93.93 0 0 1 -1.62 187.84zm0-185.86c-.5 0-1 0-1.51 0a91.9 91.9 0 1 0 3.11 0c-.54 0-1.07 0-1.56 0z"
                fill="#093f68"
              />
              <path
                d="m192.72 117.13h-34.41c-4 0-7.23-2.62-7.23-5.84 0-2.48 1.95-4.68 4.81-5.5a8.49 8.49 0 0 1 7.14-4.33c.77-3.18 4.26-5.56 8.4-5.56a8.94 8.94 0 0 1 7.73 3.93 13.08 13.08 0 0 1 5.73-1.28c5.44 0 10.07 3.22 10.88 7.45a5.89 5.89 0 0 1 4.18 5.29c.05 3.22-3.24 5.84-7.23 5.84zm-28.83-13.7c-2.95 0-5.55 1.47-6.34 3.56a1 1 0 0 1 -.72.63c-2.21.48-3.75 2-3.75 3.67 0 2.11 2.35 3.84 5.23 3.84h34.41c2.88 0 5.23-1.73 5.23-3.84 0-1.56-1.35-3-3.36-3.58a1 1 0 0 1 -.72-.86c-.33-3.53-4.28-6.3-9-6.3a10.89 10.89 0 0 0 -5.66 1.52 1 1 0 0 1 -1.46-.52c-.76-2.15-3.37-3.65-6.34-3.65-3.48 0-6.35 2-6.55 4.6a1 1 0 0 1 -1 .93z"
                fill="#dfeaef"
              />
              <path
                d="m181.26 107.51a1 1 0 0 1 -1-.82 5.56 5.56 0 0 0 -2.25-3.46 5.75 5.75 0 0 0 -4.77-.18 1 1 0 0 1 -.6-1.91c2.54-.79 4.7-.66 6.43.4a7.55 7.55 0 0 1 3.16 4.81 1 1 0 0 1 -.82 1.15z"
                fill="#dfeaef"
              />
              <path
                d="m235.63 208.1q-2.73-5.22-5.14-10.42-1.25-2.7-2.4-5.37a252.17 252.17 0 0 1 -11.11-31q-.79-2.79-1.52-5.53c-.62-2.35-1.19-4.66-1.73-7a273.74 273.74 0 0 1 -7.33-60.78c0-1.52 0-2.93 0-4.21 0-3 .15-5.4.24-6.94.08-1.38.15-2.11.15-2.11h-13.6s.07.73.15 2.11c.08 1.54.19 3.89.24 6.94v4.21a280 280 0 0 1 -7 60.83c-.52 2.29-1.07 4.6-1.67 7-.47 1.83-1 3.67-1.49 5.53a242.31 242.31 0 0 1 -10.9 31c-.77 1.79-1.56 3.58-2.39 5.37q-2.4 5.2-5.14 10.42a206.8 206.8 0 0 1 -13 21.54 93.09 93.09 0 0 0 18 8.38 34.33 34.33 0 0 1 59.77 0 92.26 92.26 0 0 0 18.43-8.62 224.25 224.25 0 0 1 -12.56-21.35zm-38.88-39.94h6.5l9.38 24.15h-25.26z"
                fill="#68e1fd"
                stroke="#093f68"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <rect
                fill="#68e1fd"
                height="6.95"
                rx="2.24"
                width="24.33"
                x="187.83"
                y="76.81"
              />
              <path
                d="m209.92 84.75h-19.85a3.25 3.25 0 0 1 -3.24-3.24v-2.46a3.25 3.25 0 0 1 3.24-3.24h19.85a3.24 3.24 0 0 1 3.24 3.24v2.46a3.24 3.24 0 0 1 -3.24 3.24zm-19.85-6.94a1.24 1.24 0 0 0 -1.24 1.24v2.46a1.24 1.24 0 0 0 1.24 1.24h19.85a1.24 1.24 0 0 0 1.24-1.24v-2.46a1.24 1.24 0 0 0 -1.24-1.24z"
                fill="#093f68"
              />
              <path d="m191 83.75h18v4.21h-18z" fill="#093f68" />
              <path
                d="m209 89h-18a1 1 0 0 1 -1-1v-4.25a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4.25a1 1 0 0 1 -1 1zm-17-2h16v-2.25h-16z"
                fill="#093f68"
              />
              <path d="m192.23 72.6h15.53v4.21h-15.53z" fill="#68e1fd" />
              <path
                d="m207.76 77.81h-15.53a1 1 0 0 1 -1-1v-4.21a1 1 0 0 1 1-1h15.53a1 1 0 0 1 1 1v4.21a1 1 0 0 1 -1 1zm-14.53-2h13.53v-2.21h-13.53z"
                fill="#093f68"
              />
              <path d="m194.31 65.76h11.37v6.84h-11.37z" fill="#68e1fd" />
              <path
                d="m205.68 73.6h-11.37a1 1 0 0 1 -1-1v-6.84a1 1 0 0 1 1-1h11.37a1 1 0 0 1 1 1v6.84a1 1 0 0 1 -1 1zm-10.37-2h9.37v-4.84h-9.37z"
                fill="#093f68"
              />
              <path d="m200 32.81 2.16 32.95h-4.32z" fill="#68e1fd" />
              <path
                d="m202.15 66.76h-4.31a1 1 0 0 1 -.73-.32 1 1 0 0 1 -.27-.75l2.16-32.94a1 1 0 0 1 1-.94 1 1 0 0 1 1 .94l2.15 32.94a1 1 0 0 1 -1 1.07zm-3.24-2h2.18l-1.09-16.65z"
                fill="#093f68"
              />
              <rect
                fill="#68e1fd"
                height="6.95"
                rx="2.2"
                width="39.97"
                x="180.01"
                y="148.79"
              />
              <path
                d="m217.78 156.74h-35.56a3.21 3.21 0 0 1 -3.21-3.2v-2.54a3.21 3.21 0 0 1 3.21-3.21h35.56a3.21 3.21 0 0 1 3.22 3.21v2.54a3.21 3.21 0 0 1 -3.22 3.2zm-35.56-7a1.21 1.21 0 0 0 -1.22 1.26v2.54a1.21 1.21 0 0 0 1.21 1.2h35.56a1.2 1.2 0 0 0 1.2-1.2v-2.54a1.21 1.21 0 0 0 -1.2-1.21z"
                fill="#093f68"
              />
              <rect
                fill="#093f68"
                height="7.65"
                rx="2.1"
                width="76.6"
                x="161.7"
                y="197.68"
              />
              <path
                d="m236.19 206.33h-72.39a3.11 3.11 0 0 1 -3.1-3.11v-3.44a3.1 3.1 0 0 1 3.1-3.1h72.39a3.11 3.11 0 0 1 3.11 3.1v3.44a3.12 3.12 0 0 1 -3.11 3.11zm-72.39-7.65a1.1 1.1 0 0 0 -1.1 1.1v3.44a1.11 1.11 0 0 0 1.1 1.11h72.39a1.11 1.11 0 0 0 1.11-1.11v-3.44a1.11 1.11 0 0 0 -1.11-1.1z"
                fill="#093f68"
              />
              <rect
                fill="#68e1fd"
                height="5.37"
                rx="1.29"
                width="71.2"
                x="164.4"
                y="192.31"
              />
              <path
                d="m234.3 198.68h-68.61a2.3 2.3 0 0 1 -2.29-2.29v-2.78a2.3 2.3 0 0 1 2.29-2.3h68.61a2.3 2.3 0 0 1 2.3 2.3v2.78a2.3 2.3 0 0 1 -2.3 2.29zm-68.61-5.37a.29.29 0 0 0 -.29.3v2.78a.29.29 0 0 0 .29.29h68.61a.29.29 0 0 0 .3-.29v-2.78a.29.29 0 0 0 -.3-.3z"
                fill="#093f68"
              />
              <rect
                fill="#093f68"
                height="5.53"
                rx="1.74"
                width="42.68"
                x="178.66"
                y="155.74"
              />
              <path
                d="m219.6 162.27h-39.2a2.75 2.75 0 0 1 -2.74-2.75v-2a2.74 2.74 0 0 1 2.74-2.74h39.2a2.74 2.74 0 0 1 2.74 2.74v2a2.75 2.75 0 0 1 -2.74 2.75zm-39.2-5.53a.74.74 0 0 0 -.74.74v2a.75.75 0 0 0 .74.75h39.2a.75.75 0 0 0 .74-.75v-2a.74.74 0 0 0 -.74-.74z"
                fill="#093f68"
              />
              <g fill="#dfeaef">
                <path d="m158.64 161.6h-22.42c-2.79 0-5.06-1.86-5.06-4.15a4.15 4.15 0 0 1 2.77-3.7c.65-2.86 3.7-4.95 7.4-4.95a9 9 0 0 1 3.59.74 6.2 6.2 0 0 1 5.18-2.46c2.75 0 5.09 1.54 5.74 3.65a5.82 5.82 0 0 1 4.62 2.85 4.25 4.25 0 0 1 3.24 3.87c0 2.29-2.27 4.15-5.06 4.15zm-17.31-10.8c-2.89 0-5.31 1.67-5.51 3.79a1 1 0 0 1 -.72.87 2.35 2.35 0 0 0 -1.94 2c0 1.17 1.4 2.15 3.06 2.15h22.42c1.66 0 3.06-1 3.06-2.15 0-.93-.89-1.77-2.16-2a1 1 0 0 1 -.72-.62 4 4 0 0 0 -3.8-2.1 1 1 0 0 1 -1-.93c-.11-1.47-1.86-2.67-3.91-2.67a3.92 3.92 0 0 0 -3.81 2.14 1 1 0 0 1 -.61.61 1 1 0 0 1 -.85-.09 6.76 6.76 0 0 0 -3.51-1z" />
                <path d="m148.74 156.21a1 1 0 0 1 -1-.93c-.14-2.26-2.77-3.47-2.8-3.48a1 1 0 0 1 .81-1.83c.16.07 3.77 1.7 4 5.18a1 1 0 0 1 -.93 1.06z" />
                <path d="m269.57 151h-34.41c-4 0-7.23-2.62-7.23-5.84a5.9 5.9 0 0 1 4.18-5.29c.81-4.22 5.44-7.44 10.88-7.44a13.07 13.07 0 0 1 5.73 1.27 9 9 0 0 1 7.73-3.92c4.14 0 7.64 2.38 8.4 5.56a8.49 8.49 0 0 1 7.14 4.32c2.86.82 4.81 3 4.81 5.5 0 3.22-3.25 5.84-7.23 5.84zm-26.57-16.57c-4.7 0-8.65 2.76-9 6.29a1 1 0 0 1 -.72.87c-2 .57-3.36 2-3.36 3.57 0 2.12 2.35 3.84 5.23 3.84h34.41c2.88 0 5.23-1.72 5.23-3.84 0-1.67-1.54-3.19-3.75-3.67a1 1 0 0 1 -.72-.62c-.79-2.1-3.39-3.57-6.31-3.57a1 1 0 0 1 -1-.92c-.2-2.58-3.07-4.6-6.55-4.6-3 0-5.58 1.49-6.34 3.64a1 1 0 0 1 -.61.61 1 1 0 0 1 -.85-.09 10.89 10.89 0 0 0 -5.66-1.51z" />
                <path d="m244.2 140.79a1 1 0 0 1 -.76-1.65c5.86-6.83 12.18-2.17 12.24-2.12a1 1 0 0 1 -1.21 1.6c-.2-.15-4.9-3.56-9.51 1.82a1 1 0 0 1 -.76.35z" />
                <path d="m150.82 216.43h-.1a1 1 0 0 1 -.84-.66 4.73 4.73 0 0 0 -7.92-1.68 1 1 0 0 1 -1 .28 1 1 0 0 1 -.73-.69 7.65 7.65 0 0 0 -8-5.26.64.64 0 0 0 0 .07 1 1 0 0 1 -1.19.75 1.18 1.18 0 0 1 -.95-1.19 1.79 1.79 0 0 1 1.44-1.55 9.79 9.79 0 0 1 10.07 5.25 6.7 6.7 0 0 1 9.39 1.93 5.87 5.87 0 0 1 3.19-1.23 8.83 8.83 0 0 1 4.53 1 1 1 0 1 1 -.89 1.79 6.82 6.82 0 0 0 -3.5-.83 3.41 3.41 0 0 0 -2.7 1.5 1 1 0 0 1 -.8.52z" />
                <path d="m252.83 217.9a1 1 0 0 1 -.82-.44 5.51 5.51 0 0 0 -7.79-.92 1 1 0 1 1 -1.33-1.49 7.15 7.15 0 0 1 5.66-1.67 7.53 7.53 0 0 1 3.91 1.64 6.09 6.09 0 0 1 2.25-2.62 4.44 4.44 0 0 1 4.3-.18 11.1 11.1 0 0 1 11.09-4.71 1 1 0 0 1 .78 1.18 1 1 0 0 1 -1.17.78 9 9 0 0 0 -9.53 4.73 1 1 0 0 1 -.8.55 1 1 0 0 1 -.9-.39 2.16 2.16 0 0 0 -2.72-.26 5.18 5.18 0 0 0 -2 3.06 1 1 0 0 1 -.8.72z" />
                <path d="m200.05 240.48a.65.65 0 0 1 -.19 0 1 1 0 0 1 -.8-.89 2.68 2.68 0 0 0 -1.59-2.17l-.42-.15a4.57 4.57 0 0 1 -1.17-.52 4.46 4.46 0 0 1 -.95-.94l-.24-.29a3.82 3.82 0 0 0 -4.73-.59 1 1 0 0 1 -1.48-.46 12.37 12.37 0 0 0 -2.21-4 3.48 3.48 0 0 0 -3.47-1.13 1 1 0 1 1 -.69-1.88 5.49 5.49 0 0 1 5.6 1.63 11.75 11.75 0 0 1 2.22 3.67 5.83 5.83 0 0 1 6.24 1.47c.11.11.2.23.3.35a3.52 3.52 0 0 0 .53.55 3.17 3.17 0 0 0 .68.28l.55.2a4.57 4.57 0 0 1 2.13 1.83 7.64 7.64 0 0 1 3.87-2 7.48 7.48 0 0 1 5.09.72 7 7 0 0 1 4-2.94 5.91 5.91 0 0 1 .81-3.57 5.65 5.65 0 0 1 3.79-2.79 1 1 0 0 1 .38 2 4 4 0 0 0 -2.84 4.87 1 1 0 0 1 -.85 1.32 4.81 4.81 0 0 0 -3.95 3 1 1 0 0 1 -.69.6 1 1 0 0 1 -.89-.21 5.55 5.55 0 0 0 -8.09 1.65 1 1 0 0 1 -.94.39z" />
              </g>
            </svg>
            <span className="text-secondary"> GoTRIP</span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <button onClick={() => setOpenCart(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                fill="#3554d1"
              />
            </svg>
          </button>
          <div className=" hidden lg:inline-block">{conditionalBtn}</div>

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
            {/* <Button className="mb-2 bg-white text-primary">
              <Link href={"/login"}>
                {" "}
                <span>LOGIN/SIGNUP</span>
              </Link>
            </Button> */}
            <div className="text-white mb-4  inline-block lg:hidden ">
              {conditionalBtn}
            </div>
          </div>
        </Collapse>
      </Navbar>
      {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}
    </div>
  );
}
