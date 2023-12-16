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
        <CardContent className="bg-slate-300">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="h">
            {shortDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="bg-slate-300">
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
// <Paper elevation={3} className="w-9/12 h-96" onClick={()=>navigateToSingleRecipe()}>
//   <Grid container className="h-full w-full">
//     <Grid
//       item
//       xs={12}
//       sm={12}
//       md={6}
//       lg={6}
//       // bgcolor={"ActiveBorder"}
//       height={isSmall ? "60%" : "100%"}
//       className="flex justify-center items-center overflow-hidden bg-app-secondary relative"
//     >
//       <Image
//         src={imageUrl}
//         alt="Food Image"
//         fill
//         objectFit="cover"
//         quality={76}
//         // height={200}
//         // width={300}
//         // className="object-cover"
//       />
//     </Grid>
//     <Grid
//       item
//       container
//       xs={12}
//       sm={12}
//       md={6}
//       lg={6}
//       bgcolor={"ButtonFace"}
//       height={isSmall ? "40%" : "100%"}
//       className=""
//     >
//       <Grid item className="font-extrabold text-2xl h-1/4">
//         {name.toLocaleUpperCase()}
//       </Grid>
//       <Grid item className="overflow-scroll h-3/4 p-2">
//         {description}
//       </Grid>
//     </Grid>
//   </Grid>
// </Paper>
