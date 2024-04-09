import React from "react";

import { reviews } from "src/utiles/data";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../shared/heading";

const Testomonial = () => {
  var settings = {
    dots: true,
    className: `center`,
    infinite: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <Heading title="Testomial" sub_title="Our CLient REview" />
      <div className="">
        <Slider {...settings}>
          {reviews.map((review, ind) => {
            return (
              <section key={ind} className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4  mx-auto text-center lg:px-6">
                  <figure className="max-w-screen-md mx-auto">
                    <svg
                      className="h-8 mx-auto mb-3 text-secondary"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p className="text-sm  text-gray-900 dark:text-white tracking-wider">
                        {review.text}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          Micheal Gough
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          CEO at Google
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testomonial;
