import {
  useGetAvailableServiceQuery,
  useGetCategoryServiceQuery,
} from "src/redux/api/serviceApi";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const { data } = useGetCategoryServiceQuery("available");

  return (
    <div>
      <p className="text-center my-10">Enjoy</p>

      <ServiceCard services={data?.data} />
    </div>
  );
};

export default ServicesSection;
