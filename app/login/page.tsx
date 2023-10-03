"use client";
import { useForm } from "react-hook-form";
import { ILoginProp } from "@/types/ILogin";
import InputController from "@/components/muiControllers/InputController";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Paper } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginData } from "@/hooks/UseLoginData";


const LoginPage = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().min(6).max(25).required("Password is required"),
  });

  const router = useRouter();

  const {
    control,
    handleSubmit,
  } = useForm<ILoginProp>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { isLoading,mutateAsync } = useLoginData();
  const SubmitHandler = async(formData: ILoginProp) => {
    try {
       await mutateAsync(formData);
      router.push("/recipe");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="bg-app-primary h-full text-app-text flex justify-center items-center  ">
      <form
        className="w-screen h-screen flex justify-center items-center"
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <Paper className="w-1/3 h-3/5">
          {/* <p >From Pantry to Plate: Cook with What You Have  – <br/>The Home of Effortless Cooking Inspiration.</p> */}
          <div className="p-20 flex flex-col">
            <p className="font-semibold">Login</p>
            <div className="flex flex-col gap-4">
              <InputController control={control} name="email" label="Email" />

              <InputController
                control={control}
                name={"password"}
                label="Password"
                type="password"
              />
            </div>
            <div className="flex relative justify-end">
              <Button
                color="primary"
                type="submit"
                variant="contained"
                disabled={isLoading}
              >
                Login
              </Button>
            </div>
            <h6>
              Do not have an account?
              <Link
                href={"/signup"}
                className="text-app-accent hover:text-app-primary"
              >
                {" "}
                Signup
              </Link>
            </h6>
          </div>
        </Paper>
      </form>
    </div>
  );
};

export default LoginPage;
