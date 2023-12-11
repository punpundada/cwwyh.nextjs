import RecipeSearch from "@/components/ui/RecipeSearch";
import { Grid, Paper } from "@mui/material";
import Link from "next/link";
import React from "react";

const Recipelauout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container justifyContent={"center"} spacing={2}>
      <Grid item xs={12} sm={12} md={10} container>{children}</Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={2}
        className="mt-9 flex flex-col justify-start gap-2"
      >
        <RecipeSearch />
        <Paper elevation={3}>
          <Grid className="p-4 flex flex-col items-center gap-2">
            <Grid item className="menu__link">
            <Link href={'/recipe/add'} className=" font-medium font-serif text-lg">Add Your Recipe</Link>
            </Grid>
            {/* <h3>Hello</h3>
            <h3>Hello</h3>
            <h3>Hello</h3>
            <h3>Hello</h3> */}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Recipelauout;
