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
