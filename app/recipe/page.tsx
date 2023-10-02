"use client"
import { UseAllRecipeData } from "@/hooks/recipe/UseAllRecipeData"

const page = () => {
  const {data , isError , isLoading} = UseAllRecipeData()
  return (
    <div className='h-screen'>
       <div className='h-1/4'>
        {
          isLoading ? <h4>Loading....</h4>:
          <ul>
            {
              data?.data.data.recipes.map((recipe)=>(
                <li key={recipe._id} >{recipe.recipeName}</li> 
              ))
            }
          </ul>
        }
       </div>
    </div>
  )
}

export default page
