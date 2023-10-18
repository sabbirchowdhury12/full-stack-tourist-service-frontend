import { useGetCategoryServiceQuery } from "src/redux/api/serviceApi";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const UpcomingService = () => {
  const { data } = useGetCategoryServiceQuery("upcoming");
  const services = data?.data;
  return (
    <div className="my-40">
      <p className="uppercase font-bold text-3xl text-primary text-center mb-2">
        Our upcomg service
      </p>
      <p className="uppercase font-bold text-sm text-secondary text-center mb-10">
        Wait for me Enjoyable service
      </p>

      <ServiceCard services={services} />

      {/* <Link href={"/services"}>
        <button className="mt-20 text-center block bg-sub_primary hover:bg-secondary rounded mx-auto text-white p-2 font-semibold ">
          EXPLORE ALL SERVICE
        </button>
      </Link> */}
    </div>
  );
};

export default UpcomingService;
