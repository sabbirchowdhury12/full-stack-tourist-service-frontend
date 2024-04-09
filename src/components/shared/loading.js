import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return (
    <div className="h-screen text-sub_primary flex flex-col justify-center items-center font-bold">
      <Spinner className="h-16 w-16 " />
      <p>Loading......</p>
    </div>
  );
};

export default Loading;
