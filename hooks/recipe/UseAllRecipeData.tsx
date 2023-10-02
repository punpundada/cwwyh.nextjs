import { createBaseService } from "@/services/base/BaseService";
import { IRecipe } from "@/types/IRecipe";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

interface IAllRecipeResponce {
  isSuccess: boolean;
  data: {
    recipes: IRecipe[];
    message: string;
  };
}

const fetchAllRecipesData = ():Promise<AxiosResponse<IAllRecipeResponce, any>> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return createBaseService().get<IAllRecipeResponce>(`${baseUrl}/recipe/get`);
};

export const UseAllRecipeData = ()=>{
    return useQuery(['recipe-all-data'],()=>fetchAllRecipesData(),{
        // onSuccess:(data)=>{
        //     console.log('success all fetch',data.data.data.recipes)
        // },
        onError:(err:any)=>{
            console.log(err?.message);
        },
        cacheTime:600000,
        staleTime:60000
    })
}
