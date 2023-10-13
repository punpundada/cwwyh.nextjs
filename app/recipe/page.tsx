"use client";
import RecipeCard from "@/components/RecipeCard";
import { UseAllRecipeData } from "@/hooks/recipe/UseAllRecipeData";
import { Grid } from "@mui/material";

const page = () => {
  const { data, isError, isLoading } = UseAllRecipeData();
  return (
    <Grid container direction={"row"}>
      <Grid item xs={9}>
        <Grid container direction={"column"} gap={4}>
          <Grid item bgcolor={"aqua"}>Search</Grid>
          <Grid item bgcolor={"bisque"} className="flex justify-center">
            <RecipeCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container direction={"column"} gap={4}>
          <Grid item bgcolor={"olive"}>USER CARD</Grid>
          <Grid item bgcolor={"tomato"}>i like to try</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default page;
