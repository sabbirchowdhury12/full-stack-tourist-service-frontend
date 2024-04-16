import { Carousel, IconButton } from "@material-tailwind/react";

const sliderData = [
  {
    title: "Discover amazing places at exclusive deals",
    desc: "Find Next Place To Visit",
    img: "https://gotrip-appdir.vercel.app/img/masthead/4/bg.png",
  },
  {
    title: "Discover amazing places at exclusive deals",
    desc: "Unique Houses Are Waiting  for you.",
    img: "https://gotrip-appdir.vercel.app/img/masthead/7/bg.png",
  },
  {
    title: "Discover amazing places at exclusive deals",
    desc: "Discover Your World",
    img: "	https://gotrip-appdir.vercel.app/img/masthead/9/bg.png",
  },
];

export function Hero() {
  return (
    <Carousel transition={{ duration: 1 }} className="rounded-xl mt-0 ">
      {sliderData.map((slider) => {
        return (
          <div className="relative h-screen" key={slider?.img}>
            <img
              src={slider.img}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center">
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
              <h2 className=" relative z-10 text-sm">{slider.title}</h2>
              <p className="text-2xl md:text-4xl lg:text-6xl font-bold mt-4 relative z-10">
                {slider.desc}
              </p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
