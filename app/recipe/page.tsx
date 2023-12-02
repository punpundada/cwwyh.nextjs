import RecipeCard from "@/components/RecipeCard";
import getAllRecipeService from "@/services/recipeService/getAllRecipeService";
import { Grid, Paper } from "@mui/material";
const RecipePage = async () => {
  const {
    data: { recipes },
    isSuccess,
  } = await getAllRecipeService();
  if(isSuccess){
    console.log(recipes[0])
  }
  return (
    <Grid container className="w-screen justify-evenly">
      <Grid item container spacing={2} xs={12} md={8} className="mt-6">
        {isSuccess &&
          recipes &&
          recipes.map((recipe) => (
            <Grid key={recipe._id} item className="flex justify-center">
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
      <Grid item xs={12} md={3} className="mt-9">
        <Paper elevation={3}>
          <Grid className="p-4">
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
