"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SearchRecipeButton = ({ type }: { type: 'SEARCH' | 'EXPLORE' }) => {
  const router = useRouter();
  if (type === "SEARCH"){

      return (
        <div
          onClick={() => router.push("/recipe")}
          className="z-30 absolute top-[40%] left-[13%] "
        >
          <button className="h-24 w-80 rounded-[2rem] bg-white text-2xl text-center font-bold text-black">
            Search Recipe
          </button>
        </div>
      );
  }else{
        return (
          <button className="w-24 h-5 bg-amber-600 rounded-lg text-center text-base flex items-center justify-center relative top-[0.20rem]">
            EXPLORE
          </button>
        );
  }
};

export default SearchRecipeButton;
