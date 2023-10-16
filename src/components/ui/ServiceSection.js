import { useGetAvailableServiceQuery } from "src/redux/api/serviceApi";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const { data } = useGetAvailableServiceQuery();

  return (
    <div>
      <p className="text-center my-10">Enjoy</p>

      <ServiceCard services={data?.data} />
    </div>
  );
};

export default ServicesSection;
