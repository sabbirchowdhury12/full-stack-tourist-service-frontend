import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { MultiLevelSidebar } from "src/components/layout/DashBoardLayout";
import RootLayout from "src/components/layout/RootLayout";
import { useCreateServiceMutation } from "src/redux/api/serviceApi";

const CreateService = () => {
  const [statusValue, setStatusValue] = useState("upcoming");
  const [categoryValue, setCategoryValue] = useState("tour");
  const [createService] = useCreateServiceMutation();
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const { service_name, location, price, image, status } = data;
    const serviceData = {
      service_name,
      category: categoryValue,
      location,
      price: parseInt(price),
      image,
      status: statusValue,
    };

    console.log(serviceData);

    const result = await createService({ ...serviceData }).unwrap();
    console.log(result);
    if (result.success == true) {
      toast.success(result.message);
      router.push("/dashboard/serviceList");
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <Card
      color="transparent"
      className="flex justify-center items-center bg-[#E5F0FD] shadow h-screen"
      shadow={false}
    >
      <Toaster />
      <div className="bg-white p-5 lg:p-10 rounded-md">
        <Typography variant="h4" color="blue-gray" className="text-center">
          SIGN UP
        </Typography>
        <Typography color="gray" className="mt-1 font-normal"></Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Service Name"
              {...register("service_name", { required: true })}
            />
            <Select
              onChange={(selectedValue) => setCategoryValue(selectedValue)} // Update this line
              color="blue"
              label="Select Categoty"
              value="tour"
            >
              <Option value="tour">Tour</Option>
              <Option value="car">Car</Option>
              <Option value="hotel">Hotel</Option>
            </Select>
            <Input
              size="lg"
              label="Location"
              {...register("location", { required: true })}
            />
            <Input
              type="number"
              size="lg"
              label="Price"
              {...register("price", { required: true })}
            />
            <Input
              type="text"
              size="lg"
              label="Image URL"
              {...register("image", { required: true })}
            />
            <Select
              onChange={(selectedValue) => setStatusValue(selectedValue)} // Update this line
              color="blue"
              label="Select Version"
              value="upcoming"
            >
              <Option value="upcoming">Upcoming</Option>
              <Option value="available">Available</Option>
            </Select>
          </div>

          <Button
            className="mt-6 bg-primary hover:bg-secondary"
            fullWidth
            type="submit"
          >
            Create Service
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default CreateService;
CreateService.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MultiLevelSidebar>{page}</MultiLevelSidebar>
    </RootLayout>
  );
};
