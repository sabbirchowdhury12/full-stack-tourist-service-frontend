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
import {
  useGetSingleuserQuery,
  useUpdateProfileMutation,
} from "src/redux/api/authApi";

const UpdateUser = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGetSingleuserQuery(id);
  console.log(data);
  const [updateProfile] = useUpdateProfileMutation();

  const { register, handleSubmit, reset } = useForm();
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

    const result = await updateProfile({ id, userData }).unwrap();

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
      className="flex justify-center items-center bg-[#E5F0FD] shadow h-screen"
      shadow={false}
    >
      <Toaster />
      <div className="bg-white p-5 lg:p-10 rounded-md">
        <Typography variant="h4" color="blue-gray" className="text-center">
          EDIT USER
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
              label="User Name"
              defaultValue={data?.data?.name}
              {...register("name", { required: true })}
            />
            <Input
              color="blue"
              type="email"
              size="lg"
              label="Email"
              defaultValue={data?.data?.email}
              {...register("email", { required: true })}
            />
            <Input
              color="blue"
              size="lg"
              label="Address"
              defaultValue={data?.data?.address}
              {...register("address", { required: true })} // Corrected field name
            />
            <Input
              color="blue"
              type="number"
              size="lg"
              label="Contact No"
              defaultValue={data?.data?.contactNo}
              {...register("contactNo", { required: true })}
            />
            <Input
              color="blue"
              type="text"
              size="lg"
              label="Image URL"
              defaultValue={data?.data?.image}
              {...register("image", { required: true })}
            />
          </div>

          <Button
            className="mt-6 bg-primary hover:bg-secondary"
            fullWidth
            type="submit"
          >
            UPDATE USER
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default UpdateUser;

UpdateUser.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MultiLevelSidebar>{page}</MultiLevelSidebar>
    </RootLayout>
  );
};
