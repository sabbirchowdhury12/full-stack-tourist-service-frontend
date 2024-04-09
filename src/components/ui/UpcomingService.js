import { useGetCategoryServiceQuery } from "src/redux/api/serviceApi";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import Heading from "../shared/heading";
import Loading from "../shared/loading";

const UpcomingService = () => {
  const { data } = useGetCategoryServiceQuery("upcoming");
  const services = data?.data;
  if (!services?.length) {
    return <Loading />;
  }
  return (
    <section>
      <Heading
        title=" Our upcomg service"
        sub_title="  Wait for me Enjoyable service"
      />

      <ServiceCard services={services} />
    </section>
  );
};

export default UpcomingService;
