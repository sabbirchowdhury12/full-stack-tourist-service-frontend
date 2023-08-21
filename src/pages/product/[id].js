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

const ProductDetails = ({ product }) => {
  console.log(product);
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
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <img
          width={500}
          src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4="
        />
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
  const res = await fetch("http://localhost:5000/featuredProducts");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: {
      id: product.id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:5000/featuredProducts/${params.id}`
  );
  const product = await res.json();

  return { props: { product } };
};
