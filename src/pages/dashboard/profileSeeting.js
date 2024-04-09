import { Button, Card, Input, Typography } from "@material-tailwind/react";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { MultiLevelSidebar } from "src/components/layout/DashBoardLayout";
import RootLayout from "src/components/layout/RootLayout";
import {
  useChangePasswordMutation,
  useUpdateProfileMutation,
} from "src/redux/api/authApi";
import { getDecodedeAccessToken } from "src/utiles/localStorage";

const ProfileSeeting = () => {
  const [form, setForm] = useState(true);
  const { register, handleSubmit, reset } = useForm();

  const [updateProfile] = useUpdateProfileMutation();
  const [changePassword] = useChangePasswordMutation();

  const user = getDecodedeAccessToken();
  const id = user?.id;

  const handleUpdateProfile = async (data) => {
    const userData = {
      name: data?.name,
      address: data?.address,
      contactNo: data?.contactNO,
      image: data?.image,
    };

    try {
      const result = await updateProfile({ id, userData });
      console.log(result);
      if (result?.data?.data?.id) {
        toast.success("profile update successfully");
        reset();
        localStorage.setItem("user", JSON.stringify(result?.data?.data));
      }
    } catch (err) {
      toast.error("try again");
    }
  };

  const handleChangePassword = async (data) => {
    const { currentPassword, newPassword } = data;

    if (data.newPassword !== data.newPasswordAgain) {
      console.log("not matched");
      toast.error("password not matched");
      return;
    }

    const passwordValue = {
      password: newPassword,
      currentPassword,
    };

    try {
      const result = await changePassword({ id, ...passwordValue });
      toast.success("password changed");
      reset();
    } catch (err) {
      toast.error("try again");
    }
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center h-screen">
        <p className="font-bold text-center mb-5">Change your Information</p>

        <div className="cursor-pointer">
          <span
            onClick={() => setForm(true)}
            className={`${
              form ? "border-b border-primary" : undefined
            } pb-2 mb-2`}
          >
            Personal Information{" "}
          </span>
          <span
            className={`${
              !form ? "border-b border-primary " : undefined
            } pb-2 mb-2 ml-8`}
            onClick={() => setForm(false)}
          >
            Change Password{" "}
          </span>
        </div>

        <div className="">
          {form ? (
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit(handleUpdateProfile)}
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  type="text"
                  size="lg"
                  label="name"
                  {...register("name", { required: true })}
                />
                <Input size="xl" label="address" {...register("address")} />
                <Input
                  size="xl"
                  type="number"
                  label="contact no"
                  {...register("contactNO")}
                />
                <Input
                  size="xl"
                  type="text"
                  label="profile image"
                  {...register("image")}
                />
              </div>

              <Button
                className="mt-6 bg-primary hover:bg-secondary"
                fullWidth
                type="submit"
              >
                Change Information
              </Button>
            </form>
          ) : (
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit(handleChangePassword)}
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  type="password"
                  size="lg"
                  label="Current Password"
                  {...register("currentPassword", { required: true })}
                />
                <Input
                  size="xl"
                  type="password"
                  label="New Password"
                  {...register("newPassword")}
                />
                <Input
                  size="xl"
                  type="password"
                  label="New Password Again"
                  {...register("newPasswordAgain")}
                />
              </div>

              <Button
                className="mt-6 bg-primary hover:bg-secondary"
                fullWidth
                type="submit"
              >
                Change Password
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileSeeting;
ProfileSeeting.getLayout = function getLayout(page) {
  return <MultiLevelSidebar>{page}</MultiLevelSidebar>;
};
