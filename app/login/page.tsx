"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ILoginProp } from "@/types/ILogin";
import InputController from "@/components/muiControllers/InputController";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Paper } from "@mui/material";
import { LoginService } from "@/services/LoginServices";
import { IResponce } from "@/types/IResponce";
import {  toast } from 'react-toastify';
import Link from "next/link";
import { useRouter } from "next/navigation";



const LoginPage = () => {

  const schema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().min(6).max(25).required("Password is required"),
  });

  const router = useRouter();

  const { control, handleSubmit ,formState:{isSubmitting} } = useForm<ILoginProp>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver:yupResolver(schema)
  });

  const submitHandler = async (data:ILoginProp)=>{
    try {
      const result:IResponce =await LoginService.login(data)
      if(result.isSuccess){
        sessionStorage.setItem('token',result.data.accessToken);
        toast.success(result.data.message);
        router.push('/recipe')
            }
      else{
        toast.error(result.data.message)
      }
    } catch (error : any) {
      toast.error(error.message)
    }
    // const baseUrl = process.env.BASE_URL;
    // console.log(baseUrl)
  };

  return (
    <div className="bg-app-primary h-full text-app-text flex justify-center items-center  ">
      <form className="w-screen h-screen flex justify-center items-center" onSubmit={handleSubmit(submitHandler)} >
        <Paper className="w-1/3 h-3/5">
          {/* <p >From Pantry to Plate: Cook with What You Have  – <br/>The Home of Effortless Cooking Inspiration.</p> */}
          <div className="p-20 flex flex-col">
            <p className="font-semibold">Login</p>
            <div className="flex flex-col gap-4">

              <InputController 
              control={control} 
              name="email" 
              label="Email"
               />

              <InputController
                control={control}
                name={"password"} 
                label="Password"
                type="password"
              />

            </div>
            <div className="flex relative justify-end">
              <Button color="primary" type="submit" variant="contained" disabled={isSubmitting} >Login</Button>
            </div>
          <h6>Do not have an account? 
            <Link href={'/signup'} className="text-app-accent hover:text-app-primary" >  Signup</Link>
          </h6>
          </div>
        </Paper>
      </form>
    </div>
  );
};

export default LoginPage;
