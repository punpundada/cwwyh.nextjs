import { IResponce } from "@/types/IResponce";
import { createBaseService } from "../base/BaseService";
import { IRecipe, IRecipeService } from "@/types/IRecipe";

export class RecipeService {
    static getAllRecipe =async ():Promise<IRecipeService> => {
        const result = await createBaseService().get(
            '/recipe/get'
        );
        return result.data;
    };

    static addRecipe = async(recipe:IRecipe):Promise<IResponce>=>{
        const result = await createBaseService().post(
            `/recipe/add`,
            recipe
        );
        return result.data;
    };

    static deleteRecipe =async (RecipeId:string):Promise<IResponce> => {
        const result = await createBaseService().delete(
            `/delete/${RecipeId}`
        )
        return result.data;
    };

    static getRecipesByIngredients =async (ingredientsTosearch:string[]):Promise<IRecipe[]> => {
        const result = await createBaseService().post(
            `/recipe/getByIngredients`,
            ingredientsTosearch
        );
        return result.data;
    }

    static addRecipeImageUrl =async (recipeId:string,newImgUrls:string[]):Promise<IResponce> => {
            const responce = await createBaseService().post(
                `/recipe/image/add`,
                {
                    recipeId,
                    newImgUrls
                }
            );
            return responce.data;
    };

    // static deleteOneImage = async (recipeId:string , imageId :string):Promise<IResponce>=>{
    //     const responce = await createBaseService().delete(
    //         `/recipe/image/delete`
    //     )
    // };

    static getOneRecipe =async (recipeId:string):Promise<IRecipe> => {
        const responce = await createBaseService().get(
            `/recipe/get/${recipeId}`
        );
        return responce.data;
    };

}