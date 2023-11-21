"use client";
import {
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InputController from "../muiControllers/InputController";
import { useSignupData } from "@/hooks/auth/useSignupData";
import { ISignup } from "@/types/ISignup";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Loader from "../Loader";
import img from "@/images/WebsiteImages/pexels-pixabay-327158.jpg";
const  Signup = () => {
  const [hasLoaded, setHasLoaded] = useState(true);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const { isLoading, mutateAsync, data: result ,isSuccess } = useSignupData();
  const sumbitHandler = async (data: ISignup) => {
    try {
      await mutateAsync(data);
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
      .required("Email is a Required field")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Enter Correct Email"
      ),
    password: yup
      .string()
      .required("Password is a required Field")
      .min(6, "Password must be more than 6 characters"),
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

  const containerStyle = {
    // backgroundImage: `url(${img.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80%", // Adjust the height accordingly
    marginTop: "4rem", // Adjust the top margin accordingly
    borderRadius: "1.5rem", // Add border-radius for a rounded appearance
  };

  useEffect(() => {
    setTimeout(()=>{
      setHasLoaded(false)
    },500)
  }, []);

  useEffect(()=>{
    if(result && result.data.isSuccess){
      router.push('/login')
    }
  },[result])
  

  if (isLoading || hasLoaded) {
    return <Loader isLoading={isLoading || hasLoaded} />;
  }  

  return (
    <>
    <Paper className="h-4/5 mt-4 rounded-3xl" >
      <Grid
        container
        justifyContent={"center"}
        className="mt-6"
        spacing={isSmall ? 2 : 0}
      >
        <Grid item xs={10} className="mt-4">
          <Typography component={"h1"} className="text-3xl text-center">
            Welcome to{" "}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography component={"h1"} className="text-xl text-center ">
            Cook With What You Have
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        justifyContent={"center"}
        className="mt-4 max-h-16 "
        spacing={isSmall ? 2 : 0}
      >
        <Grid item xs={10} className="max-h-[4.5rem]">
          <InputController
            control={control}
            label="First Name"
            name="firstName"
          />
        </Grid>
        <Grid item xs={10} className="max-h-[4.5rem]">
          <InputController
            control={control}
            label="Last Name"
            name="lastName"
          />
        </Grid>
        <Grid item xs={10} className="max-h-[4.5rem]">
          <InputController control={control} label="Email" name="email" />
        </Grid>
        <Grid item xs={10} className="max-h-[4.5rem]">
          <InputController control={control} label="Password" name="password" />
        </Grid>
        <Grid container item justifyContent={"end"} xs={10} className="mt-6">
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit(sumbitHandler)}
            className="bg-[#7489d8]"
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </Paper>
    </>

  );
};

export default Signup;
