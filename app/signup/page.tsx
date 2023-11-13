"use client";
import InputController from "@/components/muiControllers/InputController";
import { SignupService } from "@/services/SignupService";
import { IResponce } from "@/types/IResponce";
import { ISignup } from "@/types/ISignup";
import { Button, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSignupData } from "@/hooks/auth/useSignupData";



const SignupPage = () => {
  const router = useRouter();
  const {isLoading , mutateAsync ,data:result} = useSignupData()
  const sumbitHandler = async (data: ISignup) => {
    try {
      // const result: IResponce = await SignupService.signup(data);
      
      await mutateAsync(data)
      if (result?.data.isSuccess) {
        toast.success(result.data.data.message);
        router.push("/login");
      } else {
        toast.error(result?.data.data.message);
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  const schema = yup.object({
    firstName: yup.string().required("Fist Name is a Required Field"),
    lastName: yup.string().required("Last Name is a Required Field"),
    email: yup
      .string()
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Enter Correct Email"
      )
      .required("Email is a Required field"),
    password: yup
      .string()
      .min(6, "Password must be more than 6 characters")
      .required("Password is a required Field"),
  });

  const { control, handleSubmit } = useForm<ISignup>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <div className="bg-app-primary h-screen text-app-text flex justify-center items-center  ">
      <form className="w-2/5 h-2/3 ">
        <Paper className="p-20 flex flex-col justify-center items-center gap-4">
          <h5>Sign UP</h5>
          <InputController
            control={control}
            label="First Name"
            name="firstName"
          />
          <InputController
            control={control}
            label="Last Name"
            name="lastName"
          />
          <InputController control={control} label="Email" name="email" />
          <InputController control={control} label="Password" name="password"/>
          <Button variant="contained" type="submit" onClick={handleSubmit(sumbitHandler)} >
            Sign up
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default SignupPage;
