import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import Signup from "@/components/auth/Signup";

const SignupPage = () => {

  return (
    <Grid
      container
      className="bg-app-primary h-screen w-screen"
      justifyContent={"center"}
    >
      <Grid container item xs={12} justifyContent={"center"}>
        <Grid item xs={12} md={3}>
          <Signup />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
