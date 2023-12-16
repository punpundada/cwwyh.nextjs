import { IRecipe } from "@/types/IRecipe";
import axios, { AxiosResponse } from "axios"
import { cache } from "react";
interface IFindRecipe {
    message: string;
    data:{
      recipes:IRecipe,
      message:string
    }
  }
export const getRecipeByIdService =cache(async (id:string):Promise<AxiosResponse<IFindRecipe, any>>=>{
    let res;
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        res = await  axios.get<IFindRecipe>(
            `${baseUrl}/recipe/get/${id}`
        )
        return res
    } catch (error) {
        console.log(error)
        return  Promise.reject(res)
    }
})