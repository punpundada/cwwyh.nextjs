import { IRecipe } from '@/types/IRecipe';
import axios from 'axios';
import { cache } from 'react';
interface IAllRecipeResponce {
    isSuccess: boolean;
    data: {
      recipes: IRecipe[];
      message: string;
    };
  }
const getAllRecipeService =cache( async() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const responce = await axios.get<IAllRecipeResponce>(`${baseUrl}/recipe/get`)
    return responce.data
})

export default getAllRecipeService
