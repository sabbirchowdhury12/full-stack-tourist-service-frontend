import { Button, Input, Typography } from "@material-tailwind/react";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MultiLevelSidebar } from "src/components/layout/DashBoardLayout";
import RootLayout from "src/components/layout/RootLayout";
import {
  useChangePasswordMutation,
  useUpdateProfileMutation,
} from "src/redux/api/authApi";
import { getDecodedeAccessToken } from "src/utiles/localStorage";

const ProfileSeeting = () => {
  const [form, setForm] = useState(true);
  const { register, handleSubmit } = useForm();

  const [updateProfile] = useUpdateProfileMutation();
  const [changePassword] = useChangePasswordMutation();

  const user = getDecodedeAccessToken();
  const id = user?.id;

  const handleUpdateProfile = async (data) => {
    const profileData = {
      name: data?.name,
      address: data?.address,
      contactNo: data?.contactNO,
    };

    const result = await updateProfile({ id, profileData });
    console.log(result);
  };

  const handleChangePassword = async (data) => {
    const { currentPassword, newPassword } = data;

    if (data.newPassword !== data.newPasswordAgain) {
      console.log("not matched");
      return;
    }

    const passwordValue = {
      password: newPassword,
      currentPassword,
    };

    const result = await changePassword({ id, ...passwordValue });
    console.log(result);
  };
  return (
    <div className="w-full ">
      <p>seeting</p>

      <div className="flex gap-20 my-40">
        <p onClick={() => setForm(true)}>Personal Information </p>
        <p onClick={() => setForm(false)}>Change Password </p>
      </div>

      <div>
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
            </div>

            <Button
              className="mt-6 bg-primary hover:bg-secondary"
              fullWidth
              type="submit"
            >
              Login
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
              Login
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileSeeting;
ProfileSeeting.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MultiLevelSidebar>{page}</MultiLevelSidebar>
    </RootLayout>
  );
};
