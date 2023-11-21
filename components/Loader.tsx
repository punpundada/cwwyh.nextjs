import { Backdrop, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  const [open, setOpen] = React.useState(isLoading);
  const [isLonger, setIsLonger] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLonger(true);
    }, 6000);
  }, []);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <Grid
          container
          direction={"column"}
          alignContent={"center"}
          spacing={1}
        >
          {isLonger && (
            <Grid item className="text-center">
              <h1>
                Request is taking longer than expected please wait or reload
              </h1>
            </Grid>
          )}
          <Grid
            container
            item
            justifyContent={"center"}
            alignContent={"center"}
          >
            <CircularProgress color="inherit" />
          </Grid>
        </Grid>
      </Backdrop>
    </div>
  );
};

export default Loader;
