import { IRecipe } from "@/types/IRecipe";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IRecipe[] =[];

 const RecipeSlice = createSlice({
    name:'Recipe',
    initialState,
    reducers:{
        addRecipe:(state , action:PayloadAction<IRecipe> )=>{
            return [...state,action.payload]
        },
        deleteRecipe:(state,action:PayloadAction<number>)=>{
            if(state.length === 0){
                return [];
            }else{
                const newState = [...state];
                newState.splice(action.payload,1);
                return [...newState];
            }
        },
        addRecipeList:(state,action:PayloadAction<IRecipe[]>)=>{
            return [...state,...action.payload]
        }
    }
})

export const {addRecipe,deleteRecipe}=RecipeSlice.actions;
export const RecipeReducer =  RecipeSlice.reducer ;
