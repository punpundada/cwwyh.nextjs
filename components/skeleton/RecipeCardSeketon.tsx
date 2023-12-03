import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const RecipeCardSeketon = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
        <Skeleton variant="rectangular" className="w-full h-full" />
        <CardContent>
          <Skeleton variant="rectangular" className="w-full h-full" />
          <Skeleton variant="rectangular" className="w-full h-full" />
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Skeleton variant="rectangular" className="w-[64px] h-[30px]" />
      </CardActions>
    </Card>
  );
};

export default RecipeCardSeketon;
