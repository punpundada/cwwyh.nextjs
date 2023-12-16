"use client"
import Loader from '@/components/Loader'
import { UseRecipeById } from '@/hooks/recipe/UseRecipeById'
import { Metadata } from 'next'
import React from 'react'

export async  function generateMetadata({ params }: { params: { id: string }}):Promise<Metadata>{

  const metadata:Metadata ={
    title:{
      template:`%s | ${params.id}`,
      default:`${params.id}`
    }
  } 
  return  metadata;
}

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
