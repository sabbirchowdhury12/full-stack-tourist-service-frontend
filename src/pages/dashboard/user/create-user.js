import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useRouter } from "next/router";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { MultiLevelSidebar } from "src/components/layout/DashBoardLayout";
import RootLayout from "src/components/layout/RootLayout";
import { useCreateUserMutation } from "src/redux/api/authApi";
import { useCreateServiceMutation } from "src/redux/api/serviceApi";

const CreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const { name, email, password, address, contactNo, image } = data;
    const userData = {
      name,
      email,
      password,
      address,
      contactNo,
      image,
    };

    const result = await createUser(userData).unwrap();
    console.log(result);
    if (result.success == true) {
      toast.success(result.message);
      reset();
      router.push("/dashboard/user-manage");
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <Card
      color="transparent"
      className="flex justify-center items-center shadow h-screen"
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
              color="blue"
              size="lg"
              label="Name"
              {...register("name", { required: true })}
            />
            <Input
              type="email"
              color="blue"
              size="lg"
              label="Email"
              {...register("email", { required: true })}
            />
            <Input
              color="blue"
              size="lg"
              label="Password" // Corrected label
              {...register("password", { required: true })} // Corrected field name
            />
            <Input
              color="blue"
              type="text"
              size="lg"
              label="Address"
              {...register("address", { required: true })}
            />
            <Input
              color="blue"
              type="text"
              size="lg"
              label="Contact NO"
              {...register("contactNo", { required: true })}
            />
            <Input
              color="blue"
              type="text"
              size="lg"
              label="Image URL"
              {...register("image", { required: true })}
            />
          </div>

          <Button
            className="mt-6 bg-primary hover:bg-secondary"
            fullWidth
            type="submit"
          >
            Create User
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default CreateUser;
CreateUser.getLayout = function getLayout(page) {
  return <MultiLevelSidebar>{page}</MultiLevelSidebar>;
};
