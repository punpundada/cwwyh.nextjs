"use client";
import { IRecipeCardProp } from "@/types/IRecipeCardProp";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const RecipeCard = ({ description, imageUrl, name, id }: IRecipeCardProp) => {
  const router = useRouter();
  const navigateToSingleRecipe = () => {
    router.push(`/recipe/${id}`);
  };
  const shortDesc = description.split(" ").slice(0, 12).join(" ") + " ...";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigateToSingleRecipe()}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
          className="h-44"
        />
        <CardContent className="bg-slate-200">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="h-10">
            {shortDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="bg-slate-200">
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
