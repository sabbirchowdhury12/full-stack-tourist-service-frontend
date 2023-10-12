import { Carousel, IconButton } from "@material-tailwind/react";

export function Hero() {
  return (
    <Carousel className="rounded-xl mt-5 ">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center">
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          <h2 className="text-2xl font-semibold relative z-10">Image 1</h2>
          <p className="text-lg relative z-10">Description for Image 1</p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center">
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          <h2 className="text-2xl font-semibold relative z-10">Image 2</h2>
          <p className="text-lg relative z-10">Description for Image 2</p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center">
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          <h2 className="text-2xl font-semibold relative z-10">Image 3</h2>
          <p className="text-lg relative z-10">Description for Image 3</p>
        </div>
      </div>
    </Carousel>
  );
}
