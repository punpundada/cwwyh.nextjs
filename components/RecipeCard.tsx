import { Grid, Paper,useMediaQuery,useTheme  } from "@mui/material";
import React from "react";

const RecipeCard = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Paper elevation={3} className="w-9/12 h-96">
      <Grid container className="h-full w-full">
        <Grid item xs={12} sm={12} md={6} lg={6}  bgcolor={'ActiveBorder'} height={isSmall?'60%':'100%' } className="">
          IMAGE
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={6}  bgcolor={'ButtonFace'} height={isSmall?'40%':'100%' } className="">
          Ricipe Info
        </Grid>

      </Grid>
    </Paper>
  );
};

export default RecipeCard;
