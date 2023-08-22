import RootLayout from "@/components/layout/RootLayout";
import { CheckIcon } from "@/components/ui/ProductsCard";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Head from "next/head";

const ProductDetails = ({ product }) => {
  const {
    category,
    productName,
    price,
    averageRating,
    individualRating,
    status,
    description,
    keyFeatures,
    reviews,
    image,
  } = product;
  return (
    <Card color="gray" variant="gradient" className="w-full  p-8 ">
      <Head>
        <title>PC Builder - ProductDeatils page</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <Typography className="font-normal">{description}</Typography>
          </li>
          <li className="flex items-start gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              KeyFeatures: <br /> brand:{keyFeatures.brand} <br />
              model: {keyFeatures.model}
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">${price}</Typography>
          </li>
          <li className="flex items-start gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Rating: <br /> Average Rating: {averageRating} <br />
              Individual Rating: {individualRating}
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">{status}</Typography>
          </li>
          <li className="flex items-start gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Reviews:{" "}
              {reviews.map((review, i) => (
                <li key={i}>
                  {i + 1}. {review}
                </li>
              ))}
            </Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  // if (typeof window === "undefined") {
  //   const products = [];
  //   const paths = products.map((product) => ({
  //     params: {
  //       id: product?._id,
  //     },
  //   }));

  //   return { paths, fallback: false };
  // }
  const res = await fetch(
    "https://pc-builder-next-js-xi.vercel.app/api/product"
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: {
      id: product._id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  // if (typeof window === "undefined") {
  //   return { props: { product: [] } };
  // }
  const res = await fetch(
    `https://pc-builder-next-js-xi.vercel.app/api/product?id=${params.id}`
  );
  const product = await res.json();

  return { props: { product } };
};
