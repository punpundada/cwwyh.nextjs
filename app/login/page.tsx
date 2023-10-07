"use client";
import { useForm } from "react-hook-form";
import { ILoginProp } from "@/types/ILogin";
import InputController from "@/components/muiControllers/InputController";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Grid, Paper, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginData } from "@/hooks/UseLoginData";
import { useTheme } from "@mui/material";

const LoginPage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const schema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().min(6).max(25).required("Password is required"),
  });

  const router = useRouter();

  const { control, handleSubmit } = useForm<ILoginProp>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { isLoading, mutateAsync } = useLoginData();
  const SubmitHandler = async (formData: ILoginProp) => {
    try {
      await mutateAsync(formData);
      router.push("/recipe");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height={"92vh"}
    >
      {isSmall && (
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          md={6}
          height={"100%"}
        >
          Image
        </Grid>
      )}
      <Grid
        item
        container
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
        sm={12}
        md={6}
        height={"100%"}
      >
        <Paper elevation={3} className="h-2/3 w-2/3">
          <Grid
            container
            direction={"column"}
            spacing={2}
            padding={4}
            marginTop={4}
            component={'form'}
            onSubmit={handleSubmit(SubmitHandler)}
          >
            <Grid item>Login</Grid>
            <Grid item>
              <InputController control={control} name="email" label="Email" />
            </Grid>
            <Grid item>
              <InputController
                control={control}
                name={"password"}
                label="Password"
                type="password"
              />
            </Grid>
            <Grid item container justifyContent={"end"} alignItems={"center"}>
              <Button type="submit" variant="outlined" disabled={isLoading}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
