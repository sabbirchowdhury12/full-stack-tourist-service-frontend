import React from "react";
import { useForm } from "react-hook-form";
import RootLayout from "src/components/layout/RootLayout";
import { useUserLoginMutation } from "src/redux/api/authApi";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { setLocalStorage } from "src/utiles/localStorage";
import useUserFromLocalStorage from "src/customHooks/useUserFromLocalStorage";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const { register, handleSubmit } = useForm();

  const user = useUserFromLocalStorage();
  if (user) {
    router.push("/");
    return;
  }
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const result = await userLogin({ ...data }).unwrap();

      setLocalStorage("accessToken", result.data.accessToken);
      setLocalStorage("user", result.data.user);

      toast.success(result.message);
      router.push("/");
    } catch (err) {
      toast.success("something wrong");
    }
  };

  return (
    <Card
      color="transparent"
      className="flex justify-center mx-auto items-center bg-[#E5F0FD] h-screen"
      shadow={false}
    >
      <Toaster />
      <div className="bg-white p-5 lg:p-10 rounded-md">
        <Typography variant="h4" color="blue-gray" className="text-center">
          LOGIN
        </Typography>
        <Typography color="gray" className="mt-1 font-normal"></Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" {...register("email")} />
            <Input
              type="password"
              size="lg"
              label="Password"
              {...register("password", { required: true })}
            />
          </div>

          <Button
            className="mt-6 bg-primary hover:bg-secondary"
            fullWidth
            type="submit"
          >
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have any account?{" "}
            <Link href="/signup" className="font-medium text-primary">
              SIGN UP
            </Link>
          </Typography>
        </form>
      </div>
    </Card>
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
{
  /* <form onSubmit={handleSubmit(onSubmit)}>
<input {...register("email")} />

<input {...register("password", { required: true })} />

<input className="text-primary" type="submit" />
</form> */
}
