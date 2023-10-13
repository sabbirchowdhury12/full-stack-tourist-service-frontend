import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RootLayout from "src/components/layout/RootLayout";
import { useCreateUserMutation } from "src/redux/api/authApi";
import {
  Card,
  Input,
  Button,
  Typography,
  useSelect,
} from "@material-tailwind/react";
import { setLocalStorage } from "src/utiles/localStorage";
import Link from "next/link";
import { useRouter } from "next/router";

const SignupPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [createUser] = useCreateUserMutation();
  const { register, handleSubmit } = useForm();

  if (user) {
    router.push("/");
    return;
  }
  const onSubmit = async (data) => {
    const { name, email, password, confirmPassword } = data;
    setError("");
    if (password !== confirmPassword) {
      setError("password and confirm password should have matched");
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    const result = await createUser({ ...userData }).unwrap();

    setLocalStorage("accessToken", result.data.accessToken);
    setLocalStorage("user", result.data.user);
  };

  return (
    <Card
      color="transparent"
      className="flex justify-center items-center bg-[#E5F0FD] shadow h-screen"
      shadow={false}
    >
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
              label="Name"
              {...register("name", { required: true })}
            />
            <Input
              size="lg"
              label="Email"
              {...register("email", { required: true })}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              {...register("password", { required: true })}
            />
            <Input
              type="password"
              size="lg"
              label="Confirm Password"
              {...register("confirmPassword", { required: true })}
            />
          </div>
          <p className="text-sm text-sub_primary italic">{error}</p>
          <Button
            className="mt-6 bg-primary hover:bg-secondary"
            fullWidth
            type="submit"
          >
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary">
              LOGIN
            </Link>
          </Typography>
        </form>
      </div>
    </Card>
  );
};

export default SignupPage;

SignupPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
