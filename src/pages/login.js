import { useUserLoginMutation } from "@/redux/api/authApi";
import React from "react";
import { useForm } from "react-hook-form";
import RootLayout from "src/components/layout/RootLayout";

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const result = await userLogin({ ...data });
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />

      <input {...register("password", { required: true })} />

      <input className="text-primary" type="submit" />
    </form>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//#3554d1 -- background
//#051036 border
//#d93025
// #0d2857
