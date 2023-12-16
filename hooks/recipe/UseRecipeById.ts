import { createBaseService } from "@/services/base/BaseService";
import { IRecipe } from "@/types/IRecipe";
import axios from "axios";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

interface IFindRecipe {
  message: string;
  data:{
    recipes:IRecipe,
    message:string
  }
}

const fetchRecipeById = (id: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return axios.get<IFindRecipe>(`${baseUrl}/recipe/get/${id}`);
};

export const UseRecipeById = (id: string) => {
  return useQuery(["recipe-by-Id", id], () => fetchRecipeById(id),
   {
    onSuccess: (data) => {
      toast.success(data.data.message);
    },
    onError: (err: any) => {
      console.log(err.message);
      toast.error("Something Went Wrong");
    },
    cacheTime:3600000,//1 hour
    staleTime:60000,//1 min
  });
};
