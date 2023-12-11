import RecipeCard from "@/components/RecipeCard";
import RecipeSearch from "@/components/ui/RecipeSearch";
import getAllRecipeService from "@/services/recipeService/getAllRecipeService";
import { Grid, Paper } from "@mui/material";
import { Suspense } from "react";
const RecipePage = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const page = searchParams["page"] ?? 0;
  const search = searchParams["search"];
  const {
    data: { recipes },
    isSuccess,
  } = await getAllRecipeService(page, (search === "" && search ===undefined) ? undefined : search);
  return (
    <Grid container className="w-screen justify-around">
        <Grid
          item
          container
          spacing={2}
          // xs={12}
          // sm={12}
          // md={9}
          className="mt-6"
          justifyContent={"center"}
        >
          {isSuccess &&
            recipes &&
            recipes.map((recipe) => (
              <Grid
                key={recipe._id}
                item
                xs={12}
                sm={6}
                md={4}
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
    </Grid>
  );
};

export default RecipePage;
