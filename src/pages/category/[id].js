import RootLayout from "@/components/layout/RootLayout";
import { CheckIcon } from "@/components/ui/ProductsCard";
import { addProduct } from "@/redux/product/productSlice";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const CategoryPage = ({ category }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCart = async ({ id, categoryName }) => {
    dispatch(addProduct({ id, categoryName }));
    router.push("/pcBuildPage");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  w-full -z-10">
      <Head>
        <title>PC Builder - categoty page</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {category?.data?.map((product, ind) => {
        const { name, price, rating, status, id, image } = product;
        return (
          <Card
            key={ind}
            color="gray"
            variant="gradient"
            className="w-full  p-8 "
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
                  <Typography className="font-normal">{name}</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    {category.categoryName}
                  </Typography>
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
                  <Typography className="font-normal">{rating}</Typography>
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
              <Button
                onClick={() =>
                  handleCart({
                    id: product.id,
                    categoryName: category.categoryName,
                  })
                }
                size="lg"
                color="white"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}
              >
                Add TO BUILD
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://pc-builder-next-js-xi.vercel.app/api/category?id=${params.id}`
  );
  const category = await res.json();

  return { props: { category } };
};
