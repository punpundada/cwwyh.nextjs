import Loader from "@/components/loader/loader";
import { Grid } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <Grid className="flex w-screen h-[80vh] justify-center items-center">
        <Grid item className="justify-center">
        <Loader />
        </Grid>
    </Grid>
  );
};

export default loading;
