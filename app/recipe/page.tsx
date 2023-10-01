'use client'
import img from '@/images/recipePage/jason-briscoe-VBsG1VOgLIU-unsplash.jpg'
import { RecipeService } from '@/services/recipeService/RecipeService'
import { IRecipe } from '@/types/IRecipe'

import Image from 'next/image'
import { useEffect, useState } from 'react'
const RecipePage = () => {
const [recipes ,setRecipes] = useState<IRecipe[]>([]);
  const getAllRecipe =async () => {
    try {
      const result = await RecipeService.getAllRecipe();
      if(result.isSuccess){
        setRecipes(result.data.recipes);
        console.log('Is success',result.isSuccess)
      };
    } catch (error) {
      console.log(error)
    }

  };

  useEffect(()=>{
    const getAllRecipe =async () => {
      try {
        const result = await RecipeService.getAllRecipe();
        if(result.isSuccess){
          setRecipes(result.data.recipes);
          console.log('Is success',result.data.recipes)
        };
      } catch (error) {
        console.log(error)
      }
    };
    getAllRecipe()
  },[])

  return (
    <div className='h-screen'>
       <div className='h-1/4'>

       </div>
    </div>
  )
}

export default RecipePage
