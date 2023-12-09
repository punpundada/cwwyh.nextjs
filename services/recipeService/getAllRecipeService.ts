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

const getAllRecipeService = cache(
  async (
    page: string | string[] | 0,
    search: string | string[] | undefined
  ): Promise<IAllRecipeResponce> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    let responce;
    let restUrl = "/recipe/get";
    if (page && search !== undefined && search !== "") {
      restUrl = `${restUrl}?search=${search}&page=${page}`;
    }
    if (page && +page > 0) {
      restUrl = `${restUrl}?page=${page}`;
    }
    if (search  !== undefined && search !== "") {
      restUrl = `${restUrl}?search=${search}`;
    }
    try {
      responce = await axios.get<IAllRecipeResponce>(`${baseUrl}${restUrl}`);
      return responce.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(responce);
    }
  }
);

export default getAllRecipeService;
