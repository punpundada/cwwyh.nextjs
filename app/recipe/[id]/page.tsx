"use client"
import Loader from '@/components/Loader'
import { UseRecipeById } from '@/hooks/recipe/UseRecipeById'
import React from 'react'

const RecipeById = ({ params }: { params: { id: string }}) => {
  // console.log(params)
  const {data,isLoading,isError}=UseRecipeById(params.id)

  // console.log(data?.data.data.message)

 if(isLoading){
  return <Loader isLoading={isLoading} />;
 }
  return (
    <div>
      <h1>Recipe by id {data?.data.data.recipes.recipeName}</h1>
    </div>
  )
}

export default RecipeById
