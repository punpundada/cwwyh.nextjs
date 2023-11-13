"use client";
import Loader from "@/components/Loader";
import RecipeCard from "@/components/RecipeCard";
import { UseAllRecipeData } from "@/hooks/recipe/UseAllRecipeData";
import { Button, Grid, Paper } from "@mui/material";
import { url } from "inspector";
import { useEffect } from "react";
let imagLink =
  "https://images.unsplash.com/photo-1471478108131-9b2335c21611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHwxNiUyMCo5JTIwZm9vZCUyMGltYWdlc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60";
const RecipePage = () => {
  const { data, isError, isLoading } = UseAllRecipeData();
  // useEffect(()=>{
  //   console.log(data?.data.data.recipes)
  // })
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }
  return (
    <Grid container className="w-screen justify-evenly">
      <Grid item container spacing={2} xs={12} md={8} className="mt-6">
      {data?.data.data.recipes.map((recipe) => (
            <Grid
              key={recipe._id}
              item
              className="flex justify-center"
            >
              <RecipeCard
                description={recipe.description}
                imageUrl={
                  recipe.imgUrls.length !== 0 ? recipe.imgUrls[0].imgUrl : ""
                }
                name={recipe.recipeName}
                id={recipe._id}
              />
            </Grid>
          ))}
      </Grid>
      <Grid item xs={12} md={3} className="mt-9" >
          <Paper elevation={3}>
              <Grid  className="p-4">
                  <h3>Hello</h3>
                  <h3>Hello</h3>
                  <h3>Hello</h3>
                  <h3>Hello</h3>
                  <h3>Hello</h3>
              </Grid>
          </Paper>
      </Grid>
      
    </Grid>
  );
};

export default RecipePage;
