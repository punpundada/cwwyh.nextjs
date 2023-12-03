import { IRecipe } from "@/types/IRecipe";
import axios from "axios";
import { cache } from "react";
interface IAllRecipeResponce {
  isSuccess: boolean;
  data: {
    recipes: IRecipe[];
    message: string;
  };
}
const getAllRecipeService = cache(async (page:(string | string[] | 0)):Promise<IAllRecipeResponce> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  let responce;
  try {
    responce = await axios.get<IAllRecipeResponce>(`${baseUrl}/recipe/get?page=${page?page : 0}`);
    return responce.data;
  } catch (error) {
    console.log(error);
    return  Promise.reject(responce);
  }
});

export default getAllRecipeService;
