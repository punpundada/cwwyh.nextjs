export interface IRecipeService {
  isSuccess:boolean;
  data:{
    recipes:IRecipe[],
    message:string
  }
};


export interface IRecipe {
  recipeName: string;
  ingredientsList: [
    {
      ingredientId: string;
      quantity: string;
    }
  ];
  prepTime: string;
  difficultyLevel: string;
  imgUrls: [
    {
      imgUrl: string;
    }
  ];
}
