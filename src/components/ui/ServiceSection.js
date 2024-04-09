import { useGetCategoryServiceQuery } from "src/redux/api/serviceApi";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import Heading from "../shared/heading";
import Loading from "../shared/loading";

const ServicesSection = () => {
  const { data } = useGetCategoryServiceQuery("available");
  const services = data?.data?.slice(0, 6);
  if (!services?.length) {
    return <Loading />;
  }
  return (
    <section>
      <Heading
        title="Our available services"
        sub_title="CHOOSE AND ENJOY YOUR SERVICE"
      />

      <ServiceCard services={services} />

      <Link href={"/services"}>
        <button className="mt-20 text-center block bg-sub_primary hover:bg-secondary rounded mx-auto text-white p-2 font-semibold ">
          EXPLORE ALL SERVICE
        </button>
      </Link>
    </section>
  );
};

export default ServicesSection;
