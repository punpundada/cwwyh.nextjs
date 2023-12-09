"use client";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "@/hooks/common/useDebounce";
import { useRouter } from "next/navigation";
const RecipeSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  useEffect(() => {
    if(debouncedSearch !== ''){
      router.push(`/recipe?search=${debouncedSearch}`);
    }else{
      router.push(`/recipe`);
    }
    // console.log(debouncedSearch)
  }, [debouncedSearch]);
  return (
    <TextField
      name="searchRecipe"
      label="Search Recipe"
      onChange={(e) => setSearch(e.target.value)}
      size="small"
      fullWidth
      variant="standard"
      inputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton>{<SearchIcon />}</IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default RecipeSearch;
