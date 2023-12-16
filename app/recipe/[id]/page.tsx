import { getRecipeByIdService } from "@/services/recipeService/getRecipeByIdService";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data } = await getRecipeByIdService(params.id);
  const name=data.data.recipes.recipeName
  return {
    title: {
      template: `%s | ${name}`,
      default: `${name}`,
    },
  };
}

const RecipeById = async ({ params }: { params: { id: string } }) => {
  const { data } = await getRecipeByIdService(params.id);
  return (
    <div>
      <h1>Recipe by id {data.data.recipes.recipeName}</h1>
    </div>
  );
};

export default RecipeById;
