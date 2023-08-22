import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import Link from "next/link";

export function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const ProductsCard = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  w-full -z-10">
      {products.map((product, ind) => {
        const {
          category,
          productName,
          price,
          averageRating,
          status,
          _id,
          image,
        } = product;
        return (
          <Card
            key={ind}
            color="gray"
            variant="gradient"
            className="w-full  p-8 -z-0"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <img src={image} />
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">{productName}</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">{category}</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">{price}</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    {averageRating}
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">{status}</Typography>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Link href={`/product/${_id}`}>
                <Button
                  size="lg"
                  color="white"
                  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 "
                  ripple={false}
                  fullWidth={true}
                >
                  Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductsCard;
