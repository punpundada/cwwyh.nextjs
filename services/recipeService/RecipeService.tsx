import { IResponce } from "@/types/IResponce";
import { createBaseService } from "../base/BaseService";

export class RecipeService {
    static getAllRecipe =async ():Promise<IResponce> => {
        const result = await createBaseService().get(
            '/recipe/get'
        );
        
        return result.data;
    }
}