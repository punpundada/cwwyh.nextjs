import { getRecipeByIdService } from "@/services/recipeService/getRecipeByIdService";
import { Grid } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data } = await getRecipeByIdService(params.id);
  const name = data.data.recipes.recipeName;
  return {
    title: {
      template: `%s | ${name}`,
      default: `${name}`,
    },
  };
}

const RecipeById = async ({ params }: { params: { id: string } }) => {
  const { data } = await getRecipeByIdService(params.id);
  console.log(data.data.recipes.imgUrls.length)
  return (
    <div className="bg-app-accent">
      <Grid container className="flex flex-col justify-center items-center">
        <Grid item xs={12}>
          {data.data.recipes.recipeName}
        </Grid>
        <Grid container item xs={12} className="flex gap-2 w-1/3 h-1/3 justify-center">
          {data.data.recipes.imgUrls.map((x) => {
            return (
              <Image
                src={x.imgUrl}
                alt="recipe Image"
                height={200}
                width={200}
                key={x._id}
                objectFit="cover"
              />
            );
          })}
          {/* {
                data.data.recipes.imgUrls.map((x)=>{

                  return( <Grid item  key={x._id} className="w-40 h-40 absolute">
                        <Image src  ={x.imgUrl} alt="recipe Image"  fill key={x._id} objectFit="cover" />
                    </Grid>)
                })
              } */}
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipeById;
