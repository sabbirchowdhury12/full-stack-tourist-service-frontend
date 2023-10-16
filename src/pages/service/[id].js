import { Progress } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React from "react";
import Datepicker from "react-tailwindcss-datepicker";
import RootLayout from "src/components/layout/RootLayout";
import BookingService from "src/components/ui/BookingService";
import DateSection from "src/components/ui/DateSection";
import ReviewAndRating from "src/components/ui/ReviewAndRating";
import ReviewSection from "src/components/ui/ReviewSection";
import { useGetSingleServiceQuery } from "src/redux/api/serviceApi";

const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetSingleServiceQuery(id);
  const service = data?.data;
  console.log(service);
  return (
    <div>
      <h2 className="text-xl font-bold text-secondary my-5">
        {service?.service_name}
      </h2>
      <p className="flex gap-2 items-center mb-8">
        <svg
          height={20}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#3554d1"
            d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z"
            class="ci-primary"
          />
          <path
            fill="#3554d1"
            d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z"
            class="ci-primary"
          />
        </svg>
        <span className="text-sm pt-1 text-deep_primary">
          {service?.location}
        </span>
      </p>

      <span className="text-sm px-4 py-3 bg-primary rounded text-white ">
        Share
      </span>
      <span className="text-sm px-4 py-3 bg-primary rounded text-white ml-5">
        Add To Cart
      </span>

      <div className="image my-20 grid grid-cols-1 lg:grid-cols-2  gap-2 ">
        <img
          className="w-full h-[456px]"
          src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Frentals%2Fsingle%2F2.png&w=640&q=75"
          alt=""
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="div grid grid-cols-1 gap-2">
            <img
              className="h-56 w-full"
              src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Frentals%2Fsingle%2F2.png&w=640&q=75"
              alt=""
            />
            <img
              className="h-56 w-full"
              src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Frentals%2Fsingle%2F2.png&w=640&q=75"
              alt=""
            />{" "}
          </div>
          <div className="div grid grid-cols-1 gap-2">
            <img
              className="h-56 w-full"
              src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Frentals%2Fsingle%2F2.png&w=640&q=75"
              alt=""
            />
            <img
              className="h-56 w-full"
              src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Frentals%2Fsingle%2F2.png&w=640&q=75"
              alt=""
            />{" "}
          </div>
        </div>
      </div>

      <div className="details grid lg:grid-cols-5 gap-4">
        <div className="overview col-span-4 ">
          <div className="property">
            <p className="text-lg  pb-5">Property hinglights</p>
            <div className="flex justify-between w-full grid-col-4 border-b pb-10">
              <span>Bedrooms</span>
              <span>Bedrooms</span>
              <span>Bedrooms</span>
              <span>Bedrooms</span>
            </div>
          </div>

          <div>
            <p className="my-10">OverView</p>
            <p className="text-sm italic leading-7 border-b pb-10">
              You can directly book the best price if your travel dates are
              available, all discounts are already included. In the following
              house description you will find all information about our listing.{" "}
              <br /> <br />
              2-room terraced house on 2 levels. Comfortable and cosy
              furnishings: 1 room with 1 french bed and radio. Shower, sep. WC.
              Upper floor: (steep stair) living/dining room with 1 sofabed (110
              cm, length 180 cm), TV. Exit to the balcony. Small kitchen 2 hot
              plates, oven,
            </p>
          </div>

          <div className="my-10">
            <p className="my-10 text-lg">amentites</p>
            <span className="grid grid-cols-2">
              <div className="left">
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
              </div>
              <div className="left">
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
                <p className="my-2">Noon-smoking rooms</p>
              </div>
            </span>
          </div>
        </div>

        <div className="date col-span-1">
          <div className="border border-primary h-52 ">
            date
            <BookingService id={service?.id} />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-6">
        <div className="guest-review md:col-span-2">
          <p>4.5 </p>

          <span>
            <p>Execptional</p>
            <p>2004 reviews</p>
          </span>

          <p>location</p>
          <p>9.4</p>
          <Progress value={25} size="sm" label="Small" color="blue" />
        </div>
        <div className="md:col-span-4">
          <ReviewSection service={service} />
        </div>
      </div>
      <ReviewAndRating id={service?.id} />
    </div>
  );
};

export default ServiceDetails;

ServiceDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
