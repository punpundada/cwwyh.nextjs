export interface IRecipe {
  _id: string;
  recipeName: string;
  userId: string;
  ingredientsList: IngredientsList[];
  prepTime: string;
  difficultyLevel: string;
  imgUrls: ImgUrl[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface IngredientsList {
  ingredientId: string;
  quantity: string;
  _id: string;
}

interface ImgUrl {
  imgUrl: string;
  _id: string;
}
