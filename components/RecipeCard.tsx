'use client'
import { IRecipeCardProp } from "@/types/IRecipeCardProp";
import { Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const RecipeCard = ({ description, imageUrl, name , id}: IRecipeCardProp) => {
  const router = useRouter()
  const navigateToSingleRecipe =()=>{
    router.push(`/recipe/${id}`)  
  }
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Paper elevation={3} className="w-9/12 h-96" onClick={()=>navigateToSingleRecipe()}>
      <Grid container className="h-full w-full">
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          // bgcolor={"ActiveBorder"}
          height={isSmall ? "60%" : "100%"}
          className="flex justify-center items-center overflow-hidden bg-app-secondary relative"
        >
          <Image
            src={imageUrl}
            alt="Food Image"
            fill
            objectFit="cover"
            quality={76}
            // height={200}
            // width={300}
            // className="object-cover"
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={6}
          lg={6}
          bgcolor={"ButtonFace"}
          height={isSmall ? "40%" : "100%"}
          className=""
        >
          <Grid item className="font-extrabold text-2xl h-1/4">
            {name.toLocaleUpperCase()}
          </Grid>
          <Grid item className="overflow-scroll h-3/4 p-2">
            {description}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RecipeCard;
